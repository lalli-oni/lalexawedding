import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserStateContext } from '../../contexts/userContext';

import ChooseAccommodation from '../ChooseAccommodation';

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
                Great! We will have camping areas right outside the venue and at Móar. We will try to ensure you access to toilets, internet and electricity.<br />
                Additionally there is a camping site closeby in Akranes: <a href="https://maps.app.goo.gl/v9wpgsw2cWTcCPkN9">Akranes campsite</a>
              </p>
              <p>
                We can recommend <a href="https://www.kukucampers.is/">KUKU Campers</a>. There are also a few other camping sites in the area, like <a href="https://www.campingcard.is/campsite/reykjavik-camping-grindavik/">Reykjavík Camping Grindavík</a> and <a href="https://www.campingcard.is/campsite/reykjavik-camping-vid-voginn">Reykjavík Camping Við Voginn</a>.
              </p>
            </div>
          : null}
          {userState.preferredLodging === 'moar-cabins' ?
            <div>
              <p>Móar has some nice simple cabins available for rent on a discount. WIP: add price. Please be aware, they are in limited supply so we have to prioritize.</p>
              <p>There are 2 types available, the smaller cabin you can read more about <Link to="/cabin" target="_blank">here</Link>. And the larger cottage you can read about <Link to="/cottage" target="_blank">here</Link></p>
              <p>Or you can visit the Móar official website <a href="https://www.traveltomoar.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
          : null}
          {userState.preferredLodging === 'moar-room' ?
            <div>
              <p>Móar also has 4 rooms in their guesthouse. Since they are so few available we will have to prioritize.</p>
              <p>For more information you can look <Link to="/guesthouse" target="_blank" >here</Link> or visit Móar official site <a href="https://www.traveltomoar.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
          : null}
          {userState.preferredLodging === 'other' ?
            <div>
              <p>If you'd like to stay at a hotel, airbnb or anything else relatively close to the venue we wanted to make it easier by compiling a few options for you here.</p>
              <p>
                Guesthouses in town
                <ul>
                  <li><a href="http://www.teigur-akranes.com/en">Teigur</a></li>
                  <li><a href="https://www.facebook.com/melurguesthouse/">Melur</a></li>
                  <li><a href="https://www.zenhotels.com/hotel/iceland/akranes/mid7715534/the_little_guesthouse_by_the_ocean">The Little Guesthouse by the Ocean</a></li>
                </ul>
              </p>
              <p>Borgarnes is another beautiful town, only 30 minutes drive away from the venue. You can find more options there.</p>
            </div>
          : null}
        </div>
      : null}
    </section>
  );
};

export default Accommodation;