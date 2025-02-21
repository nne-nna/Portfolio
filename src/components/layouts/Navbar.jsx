import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`relative transition-colors hover:text-green-400
        ${isActive ? 'text-green-400' : 'text-gray-400'}
        after:content-[""] after:absolute after:bottom-[-2px] after:left-0 
        after:w-full after:h-[2px] after:bg-green-400
        after:transform after:origin-left
        ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
        after:transition-transform after:duration-200`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-green-400 font-mono text-xl">{"<Nene_Dev />"}</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About_Me</NavLink>
            <NavLink to="/projects">My_Projects</NavLink>
            <NavLink to="/contact">Contact_Me</NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About-Me</NavLink>
            <NavLink to="/projects">My_Projects</NavLink>
            <NavLink to="/contact">Contact_Me</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;