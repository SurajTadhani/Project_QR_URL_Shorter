import React from 'react';
import { Download } from 'lucide-react';

interface QRCodeDisplayProps {
  dataUrl: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ dataUrl }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl">
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
      <img
        src={dataUrl}
        alt="Generated QR Code"
        className="mx-auto w-64 h-64 object-contain"
      />
    </div>
    <a
      href={dataUrl}
      download="qrcode.png"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      <Download className="h-5 w-5" />
      Download QR Code
    </a>
  </div>
);

export default QRCodeDisplay;