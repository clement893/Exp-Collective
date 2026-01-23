"""
Masterclass Models
SQLAlchemy models for masterclass events
"""

from datetime import datetime
from sqlalchemy import (
    Column, DateTime, Integer, String, Text, ForeignKey, Numeric,
    Enum as SQLEnum, Boolean, func, Index
)
from sqlalchemy.orm import relationship
import enum

from app.core.database import Base


class EventStatus(str, enum.Enum):
    """Event status"""
    DRAFT = "draft"
    PUBLISHED = "published"
    CANCELLED = "cancelled"
    COMPLETED = "completed"


class CityEvent(Base):
    """CityEvent model - event instance in a specific city"""
    __tablename__ = "city_events"
    __table_args__ = (
        Index("idx_city_events_event_id", "event_id"),
        Index("idx_city_events_city_id", "city_id"),
        Index("idx_city_events_status", "status"),
        Index("idx_city_events_start_date", "start_date"),
        Index("idx_city_events_venue_id", "venue_id"),
    )

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer, ForeignKey("masterclass_events.id", ondelete="CASCADE"), nullable=False, index=True)
    city_id = Column(Integer, ForeignKey("cities.id", ondelete="RESTRICT"), nullable=False, index=True)
    venue_id = Column(Integer, ForeignKey("venues.id", ondelete="SET NULL"), nullable=True, index=True)
    
    start_date = Column(DateTime(timezone=True), nullable=False, index=True)
    end_date = Column(DateTime(timezone=True), nullable=True)
    
    status = Column(
        SQLEnum(EventStatus),
        default=EventStatus.DRAFT,
        nullable=False,
        index=True
    )
    
    max_capacity = Column(Integer, nullable=True)
    current_bookings = Column(Integer, default=0, nullable=False)
    
    price = Column(Numeric(10, 2), nullable=True)
    currency = Column(String(3), default="CAD", nullable=False)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    bookings = relationship("Booking", back_populates="city_event", lazy="select")
    # Note: These relationships may not exist if models are not defined
    # event = relationship("MasterclassEvent", back_populates="city_events", lazy="select")
    # city = relationship("City", back_populates="city_events", lazy="select")
    # venue = relationship("Venue", back_populates="city_events", lazy="select")

    def __repr__(self) -> str:
        return f"<CityEvent(id={self.id}, event_id={self.event_id}, city_id={self.city_id}, start_date={self.start_date})>"


# Placeholder models if they don't exist elsewhere
class MasterclassEvent(Base):
    """MasterclassEvent model - master class event template"""
    __tablename__ = "masterclass_events"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    description = Column(Text, nullable=True)
    
    def __repr__(self) -> str:
        return f"<MasterclassEvent(id={self.id}, name={self.name})>"


class City(Base):
    """City model"""
    __tablename__ = "cities"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    province = Column(String(100), nullable=True)
    country = Column(String(100), default="Canada", nullable=False)
    
    def __repr__(self) -> str:
        return f"<City(id={self.id}, name={self.name})>"


class Venue(Base):
    """Venue model"""
    __tablename__ = "venues"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    address = Column(Text, nullable=True)
    city_id = Column(Integer, ForeignKey("cities.id", ondelete="SET NULL"), nullable=True)
    
    def __repr__(self) -> str:
        return f"<Venue(id={self.id}, name={self.name})>"
