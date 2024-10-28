import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event, onClick }) => (
  <div className="event-card" onClick={() => onClick(event)}>
    <h2>{event.name}</h2>
    <p>{event.date}</p>
    <p>{event.location}</p>
  </div>
);

export default EventCard;

