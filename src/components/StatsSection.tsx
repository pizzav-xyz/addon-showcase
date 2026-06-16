import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { label: 'Features That Work', value: 25, suffix: '%', color: 'text-pizza-orange' },
  { label: 'Code Skidded', value: 40, suffix: '%', color: 'text-pizza-red' },
  { label: 'BrewHack Users Triggered', value: 100, suffix: '%', color: 'text-hack-green' },
  { label: 'Credits Given to TrouserStreak', value: 0, suffix: '%', color: 'text-hack-purple' },
];

export function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12"
        >
          The Numbers <span className="text-pizza-orange">Don't Lie</span>
          <span className="text-gray-500 text-lg block mt-2">(but we do)</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-display font-bold ${stat.color} mb-2`}>
                {inView && <CountUp end={stat.value} duration={2} />}{stat.suffix}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
