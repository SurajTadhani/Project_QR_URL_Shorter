import { QrCode, Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8 text-indigo-600" />,
      title: "QR Code Generation",
      description: "Generate high-quality QR codes instantly for any text or URL you want to share."
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "Customization",
      description: "Personalize your QR codes with custom colors to match your brand or preference."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Instant Sharing",
      description: "Download, copy, or share your QR codes directly with others in just one click."
    },
    {
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
      title: "Modern Technology",
      description: "Built with React, TypeScript, and Tailwind CSS for a smooth user experience."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            About QR Code Generator
          </h1>
          <p className="text-xl text-gray-600">
            A modern, fast, and user-friendly QR code generation tool
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
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

        <div className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to create your QR code?
          </h2>
          <p className="text-gray-600 mb-6">
            Head back to the generator and create your custom QR code in seconds!
          </p>
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
  );
};

export default About;
