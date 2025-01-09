import React from 'react';

import SpeechBubble from '../SpeechBubble';

import "./FAQ.css"

const FAQ: React.FC = () => {
  return (
    <section id="FAQ">
      <h2>FAQ</h2>
      <div style={{ width: '100%' }}>
        <div>
          <p className="question">What is the agenda?</p>
          <SpeechBubble speaker='alexa'
            text="We are working on it and will let you know! But for now we know that there will be a viking ceremony, snacks, drinks, dancing and very informal dinner with hot dogs"
          />
        </div>
        <div>
          <p className="question">What is the dress code?</p>
          <SpeechBubble speaker='lalli'
            text="There is no dress code, except having to wear some clothes. This isn't a Betazoid wedding. You are welcome to get into the festival vibe."
          />
        </div>
        <div>
          <p className="question">Can I bring my kids?</p>
          <SpeechBubble speaker='lalli'
            text="Your kids are welcome (no bringing random kids please!). But they also have to be cool!. We don't want to lame naughty kids."
          />
        </div>
        <div>
          <p className="question">What about gifts?</p>
          <SpeechBubble speaker='lalli'
            text="No gifts. We only ask you to make and record memories with us, and share it with us later!"
          />
        </div>
        <div>
          <p className="question">Who chose these ugly website colors?</p>
          <SpeechBubble speaker='alexa'
            text="We are developers, not designers ok?"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;