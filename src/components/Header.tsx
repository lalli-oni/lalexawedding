// components/Header.tsx
import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link to="welcome" smooth={true} duration={500}>Welcome</Link>
        <Link to="event-details" smooth={true} duration={500}>Event Details</Link>
        <Link to="FAQ" smooth={true} duration={500}>FAQ</Link>
        <Link to="interesting" smooth={true} duration={500}>Interesting things to do</Link>
      </nav>
    </header>
  );
};

export default Header;