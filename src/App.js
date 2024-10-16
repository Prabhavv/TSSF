import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Communication from './pages/Communication';
import Application from './pages/Application';
import Milestone from './pages/Milestone';
import Footer from './Footer';
import './styles.css';

import Navbar from './Navbar';




function App() {
  
  useEffect(() => {
    const fadeContainer = document.querySelector('.fade-container');
    fadeContainer.classList.add('fade-in');

    return () => {
      fadeContainer.classList.remove('fade-in');
    };
  });

  return (
    <Router>
    <div className="app-container">

      <Navbar />
      <main className="main-content">
        <div className="fade-container">
          <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="/channels-of-communication" element={<Communication />} />
          <Route path ='/milestones' element={<Milestone />} />
          <Route path="/application" element={<Application />} />
          </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
