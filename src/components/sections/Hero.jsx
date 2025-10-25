import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection, showFeatureToast }) => {
  const navigate = useNavigate();
  const [chatMode, setChatMode] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll smoothly to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { sender: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:5000/start-planning', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputText })
      });

      const data = await res.json(); // data should be an array of spots
      const aiMessage = { sender: 'ai', text: data };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      const aiMessage = { sender: 'ai', text: [{ name: 'Error', category: '', distance_km: '', description: 'AI failed to respond' }] };
      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  if (chatMode) {
    return (
      <section className="pt-24 pb-24 px-4 relative">
        <div className="max-w-3xl mx-auto bg-card p-4 rounded-2xl shadow-lg flex flex-col h-[70vh]">
          {/* Back button */}
          <div className="mb-4">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setChatMode(false)}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          </div>

          {/* Chat window */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-3 px-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-4 py-2 rounded-xl max-w-[70%] break-words ${msg.sender === 'user' ? 'bg-gray-800 text-white' : 'bg-blue-100 text-black'}`}
                >
                  {Array.isArray(msg.text)
                    ? msg.text.map((spot, i) => (
                        <div key={i} className="mb-2">
                          <b>{spot.name}</b> ({spot.category}) - {spot.distance_km} km
                          <br />
                          {spot.description}
                        </div>
                      ))
                    : msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button onClick={sendMessage} disabled={loading}>
              {loading ? '...' : 'Send'}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Main Hero section
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
                onClick={() => setChatMode(true)}
              >
                Start Planning
                <MapPin className="ml-2 h-5 w-5" />
              </Button>

              {/* Fixed Nearby Spots button to navigate */}
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                onClick={() => navigate("/spot")}
              >
                Nearby Spots
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
                <img
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                  alt="Tanjore"
                  src="thanjavur temple.jpeg"
                />
                <img
                  className="rounded-2xl shadow-xl w-full h-32 object-cover"
                  alt="Kerala"
                  src="kerala.jpeg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  className="rounded-2xl shadow-xl w-full h-32 object-cover"
                  alt="Ooty"
                  src="ooty.jpeg"
                />
                <img
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                  alt="Mysore Palace"
                  src="mysore palace.jpeg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
