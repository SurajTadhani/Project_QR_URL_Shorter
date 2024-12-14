import React from 'react';
import { Link2, QrCode } from 'lucide-react';

interface URLInputProps {
  url: string;
  error: string;
  onUrlChange: (url: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const URLInput: React.FC<URLInputProps> = ({ url, error, onUrlChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div className="relative group">
      <Link2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
      <input
        type="text"
        value={url}
        onChange={(e) => onUrlChange(e.target.value)}
        placeholder="Enter URL here..."
        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all hover:border-blue-300"
      />
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:opacity-90 transition duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      <QrCode className="h-5 w-5" />
      Generate QR Code
    </button>
  </form>
);

export default URLInput;