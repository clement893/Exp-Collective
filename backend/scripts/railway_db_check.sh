#!/bin/bash
# Script de vérification de la connexion DB sur Railway
# Usage: railway run --service backend bash scripts/railway_db_check.sh

echo "🔍 Vérification de la configuration de la base de données"
echo "=========================================================="
echo ""

# Vérifier DATABASE_URL
if [ -z "$DATABASE_URL" ]; then
    echo "❌ ERREUR: DATABASE_URL n'est pas définie"
    echo ""
    echo "💡 Solution:"
    echo "   1. Allez dans Railway → Service Backend → Variables"
    echo "   2. Ajoutez: DATABASE_URL=\${{Postgres.DATABASE_URL}}"
    echo "   (Remplacez 'Postgres' par le nom de votre service PostgreSQL)"
    exit 1
else
    echo "✅ DATABASE_URL est définie"
    # Masquer le mot de passe dans l'affichage
    DISPLAY_URL=$(echo "$DATABASE_URL" | sed 's/:[^@]*@/:***@/')
    echo "   URL: $DISPLAY_URL"
fi

echo ""
echo "🔗 Test de connexion à la base de données..."
echo ""

# Vérifier que Python est disponible
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 n'est pas disponible"
    exit 1
fi

# Exécuter le test de connexion
python3 << 'EOF'
import asyncio
import os
import sys
from pathlib import Path

# Ajouter le répertoire parent au path
sys.path.insert(0, str(Path(__file__).parent.parent))

from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text

async def test_connection():
    database_url = os.getenv("DATABASE_URL")
    
    if not database_url:
        print("❌ DATABASE_URL n'est pas définie")
        return False
    
    # S'assurer que l'URL utilise asyncpg
    if database_url.startswith("postgresql://") and "+asyncpg" not in database_url:
        database_url = database_url.replace("postgresql://", "postgresql+asyncpg://", 1)
        print("⚠️  URL convertie en postgresql+asyncpg://")
    
    try:
        engine = create_async_engine(
            database_url,
            pool_pre_ping=True,
            echo=False,
            pool_size=1,
            max_overflow=0
        )
        
        async with engine.begin() as conn:
            # Test de connexion basique
            result = await conn.execute(text("SELECT version(), current_database(), current_user"))
            row = result.fetchone()
            
            if row:
                version, db_name, db_user = row
                print("✅ Connexion réussie!")
                print(f"   - Version: {version.split(',')[0]}")
                print(f"   - Base de données: {db_name}")
                print(f"   - Utilisateur: {db_user}")
            
            # Vérifier si la table users existe
            result = await conn.execute(
                text("""
                    SELECT EXISTS (
                        SELECT FROM information_schema.tables 
                        WHERE table_schema = 'public' 
                        AND table_name = 'users'
                    )
                """)
            )
            users_exists = result.scalar()
            
            if users_exists:
                print("✅ Table 'users' existe")
                
                # Compter les utilisateurs
                result = await conn.execute(text("SELECT COUNT(*) FROM users"))
                user_count = result.scalar()
                print(f"   - Nombre d'utilisateurs: {user_count}")
            else:
                print("❌ Table 'users' n'existe pas")
                print("")
                print("💡 Solution: Exécutez les migrations")
                print("   railway run --service backend alembic upgrade head")
                return False
        
        await engine.dispose()
        return True
        
    except Exception as e:
        error_type = type(e).__name__
        error_msg = str(e)
        
        print(f"❌ Erreur: {error_type}")
        print(f"   Message: {error_msg}")
        print("")
        
        if "connection" in error_msg.lower() or "refused" in error_msg.lower():
            print("🔍 Diagnostic: Impossible de se connecter au serveur")
            print("💡 Solutions:")
            print("   1. Vérifiez que PostgreSQL est actif sur Railway")
            print("   2. Vérifiez que DATABASE_URL utilise le bon host")
            print("   3. Redémarrez les services")
        elif "authentication" in error_msg.lower():
            print("🔍 Diagnostic: Erreur d'authentification")
            print("💡 Solutions:")
            print("   1. Vérifiez les credentials dans DATABASE_URL")
            print("   2. Utilisez \${{Postgres.DATABASE_URL}} dans Railway")
        elif "database" in error_msg.lower() and "does not exist" in error_msg.lower():
            print("🔍 Diagnostic: La base de données n'existe pas")
            print("💡 Solutions:")
            print("   1. Vérifiez le nom de la base dans DATABASE_URL")
            print("   2. Créez la base de données si nécessaire")
        
        return False

if __name__ == "__main__":
    success = asyncio.run(test_connection())
    sys.exit(0 if success else 1)
EOF

EXIT_CODE=$?

echo ""
if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ Tous les tests sont passés!"
else
    echo "❌ Des problèmes ont été détectés"
    echo ""
    echo "📚 Consultez FIX_DATABASE_OAUTH_RAILWAY.md pour plus d'aide"
fi

exit $EXIT_CODE
