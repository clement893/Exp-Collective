"""
CMS API Endpoints
Dashboard statistics and activity
"""

from typing import List
from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, and_

from app.models.page import Page
from app.models.post import Post
from app.models.file import File
from app.models.tag import Category, Tag
from app.models.user import User
from app.dependencies import get_current_user, get_db

router = APIRouter()


class CMSStats(BaseModel):
    totalPages: int
    totalPosts: int
    totalMedia: int
    totalCategories: int
    totalTags: int
    scheduledContent: int
    pendingReview: int


class ActivityItem(BaseModel):
    id: str
    type: str  # page, post, media
    title: str
    action: str  # created, updated, published, deleted
    author: str
    author_id: int
    timestamp: str
    resource_id: int
    resource_slug: str | None = None


class ActivityResponse(BaseModel):
    items: List[ActivityItem]
    total: int


@router.get("/cms/stats", response_model=CMSStats, tags=["cms"])
async def get_cms_stats(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get CMS statistics"""
    # Count pages
    pages_result = await db.execute(select(func.count(Page.id)))
    total_pages = pages_result.scalar() or 0

    # Count posts
    posts_result = await db.execute(select(func.count(Post.id)))
    total_posts = posts_result.scalar() or 0

    # Count media files
    media_result = await db.execute(select(func.count(File.id)))
    total_media = media_result.scalar() or 0

    # Count categories
    categories_result = await db.execute(select(func.count(Category.id)))
    total_categories = categories_result.scalar() or 0

    # Count tags
    tags_result = await db.execute(select(func.count(Tag.id)))
    total_tags = tags_result.scalar() or 0

    # Count scheduled content (posts/pages with future published_at)
    from datetime import datetime, timezone
    now = datetime.now(timezone.utc)
    
    scheduled_pages = await db.execute(
        select(func.count(Page.id)).where(
            and_(
                Page.status == 'draft',
                Page.published_at.isnot(None),
                Page.published_at > now
            )
        )
    )
    scheduled_posts = await db.execute(
        select(func.count(Post.id)).where(
            and_(
                Post.status == 'draft',
                Post.published_at.isnot(None),
                Post.published_at > now
            )
        )
    )
    scheduled_content = (scheduled_pages.scalar() or 0) + (scheduled_posts.scalar() or 0)

    # Count pending review (draft content)
    pending_pages = await db.execute(
        select(func.count(Page.id)).where(Page.status == 'draft')
    )
    pending_posts = await db.execute(
        select(func.count(Post.id)).where(Post.status == 'draft')
    )
    pending_review = (pending_pages.scalar() or 0) + (pending_posts.scalar() or 0)

    return CMSStats(
        totalPages=total_pages,
        totalPosts=total_posts,
        totalMedia=total_media,
        totalCategories=total_categories,
        totalTags=total_tags,
        scheduledContent=scheduled_content,
        pendingReview=pending_review,
    )


@router.get("/cms/activity", response_model=ActivityResponse, tags=["cms"])
async def get_cms_activity(
    limit: int = Query(10, ge=1, le=100),
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get recent CMS activity"""
    activities: List[ActivityItem] = []

    # Get recent pages
    pages_result = await db.execute(
        select(Page, User)
        .outerjoin(User, Page.user_id == User.id)
        .order_by(Page.updated_at.desc())
        .limit(limit)
    )
    for row in pages_result.all():
        page, user = row
        if user:
            activities.append(ActivityItem(
                id=f"page_{page.id}",
                type="page",
                title=page.title,
                action="published" if page.status == "published" else ("created" if page.created_at == page.updated_at else "updated"),
                author=user.name or user.email,
                author_id=user.id,
                timestamp=page.updated_at.isoformat() if page.updated_at else page.created_at.isoformat(),
                resource_id=page.id,
                resource_slug=page.slug,
            ))

    # Get recent posts
    posts_result = await db.execute(
        select(Post, User)
        .outerjoin(User, Post.author_id == User.id)
        .order_by(Post.updated_at.desc())
        .limit(limit)
    )
    for row in posts_result.all():
        post, user = row
        if user:
            activities.append(ActivityItem(
                id=f"post_{post.id}",
                type="post",
                title=post.title,
                action="published" if post.status == "published" else ("created" if post.created_at == post.updated_at else "updated"),
                author=user.name or user.email,
                author_id=user.id,
                timestamp=post.updated_at.isoformat() if post.updated_at else post.created_at.isoformat(),
                resource_id=post.id,
                resource_slug=post.slug if hasattr(post, 'slug') else None,
            ))

    # Sort by timestamp (most recent first) and limit
    activities.sort(key=lambda x: x.timestamp, reverse=True)
    activities = activities[:limit]

    return ActivityResponse(
        items=activities,
        total=len(activities),
    )


@router.get("/cms/pending-review", response_model=dict, tags=["cms"])
async def get_pending_review(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get count of items pending review"""
    pending_pages = await db.execute(
        select(func.count(Page.id)).where(Page.status == 'draft')
    )
    pending_posts = await db.execute(
        select(func.count(Post.id)).where(Post.status == 'draft')
    )
    count = (pending_pages.scalar() or 0) + (pending_posts.scalar() or 0)
    return {"count": count}
