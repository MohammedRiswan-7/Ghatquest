import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { tourPackages } from '@/data/content';

const TourPackages = ({ showFeatureToast }) => {
  return (
    <section id="packages" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Curated Tour Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pre-planned itineraries designed to give you the best of India's diverse experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-hover overflow-hidden h-full bg-card flex flex-col">
                <div className="relative">
                  <img  class="w-full h-48 object-cover" alt={pkg.title} src="https://images.unsplash.com/photo-1702567855965-176e97304a4b" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive">
                      {pkg.duration}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>
                    {pkg.destinations.join(' → ')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Highlights:</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-3 h-3 mr-2 text-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2 pt-4 mt-auto">
                    <Button className="flex-1" onClick={showFeatureToast}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={showFeatureToast}>
                      Book Now
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

export default TourPackages;