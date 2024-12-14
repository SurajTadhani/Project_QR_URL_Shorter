import React from 'react';
import { QrCode } from 'lucide-react';

const Header: React.FC = () => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center mb-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg">
        <QrCode className="h-12 w-12 text-white" />
      </div>
    </div>
    <h1 className="text-5xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      QR Code Generator
    </h1>
    <p className="text-gray-600 text-lg">Transform any URL into a QR code instantly</p>
  </div>
);

export default Header;