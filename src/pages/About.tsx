import { QrCode, Code2, Palette, Zap, Link, Shield, Smartphone, Settings } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Link className="w-8 h-8 text-blue-600" />,
      title: "URL Shortening",
      description: "Transform long URLs into concise, shareable links that are easy to remember and share across platforms."
    },
    {
      icon: <QrCode className="w-8 h-8 text-indigo-600" />,
      title: "Advanced QR Generation",
      description: "Create professional QR codes with custom designs, logos, and colors to enhance brand visibility."
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "Custom Styling",
      description: "Personalize your QR codes with custom colors, patterns, and corner styles for unique visual appeal."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Secure & Reliable",
      description: "All shortened URLs and QR codes are secure, monitored, and protected against malicious use."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile Friendly",
      description: "Responsive design ensures perfect functionality across all devices and screen sizes."
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      title: "Advanced Options",
      description: "Fine-tune your QR codes with adjustable size, error correction, and format options."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Instant Sharing",
      description: "Share your shortened URLs and QR codes instantly via email, social media, or direct download."
    },
    {
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
      title: "Modern Technology",
      description: "Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-transparent bg-clip-text">
            URL Shortener & QR Code Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A powerful tool that combines URL shortening with advanced QR code generation capabilities. 
            Create memorable links and stunning QR codes that make sharing easier than ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-pink-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Links?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you need a shortened URL or a customized QR code, our tool has you covered. 
            Create professional, branded links and QR codes in seconds!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Link className="w-5 h-5" />
              <span>Shorten URL</span>
            </a>
            <a
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <QrCode className="w-5 h-5" />
              <span>Create QR Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
