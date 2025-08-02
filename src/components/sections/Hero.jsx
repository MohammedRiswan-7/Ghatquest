import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection, showFeatureToast }) => {
  return (
    <section id="home" className="pt-32 pb-24 nature-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Discover India</span>
                <br />
                <span className="text-foreground">Like Never Before</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Your personal AI-powered travel guide for exploring tourist spots, hotels, and tour packages.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="hero-gradient text-black font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform"
                onClick={() => scrollToSection('explore')}
              >
                Start Planning
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                onClick={showFeatureToast}
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 animate-float">
              <div className="space-y-4">
                <img  class="rounded-2xl shadow-xl w-full h-48 object-cover" alt="Taj Mahal at sunset" src="https://images.unsplash.com/photo-1652448332833-e411ac835e41" />
                <img  class="rounded-2xl shadow-xl w-full h-32 object-cover" alt="Kerala backwaters" src="https://images.unsplash.com/photo-1459100652174-45f3b5ca9d04" />
              </div>
              <div className="space-y-4 mt-8">
                <img  class="rounded-2xl shadow-xl w-full h-32 object-cover" alt="Rajasthan desert" src="https://images.unsplash.com/photo-1675730355766-aaa4122412e2" />
                <img  class="rounded-2xl shadow-xl w-full h-48 object-cover" alt="Himalayan mountains" src="https://images.unsplash.com/photo-1518526394840-1478aa7da9ef" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;