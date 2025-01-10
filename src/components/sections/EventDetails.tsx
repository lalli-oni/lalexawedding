import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <section id="event-details">
      <h2>Event Details</h2>
      <div id="gridEvent" style={{ flexDirection: 'row' }}>
        <div style={{ textAlign: "center", display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Date</div>
            <div style={{ fontSize: '1.2rem' }}>26th of July 2025</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Time</div>
            <div style={{ fontSize: '1.2rem' }}>15:00 (subject to change)</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Location</div>
            <div style={{ fontSize: '1.2rem' }}>
              <span>
                Miðgarður, just outside of Akranes, Iceland<br />
                (<a href="https://maps.app.goo.gl/NkC1pZp8j279ku7a8" target="_blank" rel="noopener noreferrer">google maps</a>)
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%', // Ensures it respects the grid height
            alignItems: 'center',
            width: '50%'
          }}
        >
          {/* TODO: click to open larger images */}
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