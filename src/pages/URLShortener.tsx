import React, { useState } from 'react';
import { Link2, Copy, CheckCircle2, ExternalLink, Loader2 } from 'lucide-react';

interface ShortenedURL {
  originalUrl: string;
  shortUrl: string;
  clicks?: number;
}

const URLShortener: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedURL[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const isValidUrl = (urlString: string): boolean => {
    try {
      new URL(urlString);
      return true;
    } catch (err) {
      return false;
    }
  };

  const shortenUrl = async (): Promise<void> => {
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Using TinyURL API for URL shortening
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
      if (!response.ok) throw new Error('Failed to shorten URL');
      
      const shortUrl = await response.text();
      const newShortenedUrl: ShortenedURL = {
        originalUrl: url,
        shortUrl,
        clicks: 0
      };

      setShortenedUrls(prev => [newShortenedUrl, ...prev]);
      setUrl('');
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (shortUrl: string): void => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(shortUrl);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      shortenUrl();
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
            URL Shortener
          </h1>
          <p className="text-gray-600">Make your long URLs short and trackable</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your long URL here"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
            <Link2 className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={shortenUrl}
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ${
              isLoading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Shortening...</span>
              </>
            ) : (
              <>
                <Link2 className="w-5 h-5" />
                <span>Shorten URL</span>
              </>
            )}
          </button>
        </div>

        {shortenedUrls.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Shortened URLs</h2>
            <div className="space-y-3">
              {shortenedUrls.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1 min-w-0">
                      <p className="text-sm text-gray-500 truncate">
                        {item.originalUrl}
                      </p>
                      <p className="text-violet-600 font-medium truncate">
                        {item.shortUrl}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => copyToClipboard(item.shortUrl)}
                        className="p-2 text-gray-500 hover:text-violet-600 transition-colors"
                        title="Copy to clipboard"
                      >
                        {copied === item.shortUrl ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                      <a
                        href={item.shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-violet-600 transition-colors"
                        title="Open shortened URL"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  {item.clicks !== undefined && (
                    <p className="text-sm text-gray-500">
                      Clicks: {item.clicks}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default URLShortener;
