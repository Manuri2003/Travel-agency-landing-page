import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen w-screen bg-slate-100">
      <BrowserRouter> <Navbar /></BrowserRouter>
    </div>
  );
}

export default App;