// App.tsx
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import InterestingToDO from './components/InterestingToDo';
import EventDetails from './components/EventDetails';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <EventDetails />
      <FAQ />
      <InterestingToDO />
      <Footer />
    </div>
  );
};

export default App;