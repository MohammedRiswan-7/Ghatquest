// Footer.jsx
import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = ({ scrollToSection, showFeatureToast }) => {
  return (
    <footer className="bg-card text-foreground py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <MapPin />
          <Phone />
          <Mail />
          <MessageCircle />
        </div>
        <div className="flex space-x-4">
          <Facebook />
          <Instagram />
          <Twitter />
          {/* WhatsApp removed */}
        </div>
        <Button onClick={showFeatureToast}>Contact Us</Button>
      </div>
    </footer>
  );
};

export default Footer;
