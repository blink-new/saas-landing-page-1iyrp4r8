
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams just getting started',
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'Best for growing businesses',
    features: [
      'Up to 20 team members',
      '20GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'Custom integrations',
      'SLA guarantee'
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative bg-card rounded-xl border ${
                tier.popular ? 'border-primary' : 'border-border'
              } p-8`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <div className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Popular
                  </div>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg ${
                tier.popular
                  ? 'bg-primary text-primary-foreground hover:opacity-90'
                  : 'bg-secondary hover:bg-secondary/80'
              } transition-colors`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}