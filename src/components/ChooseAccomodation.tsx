import React, { useContext } from 'react';

import { UserDispatchContext } from '../contexts/userContext';
import AccomodationOption from './AccomodationOption';

const Accommodation: React.FC = () => {
  const userDispatch = useContext(UserDispatchContext);

  return (
    <div>
      {userDispatch ?
        <div>
          <h3 style={{ textAlign: "center" }}>Please choose where you'd like to stay.</h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            <AccomodationOption
              id="home" label="In my own bed."
              iconSvgPath="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C17.2111 20.7499 17.0492 20.8087 16.868 20.8537M5 9.7774V16.2C5 17.8801 5 18.7202 5.32698 19.3619C5.6146 19.9264 6.07354 20.3854 6.63803 20.673C6.78894 20.7499 6.95082 20.8087 7.13202 20.8537M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M7.13202 20.8537C7.65017 18.6447 9.63301 17 12 17C14.367 17 16.3498 18.6447 16.868 20.8537M7.13202 20.8537C7.72133 21 8.51495 21 9.8 21H14.2C15.485 21 16.2787 21 16.868 20.8537M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z"
              onSelect={(selectedId) => {
                if (userDispatch) userDispatch({ type: 'SelectLodging', payload: null });
              }}
            />
            <AccomodationOption
              id="camping" label="Camping."
              iconSvgPath="M15 3L3 19V21H21V19L9 3M12 15L16 21H8L12 15Z"
              onSelect={(selectedId) => {
                if (userDispatch) userDispatch({ type: 'SelectLodging', payload: 'camping' });
              }}
            />
            <AccomodationOption
              id="moar-cabin" label="Móar - Cabin."
              iconSvgPath="M33.4999 20.757V13.672H34.4999V22.757V22.964L34.6459 23.111L36.9999 25.464L36.2929 26.172L35.3529 25.232L34.4999 24.377V25.585V26.172C34.4999 26.812 34.2599 27.395 33.8639 27.838L33.5649 28.171L33.8629 28.505C34.2279 28.912 34.4599 29.438 34.4949 30.017L34.4999 30.179V31.172C34.4999 31.812 34.2599 32.395 33.8639 32.838L33.5649 33.171L33.8629 33.505C34.2279 33.912 34.4599 34.438 34.4949 35.017L34.4999 35.179V36.172C34.4999 37.501 33.4629 38.588 32.1539 38.667L31.9929 38.672H11.9999C10.6709 38.672 9.58388 37.635 9.50488 36.326L9.49988 36.164V35.172C9.49988 34.531 9.73988 33.948 10.1359 33.505L10.4349 33.172L10.1359 32.838C9.77188 32.431 9.53988 31.905 9.50488 31.326L9.49988 31.164V30.172C9.49988 29.531 9.73988 28.948 10.1359 28.505L10.4349 28.172L10.1359 27.838C9.78188 27.442 9.55188 26.933 9.50788 26.371L9.49988 26.162V25.585V24.378L8.64588 25.232L7.70688 26.172L6.99988 25.465L20.2319 12.232C21.1669 11.297 22.6599 11.258 23.6409 12.114L23.7729 12.238L32.6459 21.111L33.4999 21.964V20.757ZM17.4999 34.171V33.671H16.9999L11.9999 33.672C11.2299 33.672 10.5969 34.251 10.5099 34.997L10.5079 35.012L10.5069 35.026L10.5009 35.143L10.4999 35.157V35.172V36.172C10.4999 36.941 11.0789 37.575 11.8259 37.662L11.8399 37.663L11.8539 37.664L11.9709 37.671L11.9849 37.672H11.9999H16.9999H17.4999V37.172V34.171ZM25.4999 28.172V27.672H24.9999H18.9999H18.4999V28.172V37.172V37.672H18.9999H24.9999H25.4999V37.172V28.172ZM32.0289 33.672H32.0139H31.9999L26.9999 33.671H26.4999V34.171V37.172V37.672H26.9999H31.9999C32.7689 37.672 33.4029 37.092 33.4899 36.346L33.4909 36.332L33.4919 36.317L33.4989 36.2L33.4999 36.186V36.172V35.172C33.4999 34.402 32.9209 33.768 32.1739 33.682L32.1599 33.68L32.1449 33.679L32.0289 33.672ZM32.0289 28.672H32.0139H31.9999L26.9999 28.671H26.4999V29.171V32.171V32.671H26.9999L31.9999 32.672C32.7689 32.672 33.4029 32.092 33.4899 31.346L33.4909 31.332L33.4919 31.317L33.4989 31.2L33.4999 31.186V31.172V30.172C33.4999 29.402 32.9209 28.768 32.1739 28.682L32.1599 28.68L32.1449 28.679L32.0289 28.672ZM17.4999 29.171V28.671H16.9999L11.9999 28.672C11.2299 28.672 10.5969 29.251 10.5099 29.997L10.5079 30.012L10.5069 30.026L10.5009 30.143L10.4999 30.157V30.172V31.172C10.4999 31.941 11.0789 32.575 11.8259 32.662L11.8399 32.663L11.8539 32.664L11.9709 32.671L11.9849 32.672H11.9999L16.9999 32.671H17.4999V32.171V29.171ZM10.5099 24.997L10.5079 25.012L10.5069 25.026L10.5009 25.143L10.4999 25.157V25.172V26.172C10.4999 26.941 11.0789 27.575 11.8259 27.662L11.8399 27.663L11.8539 27.664L11.9709 27.671L11.9849 27.672H11.9999L17.2679 27.671H17.5559L17.6999 27.421C17.9419 27.005 18.3759 26.716 18.8789 26.676L19.0089 26.672H24.9999C25.5539 26.672 26.0389 26.972 26.2989 27.422L26.4439 27.671H26.7319L31.9999 27.672C32.7689 27.672 33.4029 27.092 33.4899 26.346L33.4909 26.332L33.4919 26.317L33.4989 26.2L33.4999 26.186V26.172V25.172C33.4999 24.343 32.8279 23.672 31.9999 23.672H11.9999C11.2299 23.672 10.5969 24.251 10.5099 24.997ZM28.9389 18.817L28.7929 18.671H28.5859H15.4139H15.2069L15.0599 18.817L12.0599 21.817L11.2069 22.671H12.4139H31.5859H32.7929L31.9389 21.817L28.9389 18.817ZM21.0799 12.815L21.0679 12.825L21.0559 12.835L20.9619 12.918L20.9499 12.928L20.9389 12.939L17.0599 16.817L16.2059 17.671H17.4139H26.5859H27.7929L26.9389 16.817L23.0599 12.939C22.5189 12.398 21.6689 12.357 21.0799 12.815Z"
              onSelect={(selectedId) => {
                if (userDispatch) userDispatch({ type: 'SelectLodging', payload: 'moar-cabins' });
              }}
              scale="0.6"
            />
            <AccomodationOption
              id="moar-guesthouse" label="Móar - Guesthouse."
              iconSvgPath="M3 21H5M5 21H10M5 21V3M10 21H14M10 21V16L8 16C10 13.3333 14 13.3333 16 16L14 16V21M14 21H19M19 21H21M19 21V3M3 3H5M5 3H19M19 3H21M9 6.5H10M14 6.5H15M9 10.5H10M14 10.5H15"
              onSelect={(selectedId) => {
                if (userDispatch) userDispatch({ type: 'SelectLodging', payload: 'moar-room' });
              }}
            />
            <AccomodationOption
              id="other" label="Other."
              iconSvgPath="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z"
              onSelect={(selectedId) => {
                if (userDispatch) userDispatch({ type: 'SelectLodging', payload: 'other' });
              }}
            />
          </div>
        </div>
      : null}
    </div>
  );
};

export default Accommodation;