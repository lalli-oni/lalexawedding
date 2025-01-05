import React, { useContext } from 'react';

import { UserStateContext } from '../contexts/userContext';

import ChooseAccomodation from './ChooseAccomodation';

const Accommodation: React.FC = () => {
  const userState = useContext(UserStateContext);

  return (
    <section id="accomodation">
      <h2>Accomodation</h2>
      <p>We would love for you to hang out with us as much as possible! To that end we try to make it as easy as possible for you to stay with us (not in the same bed though, sorry!). If you wish to stay the night in your own bed, we begrudgingly understand.</p>
      <p>There are a few options, the camping site outside Miðgarður, the venue. Across the road (15min. walking) we also have a a few cabins and guesthouse rooms.</p>
      <p>Please understand that cabins and guesthouse rooms are in scarce supply. So we will have to prioritize based on people travelling from abroad and/or with children.</p>
      <ChooseAccomodation />
      {userState !== null && userState.preferredLodging !== undefined ?
        <div style={{ paddingTop: "1rem" }}>
          {userState.preferredLodging === null ? <img src="/sad-drenched.gif" alt="lalli sad you wont be hanging out with us" /> : null}
          {userState.preferredLodging === 'camping' ? <div>camping content</div> : null}
          {userState.preferredLodging === 'moar-cabins' ? <div>moar cabins content</div> : null}
          {userState.preferredLodging === 'moar-room' ? <div>moar room/guesthouse content</div> : null}
          {userState.preferredLodging === 'other' ? <div>other lodging content</div> : null}
        </div>
      : null}
    </section>
  );
};

export default Accommodation;