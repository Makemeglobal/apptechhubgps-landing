import { motion } from 'framer-motion';
import { Play, ArrowRight, Satellite, Radio, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Animated Radar Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
        <div className="absolute inset-0 rounded-full border border-primary/30" />
        <div className="absolute inset-[15%] rounded-full border border-primary/25" />
        <div className="absolute inset-[30%] rounded-full border border-primary/20" />
        <div className="absolute inset-[45%] rounded-full border border-primary/15" />
        <div className="absolute inset-0 animate-radar-sweep origin-center">
          <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 radar-line origin-left" />
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[15%] w-16 h-16 rounded-2xl card-glass flex items-center justify-center glow-primary opacity-60"
      >
        <Satellite className="w-8 h-8 text-primary" />
      </motion.div>
      
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-[12%] w-14 h-14 rounded-2xl card-glass flex items-center justify-center glow-accent opacity-60"
      >
        <Radio className="w-7 h-7 text-accent" />
      </motion.div>
      
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 left-[10%] w-12 h-12 rounded-xl card-glass flex items-center justify-center opacity-50"
      >
        <Shield className="w-6 h-6 text-primary" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass text-sm font-medium text-primary mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Next-Gen GPS Technology
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              <span className="text-foreground">Smart Tracking,</span>
              <br />
              <span className="text-gradient">Telemetry & Control</span>
              <br />
              <span className="text-foreground">All in One Platform</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Advanced fleet management with real-time GPS tracking, comprehensive vehicle diagnostics, and intelligent automation for complete operational control.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-all duration-300 glow-primary group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 text-foreground px-8 py-6 text-lg rounded-xl group"
              >
                <Play className="mr-2 w-5 h-5 text-primary" />
                Live Demo
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '50K+', label: 'Vehicles Tracked' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glow-primary">
              {/* Mock Dashboard */}
              <div className="bg-gradient-to-br from-card to-navy-deep p-6 sm:p-8 rounded-3xl border border-border">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div className="text-sm text-muted-foreground">ApptechHubGPS Dashboard</div>
                </div>

                {/* Map Area */}
                <div className="relative h-48 sm:h-64 rounded-2xl bg-navy-deep overflow-hidden mb-6">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  {/* Simulated map points */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-primary animate-pulse-glow"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent animate-pulse-glow"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/4 left-1/2 w-4 h-4 rounded-full bg-primary animate-pulse-glow"
                  />
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <line x1="33%" y1="25%" x2="75%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4" />
                    <line x1="75%" y1="50%" x2="50%" y2="75%" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4" />
                  </svg>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Active', value: '47', color: 'text-accent' },
                    { label: 'Alerts', value: '3', color: 'text-destructive' },
                    { label: 'Routes', value: '12', color: 'text-primary' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-secondary/50 rounded-xl p-4 text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -left-4 sm:-left-8 top-1/4 card-glass rounded-xl p-4 glow-accent"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Security Alert</div>
                  <div className="text-xs text-muted-foreground">Vehicle secured</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
