import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

// Lazy load pages
const About = lazy(() => import('./pages/About'));
const QRCodeGenerator = lazy(() => import('./components/QRCodeGenerator'));
const URLShortener = lazy(() => import('./pages/URLShortener'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">
          <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading...</div>}>
            <Routes>
              <Route path="/" element={<QRCodeGenerator />} />
              <Route path="/shorten" element={<URLShortener />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
