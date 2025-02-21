import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/nne-nna/',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nnenna-ezidiegwu-23404124b/',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:ezidiegwunnennafavour@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright and Credits */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm text-gray-400">
            <p>© {currentYear} Nnenna Ezidiegwu.</p>
            <p className="hidden sm:block">|</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-green-400" /> using React & Tailwind
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              Home
            </a>
            <a href="/about" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              About
            </a>
            <a href="/projects" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              Projects
            </a>
            <a href="/contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;