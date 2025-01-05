// components/Cabin.tsx
import React from 'react';
import BookingLink from './BookingLink';

const Cabin: React.FC = () => {
  return (
    <div id="sectionCabin">
      <h1 style={{margin:"0", paddingTop: "30px", textAlign:"center"}}>Cabins in the Cottage</h1>
      <div style={{marginTop:"30px"}}>
        <div className="cabin-container" style={{width:"50%"}}>
        <img className="cabin-img" src="/img/cabin.jpeg" alt="Cabin 1"/>
        <img className="cabin-img" src="/img/cabin0.png" alt="Cabin 1"/>
        </div>
      </div>
      <div style={{padding:"50px 0"}}>
        <div id="gridEvent" >
            <div className="gridEvent-1" style={{textAlign: "center", fontSize:"20px", margin:"0 20px"}}>
            <h2>3 Person Cabin</h2>
            This cabin is for three people, or two adults and two kids in the top bed.
            <br/>
            The cost is €240 per night
            <br/>
            You can book friday and saturday night
            <br/>
            Let us know if you want to book it!
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
            <img src="/img/cabin2.png" alt="Event Location 1" className="event-img" />
            <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%', gap: '10px' }}>
                <img src="/img/cabin3.png" alt="Event Location 4" className="event-img-small" />
                <img src="/img/cabin4.png" alt="Event Location 5" className="event-img-small" />
            </div>
            </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <BookingLink />
        </div>
      </div>
    </div>
  );
};

export default Cabin;