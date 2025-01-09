// components/Header.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  useEffect(() => {
    const header = document.getElementById('navMenu');
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'welcome') {
              header!.style.backgroundColor = 'transparent';
            } else {
              header!.style.backgroundColor = '#479249';
            }
          }
        });
      },
      { threshold: 0.2 } // Adjust this value as needed
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header id="navMenu">
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