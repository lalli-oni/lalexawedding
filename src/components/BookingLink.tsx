import React from 'react';

const BookingLink: React.FC = () => {
  const emailAddress: string = "garnetjuliet@gmail.com, lalli.oni@gmail.com";
  const subject: string = "Lalexa wedding - Booking Request";
  const body: string = `
    Hi, I would like to book a stay. Here are my details:
    
    - Name: 
    - Email: 
    - How many nights they want to book and which night(s): 
    - Other info: 
  `;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Would you like to stay here</h2>
      <p>If you would like to stay here, please send us an e-mail and we will reach out to you!</p>
      <ul style={{ textAlign: 'center' }}>
        1. Your name<br/>
        2. Your email<br/>
        3. How many nights you want to book and the dates<br/>
        4. Any additional info
      </ul>
      <a
        href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        Send Booking Email
      </a>
    </div>
  );
};

export default BookingLink;
