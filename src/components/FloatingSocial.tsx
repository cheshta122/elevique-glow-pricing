import { Instagram, MessageCircle, Facebook } from 'lucide-react';
import { useState } from 'react';

const FloatingSocial = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/eleviquecreations',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61572559022754&mibextid=wwXIfr',
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
      {socialLinks.map((social) => (
        <div key={social.name} className="relative group">
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center w-12 h-12 rounded-full text-white 
              shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl
              bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600
            `}
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
