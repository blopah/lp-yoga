import React from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Promo from './components/Promo';
import SignupForm from './components/SignupForm';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Benefits />
      <Promo />
      <Testimonials />
      <SignupForm />
    </div>
  );
}

export default App;
