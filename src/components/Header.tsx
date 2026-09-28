import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { COLORS } from '../constants/colors';
import { Moon, Sun } from 'lucide-react'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header 
    style={{ backgroundColor: COLORS.primary }}
    className="text-white shadow-lg sticky top-0 z-50">

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center gap-3">

         <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold">
            Millicent<span style={{ color: COLORS.secondary }}> Chelangat</span>
          </span>
        </div>
          </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-14">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium transition-colors">About Me</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium transition-colors">Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium transition-colors">Projects</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium transition-colors">Experience</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium transition-colors">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                style={{ backgroundColor: COLORS.secondary, color: COLORS.onsecondary }}
                className="ml-4 w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
              </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium">Home</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium">About Me</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium">Projects</a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium">Experience</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-800 font-medium">Contact</a>

                   {/* Dark/Light Mode Icon in Mobile Menu */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                style={{ backgroundColor: COLORS.secondary, color: COLORS.onsecondary }}
                className="ml-4 w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
              </button>
            </nav>
          </div>
        )}
      </div>
      
    </header>
  );
};

export default Header;
