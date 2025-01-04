// App.tsx
import React from 'react';

import UserProvider from './contexts/UserProvider';

import Header from './components/Header';
import Welcome from './components/Welcome';
import InterestingToDO from './components/InterestingToDo';
import EventDetails from './components/EventDetails';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Accommodation from './components/Accommodation';

import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Welcome />
        <EventDetails />
        <Accommodation />
        <FAQ />
        <InterestingToDO />
        <Footer />
      </UserProvider>
    </div>
  );
};

export default App;