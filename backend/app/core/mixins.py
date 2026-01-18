"""
SQLAlchemy Mixins

Reusable mixins for SQLAlchemy models.
"""

from typing import TYPE_CHECKING, Optional
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import declared_attr, relationship

if TYPE_CHECKING:
    from sqlalchemy.orm import DeclarativeBase


# TenantMixin removed - multi-tenancy not needed for simple CMS
