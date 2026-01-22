#!/usr/bin/env python3
"""
Script de test de connexion à la base de données
Utilisez ce script pour diagnostiquer les problèmes de connexion à la base de données.
"""

import asyncio
import os
import sys
from pathlib import Path

# Ajouter le répertoire parent au path pour importer les modules
sys.path.insert(0, str(Path(__file__).parent.parent))

from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text


async def test_connection():
    """Test la connexion à la base de données."""
    print("🔍 Test de connexion à la base de données\n")
    
    # Récupérer DATABASE_URL depuis les variables d'environnement
    database_url = os.getenv("DATABASE_URL")
    
    if not database_url:
        print("❌ ERREUR: DATABASE_URL n'est pas définie dans les variables d'environnement")
        print("\n💡 Solutions:")
        print("   1. Vérifiez que vous avez un fichier .env dans le répertoire backend/")
        print("   2. Vérifiez que DATABASE_URL est définie dans Railway (si en production)")
        print("   3. Vérifiez que vous avez chargé les variables d'environnement")
        return False
    
    # Masquer le mot de passe dans l'affichage
    display_url = database_url
    if "@" in display_url:
        parts = display_url.split("@")
        if ":" in parts[0]:
            user_pass = parts[0].split("://")[1] if "://" in parts[0] else parts[0]
            if ":" in user_pass:
                user = user_pass.split(":")[0]
                display_url = display_url.replace(user_pass, f"{user}:***")
    
    print(f"📋 URL de connexion: {display_url}")
    
    # S'assurer que l'URL utilise asyncpg
    if database_url.startswith("postgresql://") and "+" not in database_url:
        print("⚠️  Conversion de postgresql:// en postgresql+asyncpg://")
        database_url = database_url.replace("postgresql://", "postgresql+asyncpg://", 1)
    elif not database_url.startswith("postgresql+asyncpg://"):
        if database_url.startswith("postgresql+"):
            parts = database_url.split("://", 1)
            if len(parts) == 2:
                database_url = f"postgresql+asyncpg://{parts[1]}"
                print("⚠️  Conversion du driver en asyncpg")
        elif database_url.startswith("postgresql://"):
            database_url = database_url.replace("postgresql://", "postgresql+asyncpg://", 1)
            print("⚠️  Conversion de postgresql:// en postgresql+asyncpg://")
    
    print(f"🔗 Tentative de connexion...\n")
    
    try:
        # Créer l'engine avec pool_pre_ping pour tester la connexion
        engine = create_async_engine(
            database_url,
            pool_pre_ping=True,
            echo=False,
            pool_size=1,
            max_overflow=0
        )
        
        # Tester la connexion
        async with engine.begin() as conn:
            result = await conn.execute(text("SELECT version(), current_database(), current_user"))
            row = result.fetchone()
            
            if row:
                version, db_name, db_user = row
                print("✅ Connexion à la base de données réussie!")
                print(f"\n📊 Informations de la base de données:")
                print(f"   - Version PostgreSQL: {version.split(',')[0]}")
                print(f"   - Base de données: {db_name}")
                print(f"   - Utilisateur: {db_user}")
                
                # Tester une requête simple
                result = await conn.execute(text("SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public'"))
                table_count = result.scalar()
                print(f"   - Nombre de tables: {table_count}")
                
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
                users_table_exists = result.scalar()
                
                if users_table_exists:
                    print("   - ✅ Table 'users' existe")
                    
                    # Compter les utilisateurs
                    result = await conn.execute(text("SELECT COUNT(*) FROM users"))
                    user_count = result.scalar()
                    print(f"   - Nombre d'utilisateurs: {user_count}")
                else:
                    print("   - ⚠️  Table 'users' n'existe pas (les migrations n'ont peut-être pas été appliquées)")
                    print("\n💡 Solution: Exécutez 'alembic upgrade head' pour créer les tables")
        
        await engine.dispose()
        print("\n✅ Test de connexion terminé avec succès!")
        return True
        
    except Exception as e:
        error_type = type(e).__name__
        error_msg = str(e)
        
        print(f"\n❌ ERREUR de connexion: {error_type}")
        print(f"   Message: {error_msg}\n")
        
        # Diagnostic basé sur le type d'erreur
        if "asyncpg" in error_type.lower() or "asyncpg" in error_msg.lower():
            print("🔍 Diagnostic: Problème avec le driver asyncpg")
            print("💡 Solutions:")
            print("   1. Vérifiez que asyncpg est installé: pip install asyncpg")
            print("   2. Vérifiez que DATABASE_URL utilise postgresql+asyncpg://")
        
        elif "connection" in error_msg.lower() or "refused" in error_msg.lower():
            print("🔍 Diagnostic: Impossible de se connecter au serveur PostgreSQL")
            print("💡 Solutions:")
            print("   1. Vérifiez que le service PostgreSQL est actif (Railway)")
            print("   2. Vérifiez l'host et le port dans DATABASE_URL")
            print("   3. Vérifiez que le backend peut atteindre PostgreSQL (même réseau)")
            print("   4. Vérifiez les règles de firewall")
        
        elif "authentication" in error_msg.lower() or "password" in error_msg.lower():
            print("🔍 Diagnostic: Erreur d'authentification")
            print("💡 Solutions:")
            print("   1. Vérifiez le nom d'utilisateur et le mot de passe dans DATABASE_URL")
            print("   2. Vérifiez que les credentials sont corrects dans Railway")
        
        elif "database" in error_msg.lower() and "does not exist" in error_msg.lower():
            print("🔍 Diagnostic: La base de données n'existe pas")
            print("💡 Solutions:")
            print("   1. Vérifiez le nom de la base de données dans DATABASE_URL")
            print("   2. Créez la base de données si nécessaire")
        
        elif "timeout" in error_msg.lower():
            print("🔍 Diagnostic: Timeout de connexion")
            print("💡 Solutions:")
            print("   1. Vérifiez que le serveur PostgreSQL est accessible")
            print("   2. Vérifiez la latence réseau")
            print("   3. Vérifiez que le pool de connexions n'est pas saturé")
        
        else:
            print("🔍 Diagnostic: Erreur inconnue")
            print("💡 Solutions:")
            print("   1. Vérifiez les logs complets du backend")
            print("   2. Vérifiez la configuration de DATABASE_URL")
            print("   3. Vérifiez que PostgreSQL est correctement configuré")
        
        return False


async def main():
    """Point d'entrée principal."""
    # Charger les variables d'environnement depuis .env si disponible
    try:
        from dotenv import load_dotenv
        env_path = Path(__file__).parent.parent / ".env"
        if env_path.exists():
            load_dotenv(env_path)
            print(f"📁 Variables d'environnement chargées depuis: {env_path}\n")
        else:
            print("⚠️  Fichier .env non trouvé, utilisation des variables d'environnement système\n")
    except ImportError:
        print("⚠️  python-dotenv non installé, utilisation des variables d'environnement système\n")
    
    success = await test_connection()
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    asyncio.run(main())
