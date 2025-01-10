import React from 'react';

// import './SpeechBubble.css';

import Avatar from './Avatar';


export interface SpeechBubbleProps {
  speaker: 'lalli' | 'alexa';
  text: string;
}

const SpeechBubble = (props: SpeechBubbleProps) => {
  const speakerPosition = props.speaker === 'lalli' ? 'right' : 'left';

  return (
    <div
      style={{ display: 'flex', flexDirection: speakerPosition === 'right' ? 'row-reverse' : 'row', alignItems: 'center', gap: '2rem' }}
    >
      <Avatar avatar={props.speaker} />
      <div style={{ position: 'relative', width: '0', left: speakerPosition === 'right' ? '-150px' : '-110px' }}>
        <svg
          width="200"
          height="100"
          viewBox="0 0 100 200"
          xmlns="http://www.w3.org/2000/svg">
            {speakerPosition === 'right' ?
              <polygon points="0,0 200,100 0,50 0,0" fill="white" stroke="none" /> :
              <polygon points="200,0 0,100 200,50 200,0" fill="white" stroke="none" />
            }
            
        </svg>
      </div>
      <p
        style={{ padding: '2rem', margin: '0', backgroundColor: 'white', borderRadius: '5rem', alignSelf: 'flex-start' }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default SpeechBubble;