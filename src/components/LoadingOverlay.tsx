import React from 'react';

import './LoadingOverlay.css';

const LoadingOverlay: React.FC = () => {
  return (
    <div
      id="loading-overlay" role="alert" aria-live="assertive"
    >
      Loading...
    </div>
  );
};

export default LoadingOverlay;