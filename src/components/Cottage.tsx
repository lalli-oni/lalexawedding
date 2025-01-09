import React from 'react';

import BookingLink from './BookingLink';

const Cottage: React.FC = () => {
  return (
    <section id="cottage">
      <h1 style={{margin:"0", paddingTop: "30px", textAlign:"center"}}>Cottage</h1>
      <div style={{marginTop:"30px"}}>
        <div className="cabin-container">
        <img className="cabin-img" src="/img/Cottage.png" alt="Cabin 1"/>
        </div>
      </div>
      <div style={{padding:"50px 0"}}>
      <div id="gridEvent" >
        <div className="gridEvent-1" style={{textAlign: "center", fontSize:"20px", margin:"0 20px"}}>
            <h2>Cottage house</h2>
            This cottage has 2 bunk beds, a sleeping couch, a kitchen and a bathroom.
            <br/>
            The cost is €240 per night
            <br/>
            You can book friday and saturday night
            <br/>
            Let us know if you want to book a room!
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
            <img src="/img/Cottage1.jpeg" alt="Cottage" className="event-img" />
            <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%', gap: '10px' }}>
                <img src="/img/Cottage2.jpeg" alt="Cottage 2" className="event-img-small" />
            </div>
        </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <BookingLink />
        </div>
      </div>
    </section>
    );
}

export default Cottage;