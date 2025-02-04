import React, { ReactNode } from 'react';

import './pages.css';

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <main className="page">
        <a href="/" className="back-button">&lt; <span>Back</span></a>
        {children}
      </main>
    </>
  );
};

export default Page;