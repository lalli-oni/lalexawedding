import React from 'react';

const Guesthouse: React.FC = () => {
  return (
    <section id="guesthouse">
      <h1 style={{margin:"0", paddingTop: "30px", textAlign:"center"}}>Guesthouse</h1>
      <div style={{marginTop:"30px"}}>
        <div className="cabin-container">
        <img className="cabin-img" src="/img/guesthouse.png" alt="Cabin 1"/>
        </div>
      </div>
      <div style={{padding:"50px 0"}}>
      <div id="gridEvent" >
        <div className="gridEvent-1" style={{textAlign: "center", fontSize:"20px", margin:"0 20px"}}>
            <h2>1 Room in a Guesthouse</h2>
            This guesthouse has 4 rooms with double beds, living room, a shared bathroom and a shared kitche kitchen.
            <br/>
            The cost is €92 per night
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
            <img src="/img/guesthouseRoom.png" alt="Guesthouse" className="event-img" />
            <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%', gap: '10px' }}>
                <img src="/img/guesthouseLR.jpeg" alt="Guesthouse 2" className="event-img-small" />
                <img src="/img/guesthouseKitchen.jpeg" alt="Guesthouse 3" className="event-img-small" />
            </div>
        </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <h2>Guesthouse Tour</h2>
            <video width="420" height="340" controls muted>
            <source src="/img/guesthouse.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
        </div>
    </section>
    );
}

export default Guesthouse;