import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Spot from '@/components/sections/Spot'; // <- Import Spot.jsx

class SectionErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Section Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          ⚠️ Section failed to load
        </div>
      );
    }
    return this.props.children;
  }
}

function MainLayout() {
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
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AI Travel Guide</title>
        <meta
          name="description"
          content="Your personal AI-powered travel guide for exploring tourist spots, hotels, and tour packages across incredible India."
        />
      </Helmet>

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <SectionErrorBoundary>
          <Hero scrollToSection={scrollToSection} showFeatureToast={showFeatureToast} />
        </SectionErrorBoundary>

        <SectionErrorBoundary>
          <ExplorePlaces showFeatureToast={showFeatureToast} />
        </SectionErrorBoundary>

        <SectionErrorBoundary>
          <Hotels showFeatureToast={showFeatureToast} />
        </SectionErrorBoundary>

        <SectionErrorBoundary>
          <TourPackages showFeatureToast={showFeatureToast} />
        </SectionErrorBoundary>

        <SectionErrorBoundary>
          <AddOnFeatures showFeatureToast={showFeatureToast} />
        </SectionErrorBoundary>

        <SectionErrorBoundary>
          <Testimonials />
        </SectionErrorBoundary>
      </main>

      <Footer scrollToSection={scrollToSection} showFeatureToast={showFeatureToast} />

      <Toaster />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/spot" element={<Spot />} /> {/* Spot.jsx page */}
      </Routes>
    </Router>
  );
}

export default App;
