import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('home')}
          >
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">Approach India</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-6">
            {['home', 'explore', 'hotels', 'packages', 'features'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize font-medium transition-colors relative ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {section === 'features' ? 'Add-Ons' : section}
                {activeSection === section && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;