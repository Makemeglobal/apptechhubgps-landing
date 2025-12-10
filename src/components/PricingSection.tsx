import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small fleets getting started with GPS tracking.',
    features: [
      'Up to 10 vehicles',
      'Real-time tracking',
      'Basic reporting',
      'Email support',
      '30-day data history',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Advanced features for growing businesses with larger fleets.',
    features: [
      'Up to 50 vehicles',
      'Real-time tracking',
      'Advanced analytics',
      'Priority support',
      '1-year data history',
      'Custom alerts',
      'API access',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'Full-featured solution for large-scale fleet operations.',
    features: [
      'Unlimited vehicles',
      'Real-time tracking',
      'Custom analytics',
      '24/7 dedicated support',
      'Unlimited data history',
      'White-label options',
      'Custom integrations',
      'SLA guarantee',
    ],
    highlighted: false,
  },
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your fleet size. All plans include core tracking features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative group ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`
                h-full rounded-3xl p-8 transition-all duration-500
                ${plan.highlighted 
                  ? 'bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/30 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)]' 
                  : 'card-glass border border-border/50 hover:border-primary/20'}
              `}>
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? 'bg-primary/20' : 'bg-accent/20'}`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`
                    w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300
                    ${plan.highlighted 
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-primary' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}
                  `}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
};
