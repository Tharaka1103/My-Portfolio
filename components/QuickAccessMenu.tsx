'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Plus,
  X,
  Share2,
  Heart,
  MessageCircle
} from 'lucide-react';
import { FiMessageCircle, FiMessageSquare } from 'react-icons/fi';

// Social media items configuration
const socialItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>
    ),
    href: 'https://github.com/tharaka1103',
    color: 'bg-gray-800 hover:bg-gray-900',
    label: 'GitHub',
    hoverColor: 'hover:shadow-gray-500/25'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
    ),
    href: 'https://www.linkedin.com/in/tharaka-dharmasiri-3ba950204/',
    color: 'bg-blue-600 hover:bg-blue-700',
    label: 'LinkedIn',
    hoverColor: 'hover:shadow-blue-500/25'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" x="0px" y="0px" width="50" height="50" >
        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/>
        <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/>
      </svg>
    ),
    href: 'https://facebook.com/supun.tharaka.9277',
    color: 'bg-blue-500 hover:bg-blue-600',
    label: 'Facebook',
    hoverColor: 'hover:shadow-blue-500/25'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" x="0px" y="0px" width="50" height="50" >
        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/>
        <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/>
        <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"/>
      </svg>
    ),
    href: 'https://wa.me/+94714310048',
    color: 'bg-green-500 hover:bg-green-600',
    label: 'WhatsApp',
    hoverColor: 'hover:shadow-green-500/25'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" x="0px" y="0px" width="40" height="40" >
        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
        <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
        <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
      </svg>
    ),
    href: 'mailto:supuntharakapro999@gmail.com',
    color: 'bg-red-500 hover:bg-red-600',
    label: 'Gmail',
    hoverColor: 'hover:shadow-red-500/25'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" x="0px" y="0px" width="50" height="50" >
        <path fill="#03a9f4" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/>
        <path fill="#fff" d="M24.602,36C18,36,15,32.699,15,30.199C15,28.898,15.898,28,17.199,28c2.801,0,2.102,4.102,7.402,4.102c2.699,0,4.199-1.5,4.199-3c0-0.902-0.402-1.902-2.199-2.402l-5.902-1.5C16,24,15.102,21.398,15.102,18.898c0-5.098,4.699-6.898,9.098-6.898C28.301,12,33,14.199,33,17.199c0,1.301-1,2.102-2.301,2.102c-2.398,0-2-3.402-6.801-3.402c-2.398,0-3.797,1.102-3.797,2.703c0,1.598,1.898,2.098,3.598,2.5l4.402,1C32.898,23.199,34,26,34,28.699C33.898,32.898,30.898,36,24.602,36z"/>
      </svg>
    ),
    href: 'skype:yourusername?chat',
    color: 'bg-sky-500 hover:bg-sky-600',
    label: 'Skype',
    hoverColor: 'hover:shadow-sky-500/25'
  }
];

export function QuickAccessMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      {/* Main toggle button */}
      <motion.button
        className={cn(
          "relative flex items-center justify-center w-14 h-14 rounded-full text-white",
          isOpen 
            ? "bg-red-600" 
            : "bg-accent",
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? <X size={24} /> : <FiMessageCircle size={24} />}
        </motion.div>
        
      </motion.button>

      {/* Social media menu items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={toggleMenu}
            />
            
            {/* Menu items in 90-degree arc formation */}
            {socialItems.map((item, index) => {
              // 90-degree arc in the lower half (45° to 135°)
              const startAngle = 90;   // Bottom-right
              const endAngle = 270;    // Bottom-left
              const totalItems = socialItems.length;
              const angle = startAngle + (index * (endAngle - startAngle) / (totalItems - 1));
              const angleInRadians = (angle * Math.PI) / 180;
              const radius = 100; // Reduced radius for tighter grouping
              const x = Math.cos(angleInRadians) * radius;
              const y = Math.sin(angleInRadians) * radius;
              
              return (
                <motion.div
                  key={item.label}
                  className="absolute"
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x,
                    y,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      delay: 0.05 * index,
                    },
                  }}
                  exit={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                    transition: { 
                      duration: 0.2, 
                      delay: 0.03 * (totalItems - index - 1) 
                    },
                  }}
                >
                  <SocialButton 
                    item={item} 
                    onClick={() => handleItemClick(item.href)}
                    onHover={(label) => setHoveredItem(label)}
                    onLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === item.label}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating tooltip - positioned to avoid overlap */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none z-50"
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gray-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-xl border border-gray-700">
              <div className="text-sm font-medium whitespace-nowrap">
                {hoveredItem}
              </div>
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SocialButton({ 
  item, 
  onClick,
  onHover,
  onLeave,
  isHovered
}: { 
  item: (typeof socialItems)[number];
  onClick: () => void;
  onHover: (label: string) => void;
  onLeave: () => void;
  isHovered: boolean;
}) {
  return (
    <div className="relative group">
      <motion.button
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full text-white transition-all duration-300",
          item.hoverColor,
          isHovered && "ring-2 ring-white/60"
        )}
        whileHover={{ 
          scale: 1.2,
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.4 }
        }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        onMouseEnter={() => onHover(item.label)}
        onMouseLeave={onLeave}
      >
        <div className="w-12 h-12 relative z-10">
          {item.icon}
        </div>
        
        
        {/* Pulse ring on hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/40"
          initial={{ scale: 1, opacity: 0 }}
          animate={isHovered ? { 
            scale: [1, 1.5, 1], 
            opacity: [0.5, 0, 0.5] 
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.button>
      
      {/* Click ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2.5, opacity: [0.5, 0] }}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(circle, ${
            item.color.includes('gray') ? '#6b7280' : 
            item.color.includes('blue-600') ? '#2563eb' :
            item.color.includes('blue-500') ? '#3b82f6' :
            item.color.includes('green') ? '#22c55e' :
            item.color.includes('red') ? '#ef4444' :
            item.color.includes('sky') ? '#0ea5e9' : '#8b5cf6'
          }40, transparent 70%)`,
        }}
      />
    </div>
  );
}
