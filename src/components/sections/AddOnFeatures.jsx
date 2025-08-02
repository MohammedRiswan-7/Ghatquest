import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { addOnFeatures } from '@/data/content';

const AddOnFeatures = ({ showFeatureToast }) => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Smart Travel Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered tools and local insights to make your journey unforgettable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOnFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer card-hover"
              onClick={showFeatureToast}
            >
              <Card className="overflow-hidden h-full bg-card">
                <div className="relative h-40">
                  <img  class="w-full h-full object-cover" alt={feature.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="card-hover bg-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-primary" />
                Travel Tips & Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Get real-time safety alerts and essential travel tips for your destination.</p>
              <Button variant="outline" onClick={showFeatureToast}>Learn More</Button>
            </CardContent>
          </Card>

          <Card className="card-hover bg-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="w-6 h-6 mr-2 text-primary" />
                Photo Spots Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Discover the best photography locations and hidden Instagram-worthy spots.</p>
              <Button variant="outline" onClick={showFeatureToast}>Explore</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AddOnFeatures;