import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Jeweleries from './pages/Jeweleries';
import Electronics from './pages/Electronics';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jeweleries">Jeweleries</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jeweleries" element={<Jeweleries/>} />
        <Route path="/electronics" element={<Electronics/>} />
      </Routes>
    </div>
  );
}

export default App;
