import React from 'react';

import SpeechBubble from '../SpeechBubble';

import "./FAQ.css"

const FAQ: React.FC = () => {
  return (
    <section id="FAQ">
      <h2>FAQ</h2>
      <div style={{ width: '100%' }}>
        <div>
          <p className="question">How will we get here/there/everywhere?</p>
          <SpeechBubble speaker='lalli' fullWidth={true}
            text="If you are staying at the camping grounds, or at Móar getting to and from the venue just means walking. If you are staying elsewhere we can look into rides, or figure out a taxi. There is no public transport from the city to Móar/venue, if you are here for a few days a rental might be a good idea, reach out to us and we might be able to help strike a deal about discounts."
          />
        </div>
        <div>
          <p className="question">How will the weather be like?</p>
          <SpeechBubble speaker='lalli' fullWidth={true}
            text="Iceland weather is very unpredictable, every year getting more so! Average heat is 11°C but gets quite a bit colder during the night. It can also be very windy, especially in that area. Hope for the best, prepare for the worst."
          />
        </div>
        <div>
          <p className="question">What is the agenda?</p>
          <SpeechBubble speaker='alexa' fullWidth={true}
            text="We are working on it and will let you know! But for now we know that there will be a viking ceremony, snacks, drinks, dancing and very informal dinner with hot dogs"
          />
        </div>
        <div>
          <p className="question">What is the dress code?</p>
          <SpeechBubble speaker='lalli' fullWidth={true}
            text="There is no dress code, except having to wear some clothes. This isn't a Betazoid wedding. You are welcome to get into the festival vibe."
          />
        </div>
        <div>
          <p className="question">Can I bring my kids?</p>
          <SpeechBubble speaker='lalli' fullWidth={true}
            text="Your kids are welcome (no bringing random kids please!). But they also have to be cool!. We don't want no lame, boring or naughty kids."
          />
        </div>
        <div>
          <p className="question">What about gifts?</p>
          <SpeechBubble speaker='lalli' fullWidth={true}
            text="No gifts. We only ask you to make and record memories with us, and share it with us later!"
          />
        </div>
        <div>
          <p className="question">Who chose these ugly website colors?</p>
          <SpeechBubble speaker='alexa'
            text="We are developers, not designers ok?"
          />
          <SpeechBubble speaker='lalli'
            text="It was all Alexa! I tried to stop her!"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;