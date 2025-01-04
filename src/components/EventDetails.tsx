// components/EventDetails.tsx
import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <section id="event-details">
      <div id="gridEvent" >
        <div className="gridEvent-1" style={{textAlign: "center"}}>
          <h2>Event Details</h2>
          <p>Date: 26th of July 2025</p>
          <p>Time: 3:00pm</p>
          <p>Location: <a href="https://maps.app.goo.gl/NkC1pZp8j279ku7a8" target="_blank" rel="noopener noreferrer">Miðgarður, 301 - Akranes, Iceland</a></p>
        </div>
        <div
          className="gridEvent-1"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%', // Ensures it respects the grid height
            alignItems: 'center',
          }}
        >
          <img src="/img/location.png" alt="Event Location 1" className="event-img" />
          <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%', gap: '10px' }}>
            <img src="/img/location2.jpeg" alt="Event Location 4" className="event-img-small" />
            <img src="/img/location3.jpeg" alt="Event Location 5" className="event-img-small" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;