import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ModulesScreen } from '../meteor-src/components/meteor/ModulesScreen';

export function MeteorInterface() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} id="interface" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-4"
        >
          <span className="text-pizza-orange">Modules</span>
        </motion.h2>
        <p className="text-center text-gray-500 mb-6">
          Live from{' '}
          <a href="https://github.com/pizzav-xyz/meteor-web" className="text-hack-green hover:underline" target="_blank" rel="noopener noreferrer">
            meteor-web
          </a>{' '}
          <span className="text-xs opacity-50">(git submodule)</span>
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl overflow-hidden shadow-2xl mx-[-1rem] md:mx-[-2rem]"
          style={{ ['--app-accent' as string]: 'oklch(0.81 0.17 76)' }}
        >
          <div className="h-[80vh] min-h-[600px] overflow-hidden">
            <ModulesScreen />
          </div>
        </motion.div>

        <p className="text-center text-gray-600 text-xs mt-4">
          Pulls modules from the meteor-web submodule
        </p>
      </div>
    </section>
  );
}
