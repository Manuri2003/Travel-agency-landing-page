import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import HeroPage from './components/heropage';

function App() {
  return (
    <div className="min-h-screen w-screen bg-slate-100">
      <BrowserRouter> <Navbar /></BrowserRouter>
      <HeroPage />
    
    </div>
  );
}

export default App;