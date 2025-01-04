// components/EventDetails.tsx
import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <section id="event-details">
      
      <h2>Event Details</h2>
      <p>Date: 26th of July 2025</p>
      <p>Time: 3:00pm</p>
      <p>Location: <a href="https://maps.app.goo.gl/NkC1pZp8j279ku7a8">Miðgarður, 301 - Akranes, Iceland</a></p>
    </section>
  );
};

export default EventDetails;