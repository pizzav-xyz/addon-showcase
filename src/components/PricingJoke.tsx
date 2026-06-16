import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Zap, Crown, Skull } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    icon: Skull,
    color: 'gray',
    features: [
      { text: 'Mace MultiKill (50% uptime)', included: true },
      { text: 'Infinite Reach (25% uptime)', included: true },
      { text: 'TotemBypass', included: false },
      { text: 'EChestLink', included: false },
      { text: 'Customer Support', included: false },
    ],
  },
  {
    name: 'Skidded',
    price: '$499.99',
    icon: Zap,
    color: 'pizza-orange',
    popular: true,
    features: [
      { text: 'Mace MultiKill (50% uptime)', included: true },
      { text: 'Infinite Reach (25% uptime)', included: true },
      { text: 'TotemBypass (skidded)', included: true },
      { text: 'EChestLink (skidded)', included: true },
      { text: 'Customer Support (maybe)', included: true },
    ],
  },
  {
    name: 'Premium',
    price: '$9,999',
    icon: Crown,
    color: 'hack-purple',
    features: [
      { text: 'Mace MultiKill (51% uptime)', included: true },
      { text: 'Infinite Reach (26% uptime)', included: true },
      { text: 'TotemBypass (still skidded)', included: true },
      { text: 'EChestLink (still skidded)', included: true },
      { text: 'Customer Support (we try)', included: true },
    ],
  },
];

export function PricingJoke() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-card-bg to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-4"
        >
          <span className="text-pizza-orange">Pricing</span> (not a scam)
        </motion.h2>
        <p className="text-center text-gray-500 mb-12">
          Too shit to release, but here are the prices anyway
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-dark-bg border rounded-xl p-6 ${
                  plan.popular ? 'border-pizza-orange shadow-lg shadow-pizza-orange/20' : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-pizza-orange text-white text-xs font-bold rounded-full">
                    MOST SKIDDED
                  </div>
                )}

                <div className="text-center mb-6">
                  <Icon size={32} className={`mx-auto mb-3 text-${plan.color}`} />
                  <h3 className="text-xl font-display font-bold text-white">{plan.name}</h3>
                  <div className="text-3xl font-display font-bold text-white mt-2">
                    {plan.price}
                    <span className="text-sm text-gray-500">/ forever</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check size={16} className="text-hack-green flex-shrink-0" />
                      ) : (
                        <X size={16} className="text-pizza-red flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-6 py-3 rounded-lg font-display font-bold transition-colors ${
                    plan.popular
                      ? 'bg-pizza-orange text-white hover:bg-pizza-red'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {plan.popular ? 'Get Skidded' : 'Choose Plan'}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
