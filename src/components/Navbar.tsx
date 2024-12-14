import { Link, useLocation } from 'react-router-dom';
import { QrCode, Info, Menu, X, Link2 } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-violet-900 via-purple-800 to-fuchsia-900 p-4 shadow-lg relative z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold flex items-center gap-2">
            <QrCode className="w-8 h-8 animate-pulse" />
            <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-transparent bg-clip-text font-extrabold tracking-wider">
              QR Studio
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-200 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-white text-purple-900 font-semibold transform scale-105 shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>Create QR</span>
            </Link>
            <Link 
              to="/shorten" 
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
                isActive('/shorten') 
                  ? 'bg-white text-purple-900 font-semibold transform scale-105 shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Link2 className="w-4 h-4" />
              <span>URL Shortener</span>
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-white text-purple-900 font-semibold transform scale-105 shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute left-0 right-0 bg-purple-900/95 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'top-full opacity-100' : '-top-[200%] opacity-0'
        }`}>
          <div className="p-4 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-white text-purple-900 font-semibold' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <QrCode className="w-5 h-5" />
              <span>Create QR</span>
            </Link>
            <Link 
              to="/shorten" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/shorten') 
                  ? 'bg-white text-purple-900 font-semibold' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Link2 className="w-5 h-5" />
              <span>URL Shortener</span>
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-white text-purple-900 font-semibold' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Info className="w-5 h-5" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
