import React from 'react';
import { History, Link } from 'lucide-react';

interface HistoryListProps {
  history: string[];
  onHistoryClick: (url: string) => void;
}

const HistoryList: React.FC<HistoryListProps> = ({ history, onHistoryClick }) => (
  <div className="border-t border-gray-200 pt-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
      <History className="h-5 w-5 text-gray-600" />
      Recent URLs
    </h2>
    <div className="space-y-2">
      {history.map((historyItem, index) => (
        <button
          key={index}
          onClick={() => onHistoryClick(historyItem)}
          className="w-full text-left p-4 bg-white rounded-xl hover:bg-gray-50 transition duration-200 flex items-center gap-3 group shadow-sm hover:shadow-md"
        >
          <Link className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
          <span className="truncate">{historyItem}</span>
        </button>
      ))}
    </div>
  </div>
);

export default HistoryList;