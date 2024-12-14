import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import QRCodeGenerator from './components/QRCodeGenerator';
import URLShortener from './pages/URLShortener';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<QRCodeGenerator />} />
            <Route path="/shorten" element={<URLShortener />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;