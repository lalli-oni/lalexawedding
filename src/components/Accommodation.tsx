import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserStateContext } from '../contexts/userContext';

import ChooseAccommodation from './ChooseAccommodation';

const Accommodation: React.FC = () => {
  const userState = useContext(UserStateContext);

  return (
    <section id="accommodation">
      <h2>Accommodation</h2>
      <p>We would love for you to hang out with us as much as possible! To that end we try to make it as easy as possible for you to stay with us (not in the same bed though, sorry!). If you wish to stay the night in your own bed, we begrudgingly understand.</p>
      <p>There are a few options, the camping site outside Miðgarður, the venue. Across the road (15min. walking) we also have a a few cabins and guesthouse rooms.</p>
      <p>Please understand that cabins and guesthouse rooms are in scarce supply. So we will have to prioritize based on people travelling from abroad and/or with children.</p>
      <ChooseAccommodation />
      {userState !== null && userState.preferredLodging !== undefined ?
        <div style={{ paddingTop: "1rem" }}>
          {userState.preferredLodging === null ? <img src="/sad-drenched.gif" alt="lalli sad you wont be hanging out with us" /> : null}
          {userState.preferredLodging === 'camping' ?
            <div>
              <p>
                Great! We will have camping areas right outside the venue and at Móar. We will try to ensure you access to toilets, internet and electricity.
              </p>
              <p>
                WIP: here we will have suggestions to tents, live-in vans, caravans or other options for you to get the most out of your camping experience!
              </p>
            </div>
          : null}
          {userState.preferredLodging === 'moar-cabins' ?
            <div>
              <p>Móar has some nice simple cabins available for rent on a discount. WIP: add price. Please be aware, they are in limited supply so we have to prioritize.</p>
              <p>For more information you can look <Link to="/cabin">here</Link> or visit Móar official site <a href="https://www.traveltomoar.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
          : null}
          {userState.preferredLodging === 'moar-room' ?
            <div>
              <p>Móar also has 4 rooms in their guesthouse. Since they are so few available we will have to prioritize.</p>
              <p>For more information you can look <Link to="/guesthouse">here</Link> or visit Móar official site <a href="https://www.traveltomoar.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
          : null}
          {userState.preferredLodging === 'other' ?
            <div>
              <p>If you'd like to stay at a hotel, airbnb or anything else relatively close to the venue we wanted to make it easier by compiling a few options for you here.</p>
            </div>
          : null}
        </div>
      : null}
    </section>
  );
};

export default Accommodation;