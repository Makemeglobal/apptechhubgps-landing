import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MapPin,
  Car,
  Fuel,
  Lock,
  AlertTriangle,
  Activity,
  Video,
  Gauge,
  DoorOpen,
  Siren,
  Droplets,
  Thermometer,
  LayoutDashboard,
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    description: 'Track vehicles with pinpoint accuracy using advanced GPS technology.',
    color: 'primary',
  },
  {
    icon: Car,
    title: 'Traffic Monitoring',
    description: 'Live traffic updates and intelligent route optimization.',
    color: 'accent',
  },
  {
    icon: Fuel,
    title: 'Fuel Sensor',
    description: 'Monitor fuel consumption and detect anomalies instantly.',
    color: 'primary',
  },
  {
    icon: Lock,
    title: 'Window Lock/Unlock',
    description: 'Remote window control for enhanced security.',
    color: 'accent',
  },
  {
    icon: AlertTriangle,
    title: 'Tamper Detection',
    description: 'Instant alerts for unauthorized access attempts.',
    color: 'primary',
  },
  {
    icon: Activity,
    title: 'Vibration Alerts',
    description: 'Detect unusual vibrations and movement patterns.',
    color: 'accent',
  },
  {
    icon: Video,
    title: 'Video & Telemetrics',
    description: 'Live video streaming with comprehensive vehicle data.',
    color: 'primary',
  },
  {
    icon: Gauge,
    title: 'Tyre Pressure',
    description: 'Real-time tyre pressure monitoring system.',
    color: 'accent',
  },
  {
    icon: DoorOpen,
    title: 'Door Lock/Unlock',
    description: 'Remote door control with instant notifications.',
    color: 'primary',
  },
  {
    icon: Siren,
    title: 'SOS Safety',
    description: 'Emergency alerts with immediate response protocols.',
    color: 'accent',
  },
  {
    icon: Droplets,
    title: 'Fuel Level',
    description: 'Accurate fuel level monitoring and analytics.',
    color: 'primary',
  },
  {
    icon: Thermometer,
    title: 'Temperature',
    description: 'Monitor vehicle and cargo temperature in real-time.',
    color: 'accent',
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={ref} className="relative py-32 overflow-hidden">
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
            Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Monitor & Control</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tracking and management tools designed for modern fleet operations.
          </p>
        </motion.div>

        {/* Features Grid - Clean Alternating Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const isPrimary = feature.color === 'primary';
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group"
              >
                <div className="h-full rounded-2xl p-6 bg-card/40 border border-border/40 hover:border-primary/40 transition-all duration-500 hover:bg-card/60 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)]">
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-5
                    ${isPrimary ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'}
                    transition-colors duration-300
                  `}>
                    <feature.icon className={`w-6 h-6 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            And many more features to explore
          </p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-primary/40" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
