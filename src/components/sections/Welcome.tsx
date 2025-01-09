// components/Welcome.tsx
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <section id="welcome">
      <div id="wave-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Welcome to Alechandrina and Lárus Wedding</h1>
        <div><p>We're so excited to celebrate our love with all of you! 
          We want to make it a festival where we will share laughters, music, games
          and unforgettable memories with you. </p></div>
      </div>
    </section>
  );
};

export default Welcome;