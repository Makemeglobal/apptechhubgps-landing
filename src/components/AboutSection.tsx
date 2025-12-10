import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Zap, Lock, BarChart3 } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { icon: Globe, label: 'Global Coverage' },
    { icon: Zap, label: 'Real-time Data' },
    { icon: Lock, label: 'Secure Platform' },
    { icon: BarChart3, label: 'Smart Analytics' },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4"
            >
              About ApptechHubGPS
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Revolutionizing Fleet{' '}
              <span className="text-gradient">Management</span> with{' '}
              <span className="text-gradient">Smart Technology</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              ApptechHubGPS provides advanced GPS tracking and telematics for modern fleets, offering real-time location data, vehicle diagnostics, and intuitive software tools. The platform helps businesses improve routing, cut costs, and enhance overall safety and efficiency.

            </p>

            {/* Mini Feature List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main visual container */}
            <div className="relative">
              {/* Glowing orb background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[3rem] blur-3xl" />
              
              {/* Icon cluster */}
              <div className="relative grid grid-cols-3 gap-6 p-8">
                {[
                  { icon: Globe, delay: 0, size: 'large' },
                  { icon: Satellite, delay: 0.1, size: 'medium' },
                  { icon: Radio, delay: 0.2, size: 'medium' },
                  { icon: BarChart3, delay: 0.3, size: 'medium' },
                  { icon: Shield, delay: 0.4, size: 'large' },
                  { icon: Zap, delay: 0.5, size: 'medium' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + item.delay }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`
                      ${item.size === 'large' ? 'col-span-1 row-span-1' : ''}
                      card-glass rounded-2xl p-6 flex items-center justify-center
                      hover:glow-border transition-all duration-300 cursor-pointer
                    `}
                  >
                    <item.icon className={`${item.size === 'large' ? 'w-12 h-12' : 'w-8 h-8'} text-primary`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Satellite, Radio, Shield } from 'lucide-react';
