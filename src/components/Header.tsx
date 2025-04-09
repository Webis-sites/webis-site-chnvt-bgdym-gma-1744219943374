'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface HeaderProps {
  logo?: string;
  cartItemsCount?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  logo = '/logo.svg',
  cartItemsCount = 0 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'דף הבית', path: '/' },
    { name: 'מוצרים', path: '/products' },
    { name: 'שירותים', path: '/services' },
    { name: 'אודות', path: '/about' },
    { name: 'צור קשר', path: '/contact' },
  ];

  return (
    <header 
      className={clsx(
        'sticky top-0 w-full z-50 transition-all duration-300 rtl',
        'backdrop-filter backdrop-blur-lg bg-opacity-70',
        isScrolled ? 
          'shadow-lg bg-white/80 py-2' : 
          'py-4 bg-white/60'
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="חנות בגדים גמא - דף הבית"
          >
            <div className="neumorphic-logo flex items-center">
              <img 
                src={logo} 
                alt="חנות בגדים גמא" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold mr-2 text-primary">חנות בגדים גמא</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'px-4 py-2 mx-1 text-gray-700 rounded-lg font-medium transition-all',
                  'hover:text-primary hover:bg-primary/10',
                  'neumorphic-button'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons Section */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <button 
              aria-label="חיפוש"
              className="glassmorphism-icon p-2 rounded-full text-gray-600 hover:text-primary transition-colors"
            >
              <FiSearch size={20} />
            </button>
            
            <div className="relative">
              <button 
                aria-label="עגלת קניות"
                className="glassmorphism-icon p-2 rounded-full text-gray-600 hover:text-primary transition-colors"
              >
                <FiShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden neumorphic-button p-2 rounded-lg"
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism-panel mt-2 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="px-4 py-3 text-gray-700 rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-all neumorphic-button-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="flex justify-center mt-6 space-x-6 space-x-reverse">
                <button 
                  aria-label="חיפוש"
                  className="glassmorphism-icon p-3 rounded-full text-gray-600 hover:text-primary transition-colors"
                >
                  <FiSearch size={22} />
                </button>
                
                <div className="relative">
                  <button 
                    aria-label="עגלת קניות"
                    className="glassmorphism-icon p-3 rounded-full text-gray-600 hover:text-primary transition-colors"
                  >
                    <FiShoppingCart size={22} />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;