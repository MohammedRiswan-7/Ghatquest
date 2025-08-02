import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ExplorePlaces from '@/components/sections/ExplorePlaces';
import Hotels from '@/components/sections/Hotels';
import TourPackages from '@/components/sections/TourPackages';
import AddOnFeatures from '@/components/sections/AddOnFeatures';
import Testimonials from '@/components/sections/Testimonials';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const showFeatureToast = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Discover India Like Never Before - Your AI Travel Guide</title>
        <meta name="description" content="Your personal AI-powered travel guide for exploring tourist spots, hotels, and tour packages across incredible India." />
      </Helmet>

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} showFeatureToast={showFeatureToast} />
        <ExplorePlaces showFeatureToast={showFeatureToast} />
        <Hotels showFeatureToast={showFeatureToast} />
        <TourPackages showFeatureToast={showFeatureToast} />
        <AddOnFeatures showFeatureToast={showFeatureToast} />
        <Testimonials />
      </main>

      <Footer scrollToSection={scrollToSection} showFeatureToast={showFeatureToast} />

      <Toaster />
    </div>
  );
}

export default App;