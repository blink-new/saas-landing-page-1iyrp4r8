
import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, BarChart } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed and performance, delivering results in milliseconds.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols to protect your data.'
  },
  {
    icon: Rocket,
    title: 'Easy Deployment',
    description: 'Get up and running in minutes with our streamlined setup process.'
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Detailed insights and metrics to help you make informed decisions.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Powerful features to help you take control of your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-card hover:bg-card/80 p-6 rounded-xl border border-border transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}