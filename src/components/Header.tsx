// components/Header.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

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
        <HashLink smooth to="/#welcome">Welcome</HashLink>
        <HashLink smooth to="/#event-details">Event Details</HashLink>
        <HashLink smooth to="/#Accommodation">Accommodation</HashLink>
        <HashLink smooth to="/#FAQ">FAQ</HashLink>
        <HashLink smooth to="/#interesting">Interesting things to do</HashLink>
      </nav>
    </header>
  );
};

export default Header;