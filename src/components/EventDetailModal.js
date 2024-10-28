import React from 'react';
import '../styles/Modal.css';

const EventDetailsModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{event.name}</h2>
        <img src={event.image} alt={event.name} />
        <p>{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>
    </div>
  );
};

export default EventDetailsModal;

