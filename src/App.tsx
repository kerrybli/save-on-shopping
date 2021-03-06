import React from 'react';
import './App.css';
import { Connect } from './components/Connect/Connect';
import { Footer } from './components/Footer/Footer';
import { JoinNow } from './components/JoinNow/JoinNow';
import { Navbar } from './components/Navbar/Navbar';
import { Reviews } from './components/Reviews/Reviews';
import { SocialMedia } from './components/SocialMedia/SocialMedia';

function App() {
  return (
    < >
      <Navbar />
      <JoinNow />
      <Connect />
      <SocialMedia />
      <Reviews />
      <Footer />

    </>
  );
}

export default App;
