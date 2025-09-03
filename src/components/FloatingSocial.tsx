import { Instagram, MessageCircle, Facebook } from 'lucide-react';
import { useState } from 'react';

const FloatingSocial = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/eleviquecreations',
      color: 'bg-gradient-to-r from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61572559022754&mibextid=wwXIfr&rdid=qhZHy7Ke9unQIvLQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GHYCwUkkp%2F%3Fmibextid%3DwwXIfr#',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
      {socialLinks.map((social, index) => (
        <div key={social.name} className="relative group">
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${social.color} ${social.hoverColor} animate-float`}
            style={{ animationDelay: `${index * 0.2}s` }}
            onMouseEnter={() => setHoveredIcon(social.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <social.icon className="h-5 w-5" />
          </a>
          
          {/* Tooltip */}
          <div className={`absolute left-16 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            hoveredIcon === social.name ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}>
            <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
              {social.name}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-foreground rotate-45"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingSocial;