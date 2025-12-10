import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fleet Manager',
    company: 'LogiTrans Inc.',
    content: 'ApptechHubGPS has transformed how we manage our fleet. The real-time tracking and fuel monitoring alone saved us 20% on operational costs.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'FastFreight Co.',
    content: 'The dashboard is incredibly intuitive. Our team was up and running within hours. The support team is also exceptional.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO',
    company: 'GreenMove Logistics',
    content: 'We tried several GPS solutions before finding ApptechHubGPS. Nothing else comes close in terms of features and reliability.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{' '}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what fleet managers and business owners say about ApptechHubGPS.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full card-glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-lg leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
