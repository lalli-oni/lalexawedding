// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserProvider from './contexts/UserProvider';

import Header from './components/Header';
import Welcome from './components/sections/Welcome';
import InterestingToDO from './components/sections/InterestingToDo';
import EventDetails from './components/sections/EventDetails';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';
import Accommodation from './components/sections/Accommodation';
import Cabin from './components/pages/Cabin';
import Guesthouse from './components/pages/Guesthouse';
import Cottage from './components/pages/Cottage';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={
            <>
              <Welcome />
              <EventDetails />
              <Accommodation />
              <FAQ />
              <InterestingToDO />
              <Header />
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