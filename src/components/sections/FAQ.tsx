import React from 'react';

import SpeechBubble from '../SpeechBubble';

const FAQ: React.FC = () => {
  return (
    <section id="FAQ">
      <h2>FAQ</h2>
      <div id="sectionFAQ">
        <h3>What is the agenda?</h3>
        <SpeechBubble speaker='alexa'
          text="We are working on it and will let you know! But for now we know that there will be a viking ceremony, snacks, drinks, dancing and very informal dinner with hot dogs"
        />
        <h3>What is the dress code?</h3>
        <SpeechBubble speaker='lalli'
          text="There is no dress code, except having to wear some clothes. This isn't a Betazoid wedding. You are welcome to get into the festival vibe."
        />
        <h3>Can I bring my kids?</h3>
        <SpeechBubble speaker='lalli'
          text="Your kids are welcome (no bringing random kids please!). But they also have to be cool!. We don't want to lame naughty kids."
        />
        <h3>What about gifts?</h3>
        <SpeechBubble speaker='lalli'
          text="No gifts. We only ask you to make and record memories with us, and share it with us later!"
        />
        <h3>Who chose these ugly website colors?</h3>
        <SpeechBubble speaker='alexa'
          text="We are developers, not designers ok?"
        />
      </div>
    </section>
  );
};

export default FAQ;