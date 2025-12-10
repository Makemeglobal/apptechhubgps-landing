import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, Wifi, Monitor, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Install Device',
    description: 'Quick and easy installation of our GPS tracking device in your vehicle fleet.',
  },
  {
    number: '02',
    icon: Wifi,
    title: 'Connect & Configure',
    description: 'Automatic cloud connection with simple configuration through our mobile app.',
  },
  {
    number: '03',
    icon: Monitor,
    title: 'Monitor in Real-time',
    description: 'Access your dashboard to track and manage all vehicles from anywhere.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimize Operations',
    description: 'Use insights and analytics to improve efficiency and reduce costs.',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" ref={ref} className="relative py-32 overflow-hidden">
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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Started in{' '}
            <span className="text-gradient">Four Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From installation to optimization, our streamlined process gets you up and running quickly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative group">
                  {/* Number badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-4 left-6 z-20 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg shadow-primary/30"
                  >
                    {step.number}
                  </motion.div>

                  {/* Card content */}
                  <div className="pt-8 h-full">
                    <div className="card-glass rounded-2xl p-8 h-full group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-[0_0_40px_-15px_hsl(var(--primary)/0.3)]">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-primary/50">
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-2xl"
                      >
                        →
                      </motion.span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
