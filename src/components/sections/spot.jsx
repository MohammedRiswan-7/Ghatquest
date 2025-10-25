import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Spot = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch nearby spots from backend
  useEffect(() => {
    async function fetchSpots() {
      try {
        const res = await fetch('http://127.0.0.1:5000/nearby-spots');
        const data = await res.json();
        setSpots(data);
      } catch (err) {
        console.error(err);
        setSpots([
          { name: 'Error', category: '', distance_km: '', description: 'Failed to load spots' }
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchSpots();
  }, []);

  return (
    <section id="spots" className="pt-32 pb-24 relative overflow-hidden nature-pattern">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-center mb-12 gradient-text">
          Nearby Tourist Spots
        </h2>

        {loading ? (
          <p className="text-center text-muted-foreground text-xl">Loading spots...</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spots.map((spot, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-2xl font-semibold">{spot.name}</h3>
                </div>

                <p className="text-muted-foreground mb-2">
                  <b>Category:</b> {spot.category || 'N/A'}
                </p>
                <p className="text-muted-foreground mb-2">
                  <b>Distance:</b> {spot.distance_km || 'N/A'} km
                </p>
                <p className="text-muted-foreground mb-4">{spot.description}</p>

                <Button
                  size="lg"
                  className="w-full hero-gradient text-black font-semibold hover:scale-105 transition-transform"
                >
                  Explore
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Spot;
