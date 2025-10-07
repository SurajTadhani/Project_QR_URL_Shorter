import React, { useState, useRef, useEffect } from "react";
import {
  Download,
  Link2,
  Loader2,
  Share2,
  CheckCircle2,
  Copy,
  Settings2,
  Palette,
} from "lucide-react";
import QRCodeStyling from "qr-code-styling";

type QRStyle = "dots" | "square" | "rounded";

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // QR customization options
  const [foregroundColor, setForegroundColor] = useState("#4C1D95");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [qrStyle, setQrStyle] = useState<QRStyle>("square");
  const [margin, setMargin] = useState(2);
  const [size, setSize] = useState(300);

  const qrRef = useRef<HTMLDivElement | null>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: size,
      height: size,
      data: " ",
      margin,
      dotsOptions: {
        type: qrStyle,
        color: foregroundColor,
      },
      backgroundOptions: {
        color: backgroundColor,
      },
    });

    if (qrRef.current) {
      qrCode.current.append(qrRef.current);
    }
  }, []);

  useEffect(() => {
    if (!qrCode.current) return;
    qrCode.current.update({
      data: text || " ",
      width: size,
      height: size,
      margin,
      dotsOptions: {
        type: qrStyle,
        color: foregroundColor,
      },
      backgroundOptions: {
        color: backgroundColor,
      },
    });
  }, [text, size, margin, foregroundColor, backgroundColor, qrStyle]);

  const generateQRCode = () => {
    if (!text) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 600);
  };

  const handleDownload = () => {
    qrCode.current?.download({ name: "qrcode", extension: "png" });
  };

  const handleShare = async () => {
    if (text && navigator.share) {
      try {
        await navigator.share({
          title: "QR Code",
          text: "Check out this QR Code!",
          url: text,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
            QR Code Studio
          </h1>
          <p className="text-gray-600">
            Create beautiful and customized QR codes instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="text"
                className="text-sm font-medium text-gray-700"
              >
                Enter text or URL
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Enter text or URL here"
                />
                <Link2 className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center gap-2 text-gray-600 hover:text-violet-600 transition-colors"
              >
                <Settings2 className="w-5 h-5" />
                <span>Customize QR Code</span>
              </button>
            </div>

            {showSettings && (
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Style
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["dots", "square", "rounded"] as QRStyle[]).map(
                      (style) => (
                        <button
                          key={style}
                          onClick={() => setQrStyle(style)}
                          className={`px-3 py-2 rounded-md capitalize ${
                            qrStyle === style
                              ? "bg-violet-600 text-white"
                              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {style}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Colors
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500">
                        Foreground
                      </label>
                      <input
                        type="color"
                        value={foregroundColor}
                        onChange={(e) => setForegroundColor(e.target.value)}
                        className="w-full h-10 rounded-md cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">
                        Background
                      </label>
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-full h-10 rounded-md cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Size & Margin
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500">Size (px)</label>
                      <input
                        type="range"
                        min="200"
                        max="400"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-500">{size}px</span>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Margin</label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={margin}
                        onChange={(e) => setMargin(Number(e.target.value))}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-500">{margin}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={generateQRCode}
              disabled={isLoading || !text}
              className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all duration-300 ${
                isLoading || !text
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white"
              }`}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Palette className="w-5 h-5" />
                  <span>Generate QR Code</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
              <div ref={qrRef} />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center space-x-2 bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center justify-center space-x-2 bg-fuchsia-600 text-white py-2 px-4 rounded-md hover:bg-fuchsia-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center space-x-2 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                {copied ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
