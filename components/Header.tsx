'use client';

import { useState } from 'react';
import { Home, User, Code, Briefcase, MessageCircle, Download } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: MessageCircle },
];

const social = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    ),
  },
];

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop/Tablet Sidebar */}
      <aside
        className="fixed left-0 top-0 h-screen w-20 md:w-24 z-50 flex flex-col items-center justify-between py-8 px-2
        bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-black/40
        backdrop-blur-xl border-r border-white/10 shadow-2xl
        transition-all duration-500
        hidden sm:flex"
        style={{
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          borderRadius: '0 32px 32px 0',
        }}
      >
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="mb-6"
          >
            <span className="text-3xl font-extrabold text-white drop-shadow-lg">
              <span className="text-cyan-400">{'<'}</span>
              T
              <span className="text-purple-400">{'>'}</span>
            </span>
          </a>
          {/* Navigation Icons */}
          <nav className="flex flex-col gap-6 w-full">
            {navigation.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="relative group flex items-center"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <a
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center justify-center w-12 h-12 rounded-xl
                      bg-white/10 hover:bg-gradient-to-r hover:from-cyan-400/40 hover:to-purple-500/40
                      transition-all duration-300
                      shadow-lg
                      backdrop-blur-lg
                      border border-white/20
                      cursor-pointer
                      `}
                  >
                    <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  {/* Animated Label */}
                  <span
                    className={`absolute left-14 top-1/2 -translate-y-1/2 px-4 py-1 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold text-sm shadow-lg
                      transition-all duration-300
                      ${hovered === item.name ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 -translate-x-4'}
                    `}
                    style={{
                      pointerEvents: 'none',
                      filter: 'blur(0.5px)',
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </nav>
        </div>
        {/* Social & Resume */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col gap-3">
            {social.map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-cyan-400/40 hover:to-purple-500/40 transition-all duration-300 shadow-lg border border-white/20"
                aria-label={s.name}
              >
                {s.svg}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all transform hover:scale-105 mt-2"
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Resume</span>
          </a>
        </div>
      </aside>

      {/* Mobile Bottom Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden items-center justify-between px-2 py-2
        bg-gradient-to-r from-cyan-400/30 via-purple-500/20 to-black/40
        backdrop-blur-xl border-t border-white/10 shadow-2xl
        transition-all duration-500"
        style={{
          boxShadow: '0 -8px 32px 0 rgba(31, 38, 135, 0.37)',
          borderRadius: '32px 32px 0 0',
        }}
      >
        {navigation.map(item => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-cyan-400/40 hover:to-purple-500/40 transition-all duration-300 shadow-lg border border-white/20"
            >
              <Icon className="w-6 h-6 text-white" />
              <span
                className="text-xs text-white font-semibold mt-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ pointerEvents: 'none' }}
              >
                {item.name}
              </span>
            </a>
          );
        })}
        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-center gap-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-3 py-1 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all transform hover:scale-105"
        >
          <Download className="w-4 h-4" />
        </a>
      </nav>
    </>
  );
}