import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = ({ scrollToSection, showFeatureToast }) => {
  return (
    <footer className="bg-card text-foreground py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Discover India</span>
            </div>
            <p className="text-muted-foreground">Your AI-powered travel companion for exploring incredible India.</p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" onClick={showFeatureToast} />
              <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" onClick={showFeatureToast} />
              <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" onClick={showFeatureToast} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><button onClick={() => scrollToSection('explore')} className="hover:text-primary">Explore Places</button></li>
              <li><button onClick={() => scrollToSection('hotels')} className="hover:text-primary">Hotels</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="hover:text-primary">Tour Packages</button></li>
              <li><button onClick={showFeatureToast} className="hover:text-primary">Travel Tips</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                hello@discoverindia.com
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                <button onClick={showFeatureToast} className="hover:text-primary">Telegram Bot</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Partner With Us</h3>
            <p className="text-muted-foreground mb-4">Join our network of hotels and travel agents</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={showFeatureToast}>
              Become a Partner
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Approach India. All rights reserved. Made with ❤️ for incredible India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;