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
          
          {/* Dashboard Container */}
          <div className="relative card-glass rounded-3xl p-4 sm:p-6 lg:p-8 glow-border">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <span className="text-muted-foreground text-sm hidden sm:block">Fleet Dashboard</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="hidden sm:block">Live</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3">
                {[Map, BarChart3, Bell, Users, Settings].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`
                      p-3 rounded-xl transition-colors cursor-pointer
                      ${index === 0 ? 'bg-primary/20 text-primary' : 'bg-secondary/50 text-muted-foreground hover:text-foreground'}
                    `}
                  >
                    <Icon className="w-5 h-5 mx-auto" />
                  </motion.div>
                ))}
              </div>

              {/* Main Map Area */}
              <div className="col-span-12 lg:col-span-7">
                <div className="relative h-64 lg:h-80 rounded-2xl bg-navy-deep overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  
                  {/* Simulated map elements */}
                  <div className="absolute inset-4">
                    {/* Roads */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path
                        d="M 20 100 Q 100 50 180 100 T 320 80"
                        fill="none"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                      />
                      <path
                        d="M 50 180 Q 150 150 250 200"
                        fill="none"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                      />
                    </svg>

                    {/* Vehicle markers */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                      className="absolute top-1/2 right-1/3 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent-foreground" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                      className="absolute bottom-1/3 left-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute top-4 right-4 card-glass rounded-xl p-3">
                    <div className="text-xs text-muted-foreground mb-1">Active Vehicles</div>
                    <div className="text-2xl font-bold text-foreground">47</div>
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="col-span-12 lg:col-span-3 space-y-4">
                {[
                  { label: 'Fleet Health', value: '98%', icon: Shield, trend: '+2%', color: 'accent' },
                  { label: 'Total Distance', value: '24.5K', icon: TrendingUp, trend: '+8%', color: 'primary' },
                  { label: 'Fuel Saved', value: '15%', icon: Zap, trend: '+3%', color: 'accent' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-secondary/30 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                      <span className="text-xs text-accent">{stat.trend}</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
