import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Sun, IndianRupee, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { indianStates, touristSpots } from '@/data/content';

const ExplorePlaces = ({ showFeatureToast }) => {
  const [selectedState, setSelectedState] = useState('');

  return (
    <section id="explore" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Explore Amazing Places</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the best tourist destinations across India with detailed information and insider tips.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto mb-12">
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="w-full h-12 text-lg bg-card border-border">
              <SelectValue placeholder="Select State/UT to explore" />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedState && touristSpots[selectedState] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {touristSpots[selectedState].map((spot, index) => (
              <Card key={index} className="card-hover overflow-hidden bg-card">
                <div className="relative">
                  <img  class="w-full h-48 object-cover" alt={spot.name} src="https://images.unsplash.com/photo-1590342986688-0d28777219cf" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      {spot.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{spot.name}</CardTitle>
                  <CardDescription>{spot.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    Best Time: {spot.bestTime}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Sun className="w-4 h-4 mr-2 text-primary" />
                    Weather: {spot.weather}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <IndianRupee className="w-4 h-4 mr-2 text-primary" />
                    Entry Fee: {spot.entryFee}
                  </div>
                  <Button className="w-full mt-4" onClick={showFeatureToast}>
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}

        {!selectedState && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Select a state to discover amazing places!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExplorePlaces;