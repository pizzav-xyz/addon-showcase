import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Check, Copy } from 'lucide-react';
import type { Feature } from '../utils/features';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative bg-card-bg border border-gray-800 rounded-xl p-6 overflow-hidden group"
    >
      {feature.stolen && (
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-pizza-red/20 rounded text-xs text-pizza-red">
          <Copy size={12} />
          Skidded from {feature.stolenFrom}
        </div>
      )}

      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-pizza-orange/10 rounded-lg">
          <Icon size={24} className="text-pizza-orange" />
        </div>
        <h3 className="text-xl font-display font-bold text-white">{feature.name}</h3>
      </div>

      <p className="text-gray-400 mb-4">{feature.description}</p>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">Reliability</span>
          <span className={`font-mono ${feature.reliability < 50 ? 'text-pizza-red' : 'text-hack-green'}`}>
            {feature.reliability}%
          </span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${feature.reliability}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            className={`h-full ${feature.reliability < 50 ? 'bg-pizza-red' : 'bg-hack-green'}`}
          />
        </div>
      </div>

      <p className="text-sm text-hack-purple font-mono italic">"{feature.tagline}"</p>

      <div className="absolute inset-0 bg-gradient-to-t from-pizza-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
