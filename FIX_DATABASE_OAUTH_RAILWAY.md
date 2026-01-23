# 🚨 Résolution rapide : Erreur DB OAuth sur Railway

## ❌ Erreur
```
Database connection failed. Please check your database configuration and ensure the database service is available. The Google OAuth authentication succeeded, but user data could not be saved.
```

## ✅ Solution en 5 étapes (Railway)

### Étape 1 : Vérifier que PostgreSQL est actif

1. Allez sur [Railway Dashboard](https://railway.app)
2. Ouvrez votre projet
3. Vérifiez que le service **PostgreSQL** est actif (statut vert)
4. Si ce n'est pas le cas, créez un service PostgreSQL :
   - Cliquez sur **"New"** → **"Database"** → **"PostgreSQL"**

### Étape 2 : Vérifier DATABASE_URL dans le service Backend

1. Dans votre projet Railway, sélectionnez le service **Backend**
2. Allez dans l'onglet **Variables**
3. Cherchez la variable `DATABASE_URL`
4. **Si elle n'existe pas ou est vide**, ajoutez-la :
   ```
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   ```
   (Remplacez `Postgres` par le nom exact de votre service PostgreSQL)

### Étape 3 : Vérifier le format de DATABASE_URL

La variable `DATABASE_URL` doit utiliser le format `postgresql+asyncpg://` :

**Format correct :**
```
postgresql+asyncpg://postgres:password@host:port/database
```

**Si Railway fournit `postgresql://`**, le code le convertit automatiquement, mais vous pouvez aussi le faire manuellement.

### Étape 4 : Vérifier que les migrations sont appliquées

1. Dans Railway, allez dans votre service **Backend**
2. Ouvrez l'onglet **Deployments**
3. Cliquez sur le dernier déploiement
4. Ouvrez le **Shell** (ou utilisez Railway CLI)

**Exécutez les migrations :**
```bash
cd backend
alembic upgrade head
```

**Ou via Railway CLI :**
```bash
railway run --service backend alembic upgrade head
```

### Étape 5 : Redémarrer le service Backend

1. Dans Railway, sélectionnez le service **Backend**
2. Cliquez sur les **3 points** (menu)
3. Sélectionnez **"Restart"**

## 🔍 Vérification rapide

### Test 1 : Vérifier DATABASE_URL

Dans Railway, service Backend → Variables, vérifiez que :
- ✅ `DATABASE_URL` existe
- ✅ Elle commence par `postgresql://` ou `postgresql+asyncpg://`
- ✅ Elle contient un host, port, user, password et database

### Test 2 : Vérifier les logs

1. Service Backend → **Logs**
2. Cherchez des erreurs comme :
   - `connection refused`
   - `authentication failed`
   - `database does not exist`
   - `relation "users" does not exist`

### Test 3 : Vérifier la connexion (via Railway Shell)

1. Service Backend → **Shell**
2. Exécutez :
```bash
python -c "
import os
import asyncio
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text

async def test():
    db_url = os.getenv('DATABASE_URL', '')
    if not db_url:
        print('❌ DATABASE_URL non définie')
        return
    
    if db_url.startswith('postgresql://') and '+asyncpg' not in db_url:
        db_url = db_url.replace('postgresql://', 'postgresql+asyncpg://', 1)
    
    try:
        engine = create_async_engine(db_url, pool_pre_ping=True)
        async with engine.begin() as conn:
            await conn.execute(text('SELECT 1'))
        print('✅ Connexion réussie!')
        await engine.dispose()
    except Exception as e:
        print(f'❌ Erreur: {e}')

asyncio.run(test())
"
```

## 🎯 Solutions selon l'erreur dans les logs

### Erreur : "connection refused" ou "could not connect"
**Cause :** Le backend ne peut pas atteindre PostgreSQL
**Solution :**
1. Vérifiez que PostgreSQL est dans le même projet Railway
2. Vérifiez que `DATABASE_URL` utilise le bon host
3. Redémarrez les deux services

### Erreur : "authentication failed"
**Cause :** Mauvais credentials
**Solution :**
1. Vérifiez que `DATABASE_URL` utilise `${{Postgres.DATABASE_URL}}`
2. Ne définissez pas manuellement les credentials, utilisez la référence Railway

### Erreur : "relation 'users' does not exist"
**Cause :** Les migrations n'ont pas été appliquées
**Solution :**
```bash
railway run --service backend alembic upgrade head
```

### Erreur : "database does not exist"
**Cause :** La base de données n'existe pas
**Solution :**
1. Vérifiez que PostgreSQL est bien créé
2. Vérifiez le nom de la base dans `DATABASE_URL`

## 📋 Checklist de vérification

- [ ] Service PostgreSQL est actif (vert) sur Railway
- [ ] Variable `DATABASE_URL` existe dans le service Backend
- [ ] `DATABASE_URL` utilise `${{Postgres.DATABASE_URL}}` ou le format correct
- [ ] Les migrations ont été exécutées (`alembic upgrade head`)
- [ ] Le service Backend a été redémarré après les changements
- [ ] Les logs ne montrent pas d'erreurs de connexion

## 🆘 Si ça ne fonctionne toujours pas

1. **Vérifiez les logs complets** du backend sur Railway
2. **Testez la connexion** avec le script ci-dessus
3. **Vérifiez les métriques** Railway (CPU, mémoire, connexions)
4. **Recréez le service PostgreSQL** si nécessaire
5. **Contactez le support Railway** si le problème persiste

## 💡 Configuration recommandée Railway

**Service Backend - Variables :**
```env
ENVIRONMENT=production
DATABASE_URL=${{Postgres.DATABASE_URL}}
SECRET_KEY=your-secret-key-min-32-chars
FRONTEND_URL=https://your-frontend.railway.app
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Service PostgreSQL :**
- Créé automatiquement par Railway
- Fournit automatiquement `DATABASE_URL` aux autres services

## 🔗 Liens utiles

- [Railway Dashboard](https://railway.app)
- [Railway Docs - PostgreSQL](https://docs.railway.app/databases/postgresql)
- [Railway Docs - Variables](https://docs.railway.app/develop/variables)
