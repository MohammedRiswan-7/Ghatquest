import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { hotels } from '@/data/content';

const Hotels = ({ showFeatureToast }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHotels, setNearbyHotels] = useState([]);

  // Get user location on mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setUserLocation({ lat, lon });
      },
      (error) => {
        console.error('Location access denied:', error.message);
      }
    );
  }, []);

  // Filter nearby hotels
  useEffect(() => {
    if (userLocation) {
      const filtered = hotels.filter((hotel) => {
        if (!hotel.lat || !hotel.lng) return false;
        const dist = getDistance(userLocation.lat, userLocation.lon, hotel.lat, hotel.lng);
        return dist <= 50; // within 50km
      });
      setNearbyHotels(filtered);
    }
  }, [userLocation]);

  return (
    <section id="hotels" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Hotels Near Tourist Spots</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked accommodations with great ratings and convenient locations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(nearbyHotels.length > 0 ? nearbyHotels : hotels).map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-hover overflow-hidden bg-card">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    alt={hotel.name}
                    src="https://images.unsplash.com/photo-1644473968199-150d0a098163"
                  />
                  {hotel.commission && (
                    <Badge variant="destructive" className="absolute top-4 left-4">
                      Partner Hotel
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {hotel.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{hotel.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {hotel.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{hotel.price}</span>
                    <span className="text-sm text-muted-foreground">per night</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {hotel.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={showFeatureToast}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={showFeatureToast}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Distance calculation function (Haversine formula)
function getDistance(lat1, lon1, lat2, lon2) {
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 6371; // Radius of Earth in KM
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

export default Hotels;
