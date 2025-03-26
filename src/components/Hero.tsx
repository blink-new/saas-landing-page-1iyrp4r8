
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Make Your SaaS Product
              <span className="gradient-text block">Stand Out</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Transform your business with our powerful platform. Built for modern teams who demand excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 rounded-full border border-border hover:bg-secondary transition-colors">
              Book a Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative w-full max-w-4xl mx-auto mt-8"
          >
            <div className="aspect-video rounded-xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <div className="w-full h-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 flex items-center justify-center text-muted-foreground">
                Product Demo
              </div>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}