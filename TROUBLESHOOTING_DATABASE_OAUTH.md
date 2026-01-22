# 🔧 Dépannage : Erreur de connexion base de données lors de l'authentification Google OAuth

## ❌ Erreur rencontrée

```
{
  "success": false,
  "error": {
    "code": "HTTP_503",
    "message": "Database connection failed. Please check your database configuration and ensure the database service is available. The Google OAuth authentication succeeded, but user data could not be saved."
  }
}
```

## 🔍 Diagnostic

L'authentification Google OAuth **réussit**, mais la **connexion à la base de données échoue** lors de la sauvegarde des données utilisateur.

## ✅ Solutions

### 1. Vérifier la variable d'environnement `DATABASE_URL`

**Sur Railway (Production) :**
1. Allez dans votre projet Railway
2. Sélectionnez le service backend
3. Allez dans l'onglet **Variables**
4. Vérifiez que `DATABASE_URL` est définie et correcte

**Format attendu :**
```
postgresql+asyncpg://user:password@host:port/database
```

**Exemple Railway :**
```
postgresql+asyncpg://postgres:password@containers-us-west-xxx.railway.app:5432/railway
```

### 2. Vérifier que la base de données est accessible

**Test de connexion :**

Créez un script de test (`backend/test_db_connection.py`) :

```python
import asyncio
import os
from sqlalchemy.ext.asyncio import create_async_engine

async def test_connection():
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        print("❌ DATABASE_URL n'est pas définie")
        return
    
    # S'assurer que l'URL utilise asyncpg
    if database_url.startswith("postgresql://") and "+" not in database_url:
        database_url = database_url.replace("postgresql://", "postgresql+asyncpg://", 1)
    
    print(f"🔗 Tentative de connexion à: {database_url.split('@')[1] if '@' in database_url else 'N/A'}")
    
    try:
        engine = create_async_engine(
            database_url,
            pool_pre_ping=True,
            echo=False
        )
        
        async with engine.begin() as conn:
            result = await conn.execute("SELECT 1")
            print("✅ Connexion à la base de données réussie!")
        
        await engine.dispose()
    except Exception as e:
        print(f"❌ Erreur de connexion: {e}")

if __name__ == "__main__":
    asyncio.run(test_connection())
```

**Exécuter le test :**
```bash
cd backend
python test_db_connection.py
```

### 3. Vérifier les logs du backend

**Sur Railway :**
1. Allez dans votre service backend
2. Consultez les **logs** pour voir l'erreur exacte
3. Cherchez des messages comme :
   - `Database connection error`
   - `asyncpg.exceptions`
   - `OperationalError`
   - `Connection refused`

### 4. Vérifier la configuration du pool de connexions

Le fichier `backend/app/database.py` configure le pool avec :
- `pool_size=20`
- `max_overflow=0`

Si vous avez beaucoup de connexions simultanées, vous pouvez ajuster ces valeurs via les variables d'environnement :

```env
DB_POOL_SIZE=10
DB_MAX_OVERFLOW=20
```

### 5. Vérifier que le service de base de données est actif

**Sur Railway :**
1. Vérifiez que votre service PostgreSQL est **actif** (statut vert)
2. Vérifiez que le service backend peut communiquer avec le service PostgreSQL
3. Si vous utilisez Railway, assurez-vous que les deux services sont dans le même **projet**

### 6. Vérifier les credentials de la base de données

**Sur Railway :**
1. Allez dans votre service PostgreSQL
2. Consultez l'onglet **Variables** pour voir les credentials
3. Vérifiez que `DATABASE_URL` dans le backend correspond aux credentials de PostgreSQL

**Format Railway PostgreSQL :**
```
postgresql+asyncpg://postgres:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}
```

### 7. Vérifier la configuration réseau

Si vous êtes sur Railway, assurez-vous que :
- Le service backend et PostgreSQL sont dans le même projet
- Aucun firewall ne bloque la connexion
- Les variables d'environnement sont correctement partagées

### 8. Redémarrer les services

Parfois, un simple redémarrage résout les problèmes de connexion :

**Sur Railway :**
1. Redémarrez le service backend
2. Redémarrez le service PostgreSQL (si nécessaire)

### 9. Vérifier les migrations de base de données

Assurez-vous que les tables nécessaires existent :

```bash
cd backend
alembic upgrade head
```

### 10. Vérifier les logs détaillés

Activez les logs SQL pour voir les requêtes exactes :

**Ajoutez dans `backend/.env` :**
```env
SQL_ECHO=true
```

Cela affichera toutes les requêtes SQL dans les logs (attention : peut être verbeux).

## 🔍 Points à vérifier en priorité

1. ✅ **`DATABASE_URL` est définie et correcte**
2. ✅ **Le service PostgreSQL est actif**
3. ✅ **Les credentials sont corrects**
4. ✅ **Le backend peut atteindre PostgreSQL (même réseau/projet)**
5. ✅ **Les tables existent (migrations appliquées)**

## 📝 Exemple de configuration correcte Railway

**Service PostgreSQL - Variables :**
```
PGHOST=containers-us-west-xxx.railway.app
PGPORT=5432
PGDATABASE=railway
PGUSER=postgres
PGPASSWORD=xxx
```

**Service Backend - Variables :**
```
DATABASE_URL=postgresql+asyncpg://postgres:xxx@containers-us-west-xxx.railway.app:5432/railway
```

## 🆘 Si le problème persiste

1. **Vérifiez les logs complets** du backend sur Railway
2. **Testez la connexion** avec le script de test ci-dessus
3. **Vérifiez les métriques** de connexion dans Railway
4. **Contactez le support Railway** si le problème vient de leur infrastructure

## 📚 Ressources

- [Documentation Railway - PostgreSQL](https://docs.railway.app/databases/postgresql)
- [Documentation SQLAlchemy - Pool](https://docs.sqlalchemy.org/en/20/core/pooling.html)
- [Documentation asyncpg](https://magicstack.github.io/asyncpg/current/)
