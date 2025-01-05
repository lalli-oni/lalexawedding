// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import UserProvider from './contexts/UserProvider';

import Header from './components/Header';
import Welcome from './components/Welcome';
import InterestingToDO from './components/InterestingToDo';
import EventDetails from './components/EventDetails';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Accommodation from './components/Accommodation';
import Cabin from './components/Cabin';
import Guesthouse from './components/Guesthouse';
import Cottage from './components/Cottage';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <UserProvider>
        {location.pathname === '/' && <Header />}
        <Routes>
          <Route path="/" element={
            <>
              <Welcome />
              <EventDetails />
              <Accommodation />
              <FAQ />
              <InterestingToDO />
            </>
          } />
          <Route path="/cabin" element={<Cabin />} />
          <Route path="/guesthouseRoom" element={<Guesthouse />} />
          <Route path="/cottage" element={<Cottage />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
};

export default App;