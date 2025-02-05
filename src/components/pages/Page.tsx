import React, { ReactNode } from 'react';

import './pages.css';

interface PageProps {
  rotateHue?: string; // Valid `hue-rotate` deg uom. example: '120'
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ rotateHue, children }) => {
  return (
    <main className="page">
      <a href="/" className="back-button">&lt; <span>Back</span></a>
      <div style={{ backdropFilter: rotateHue ? `hue-rotate(${rotateHue}deg)` : undefined }}>
        {children}
      </div>
    </main>
  );
};

export default Page;