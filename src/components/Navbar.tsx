import { Link, useLocation } from 'react-router-dom';
import { QrCode, Info, Menu, X, Link2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string): boolean => location.pathname === path;

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-gradient-to-r from-violet-900 via-purple-800 to-fuchsia-900 p-4 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center gap-2">
          <QrCode className="w-8 h-8 animate-pulse" />
          <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-transparent bg-clip-text font-extrabold tracking-wider">
            SnapURL
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-purple-200 transition-colors z-50"
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

      {/* Mobile Navigation (Slide from Left) */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-purple-900/95 backdrop-blur-sm transform transition-transform duration-300 z-40 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 mt-4 space-y-4 relative">
          {/* Close button inside menu */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

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
    </nav>
  );
};

export default Navbar;
