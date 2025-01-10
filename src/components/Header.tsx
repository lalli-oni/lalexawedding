import React, { useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const isSection = (visibleSection: string, sectionName: string) => visibleSection === sectionName ? 'activeSection' : undefined;

const Header: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState<string>('');
  const navMenuRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (visibleSection?.length) {
      const location = window.location.toString().split('#')[0];
      window.history.replaceState(null, '', `${location}#${visibleSection}`);
    }
  }, [visibleSection]);

  useEffect(() => {
    const header = document.getElementsByTagName('header')[0];
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);

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
    <header>
      <nav ref={navMenuRef}>
        <HashLink smooth to="/#welcome" className={isSection(visibleSection, 'welcome')}>Welcome</HashLink>
        <HashLink smooth to="/#event-details" className={isSection(visibleSection, 'event-details')}>Event Details</HashLink>
        <HashLink smooth to="/#accommodation" className={isSection(visibleSection, 'accommodation')}>Accommodation</HashLink>
        <HashLink smooth to="/#FAQ" className={isSection(visibleSection, 'FAQ')}>FAQ</HashLink>
        <HashLink smooth to="/#interesting" className={isSection(visibleSection, 'interesting')}>Interesting things to do</HashLink>
      </nav>
    </header>
  );
};

export default Header;