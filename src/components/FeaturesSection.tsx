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
    size: 'large',
  },
  {
    icon: Car,
    title: 'Traffic Monitoring',
    description: 'Live traffic updates and intelligent route optimization.',
    color: 'accent',
    size: 'medium',
  },
  {
    icon: Fuel,
    title: 'Fuel Sensor',
    description: 'Monitor fuel consumption and detect anomalies instantly.',
    color: 'primary',
    size: 'medium',
  },
  {
    icon: Lock,
    title: 'Window Lock/Unlock',
    description: 'Remote window control for enhanced security.',
    color: 'accent',
    size: 'small',
  },
  {
    icon: AlertTriangle,
    title: 'Tamper Detection',
    description: 'Instant alerts for unauthorized access attempts.',
    color: 'primary',
    size: 'medium',
  },
  {
    icon: Activity,
    title: 'Vibration Alerts',
    description: 'Detect unusual vibrations and movement patterns.',
    color: 'accent',
    size: 'small',
  },
  {
    icon: Video,
    title: 'Video & Telemetrics',
    description: 'Live video streaming with comprehensive vehicle data.',
    color: 'primary',
    size: 'large',
  },
  {
    icon: Gauge,
    title: 'Tyre Pressure',
    description: 'Real-time tyre pressure monitoring system.',
    color: 'accent',
    size: 'medium',
  },
  {
    icon: DoorOpen,
    title: 'Door Lock/Unlock',
    description: 'Remote door control with instant notifications.',
    color: 'primary',
    size: 'small',
  },
  {
    icon: Siren,
    title: 'SOS Safety',
    description: 'Emergency alerts with immediate response protocols.',
    color: 'accent',
    size: 'medium',
  },
  {
    icon: Droplets,
    title: 'Fuel Level',
    description: 'Accurate fuel level monitoring and analytics.',
    color: 'primary',
    size: 'small',
  },
  {
    icon: Thermometer,
    title: 'Temperature',
    description: 'Monitor vehicle and cargo temperature in real-time.',
    color: 'accent',
    size: 'medium',
  },
  {
    icon: LayoutDashboard,
    title: 'Combined Dashboard',
    description: 'Unified view of fuel and temperature metrics.',
    color: 'primary',
    size: 'large',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const isPrimary = feature.color === 'primary';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`
        relative group cursor-pointer
        ${feature.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
        ${feature.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}
      `}
    >
      <div className={`
        h-full rounded-2xl p-6 lg:p-8 transition-all duration-500
        ${feature.size === 'large' ? 'min-h-[280px]' : 'min-h-[200px]'}
        bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg
        border border-border/50 hover:border-${feature.color}/50
        group-hover:shadow-[0_0_60px_-15px_hsl(var(--${feature.color})/0.3)]
      `}>
        {/* Glow effect on hover */}
        <div className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
          bg-gradient-to-br ${isPrimary ? 'from-primary/5 to-transparent' : 'from-accent/5 to-transparent'}
        `} />

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center mb-6
            ${isPrimary ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'}
            transition-colors duration-300
          `}>
            <feature.icon className={`w-7 h-7 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
          </div>

          {/* Content */}
          <h3 className={`
            text-xl lg:text-2xl font-bold text-foreground mb-3
            ${feature.size === 'large' ? 'lg:text-3xl' : ''}
          `}>
            {feature.title}
          </h3>
          
          <p className={`
            text-muted-foreground leading-relaxed flex-grow
            ${feature.size === 'large' ? 'text-lg' : 'text-base'}
          `}>
            {feature.description}
          </p>

          {/* Animated indicator */}
          <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className={`text-sm font-medium ${isPrimary ? 'text-primary' : 'text-accent'}`}>
              Learn more
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={isPrimary ? 'text-primary' : 'text-accent'}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
            From basic GPS to advanced telemetrics, we've got you covered.
          </p>
        </motion.div>

        {/* Features Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
