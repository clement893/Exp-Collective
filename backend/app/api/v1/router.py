"""
API v1 router registration.
"""
from fastapi import APIRouter
from app.api.v1.endpoints import themes, theme_fonts, projects, websocket, admin, auth, two_factor, api_keys, users, health, db_health, newsletter, exports, imports, search, tags, activities, comments, favorites, templates, versions, shares, user_preferences, api_settings, organization_settings, general_settings, pages, forms, menus, support_tickets, seo, teams, invitations, rbac, notifications, api_connection_check, reports, media, insights, analytics, posts, subscriptions, bookings
from app.api import ai as ai_router

api_router = APIRouter()

# Register auth endpoints
api_router.include_router(
    auth.router,
    prefix="/auth",
    tags=["auth"]
)

# Register 2FA endpoints
api_router.include_router(
    two_factor.router,
    prefix="/auth/2fa",
    tags=["2fa"]
)

# Register API key endpoints
api_router.include_router(
    api_keys.router,
    prefix="/api-keys",
    tags=["api-keys"]
)

# Register user preferences endpoints (MUST be before /users/{user_id} route)
api_router.include_router(
    user_preferences.router,
    prefix="/users",
    tags=["user-preferences"]
)

# Register user endpoints (with pagination and optimization)
api_router.include_router(
    users.router,
    prefix="/users",
    tags=["users"]
)

# Register teams endpoints
api_router.include_router(
    teams.router,
    tags=["teams"]
)

# Register invitations endpoints
api_router.include_router(
    invitations.router,
    tags=["invitations"]
)

# Register theme endpoints
api_router.include_router(
    themes.router,
    prefix="/themes",
    tags=["themes"]
)

# Register theme font endpoints
api_router.include_router(
    theme_fonts.router,
    prefix="/theme-fonts",
    tags=["theme-fonts"]
)

# Register project endpoints
api_router.include_router(
    projects.router,
    prefix="/projects",
    tags=["projects"]
)

# Register WebSocket endpoints
api_router.include_router(
    websocket.router,
    tags=["websocket"]
)

# Register admin endpoints
api_router.include_router(
    admin.router,
    prefix="/admin",
    tags=["admin"]
)

# Register RBAC endpoints
api_router.include_router(
    rbac.router,
    tags=["rbac"]
)

# Register health check endpoints
api_router.include_router(
    health.router,
    prefix="/health",
    tags=["health"]
)

# Register database health check endpoints
api_router.include_router(
    db_health.router,
    prefix="/db-health",
    tags=["database-health"]
)

# Register AI endpoints
api_router.include_router(
    ai_router.router,
    tags=["ai"]
)

# Register newsletter endpoints
api_router.include_router(
    newsletter.router,
    prefix="/newsletter",
    tags=["newsletter"]
)

# Register subscription endpoints
api_router.include_router(
    subscriptions.router,
    tags=["subscriptions"]
)

# Register export endpoints
api_router.include_router(
    exports.router,
    prefix="/exports",
    tags=["exports"]
)

# Register import endpoints
api_router.include_router(
    imports.router,
    prefix="/imports",
    tags=["imports"]
)

# Register search endpoints
api_router.include_router(
    search.router,
    prefix="/search",
    tags=["search"]
)

# Register tags and categories endpoints
api_router.include_router(
    tags.router,
    prefix="/tags",
    tags=["tags", "categories"]
)

# Register activity endpoints
api_router.include_router(
    activities.router,
    prefix="/activities",
    tags=["activities"]
)

# Register comments endpoints
api_router.include_router(
    comments.router,
    prefix="/comments",
    tags=["comments"]
)

# Register favorites endpoints
api_router.include_router(
    favorites.router,
    prefix="/favorites",
    tags=["favorites"]
)

# Register templates endpoints
api_router.include_router(
    templates.router,
    prefix="/templates",
    tags=["templates"]
)

# Register versions endpoints
api_router.include_router(
    versions.router,
    prefix="/versions",
    tags=["versions"]
)

# Register shares endpoints
api_router.include_router(
    shares.router,
    prefix="/shares",
    tags=["shares"]
)

# Register notifications endpoints
api_router.include_router(
    notifications.router,
    tags=["notifications"]
)

# Register API settings endpoints
api_router.include_router(
    api_settings.router,
    prefix="/api-settings",
    tags=["api-settings"]
)

# Register organization settings endpoints
api_router.include_router(
    organization_settings.router,
    prefix="/settings/organization",
    tags=["organization-settings"]
)

# Register general settings endpoints
api_router.include_router(
    general_settings.router,
    prefix="/settings/general",
    tags=["general-settings"]
)

# Register pages endpoints
api_router.include_router(
    pages.router,
    tags=["pages"]
)

# Register forms endpoints
api_router.include_router(
    forms.router,
    tags=["forms"]
)

# Register menus endpoints
api_router.include_router(
    menus.router,
    tags=["menus"]
)

# Register support tickets endpoints
api_router.include_router(
    support_tickets.router,
    tags=["support"]
)

# Register SEO endpoints
api_router.include_router(
    seo.router,
    tags=["seo"]
)

# Register reports endpoints
api_router.include_router(
    reports.router,
    tags=["reports"]
)

# Register media endpoints
api_router.include_router(
    media.router,
    tags=["media"]
)

# Register insights endpoints
api_router.include_router(
    insights.router,
    tags=["insights"]
)

# Register analytics endpoints
api_router.include_router(
    analytics.router,
    tags=["analytics"]
)

# Register posts endpoints
api_router.include_router(
    posts.router,
    tags=["posts"]
)

# Register API connection check endpoints
api_router.include_router(
    api_connection_check.router,
    tags=["api-connection-check"]
)

# Register booking endpoints
api_router.include_router(
    bookings.router,
    prefix="/bookings",
    tags=["bookings"]
)
