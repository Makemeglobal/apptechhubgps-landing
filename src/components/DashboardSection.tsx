import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BarChart3, 
  Bell, 
  Map, 
  Settings,
  TrendingUp,
  Users,
  Zap,
  Shield
} from 'lucide-react';

const highlights = [
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive data visualization with actionable insights.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Instant alerts for critical events and anomalies.',
  },
  {
    icon: Map,
    title: 'Interactive Maps',
    description: 'High-resolution mapping with live vehicle positions.',
  },
  {
    icon: Settings,
    title: 'Custom Reports',
    description: 'Generate detailed reports tailored to your needs.',
  },
];

export const DashboardSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="dashboard" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Intuitive Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Command Center for Your{' '}
            <span className="text-gradient">Entire Fleet</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A powerful, user-friendly interface that puts all your fleet data at your fingertips.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-[2.5rem] blur-3xl opacity-60" />
          
          <img src="/images/dashboard1.webp" alt="Dashboard Preview" className="w-full max-w-6xl rounded-lg mx-auto p-20" />
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
