import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/data/content';

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">What Travelers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">Real experiences from real travelers</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-hover h-full bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img  class="w-12 h-12 rounded-full mr-4 object-cover" alt={testimonial.name} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-muted-foreground/50" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;