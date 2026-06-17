import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronDown } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { GlitchPopup } from './GlitchPopup';

export function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-6"
        >
          <span className="text-6xl md:text-8xl font-display font-bold">
            <GlitchText text="PizzaV's" className="text-pizza-orange" />
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
          Meteor Client Addon
        </h1>

        <div className="h-16 mb-8">
          <TypeAnimation
            sequence={[
              'Works 50% of the time',
              2000,
              'Skidded from TrouserStreak',
              2000,
              'Unlike BrewHack',
              2000,
              'Infinite Reach (25% uptime)',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl md:text-2xl text-hack-green font-mono"
            repeat={Infinity}
          />
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          The most <span className="text-pizza-red line-through">unreliable</span>{' '}
          <span className="text-hack-green">innovative</span> Meteor Client addon
          with features that work <span className="text-pizza-orange">sometimes</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.preventDefault(); setShowPopup(true); }}
            className="px-8 py-4 bg-pizza-orange text-white font-display font-bold rounded-lg
                       hover:bg-pizza-red transition-colors flex items-center justify-center gap-2
                       shadow-lg shadow-pizza-orange/30 cursor-pointer"
          >
            <Download size={20} />
            Download
          </motion.a>

          <motion.a
            href="#interface"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-hack-green text-hack-green font-display font-bold
                       rounded-lg hover:bg-hack-green/10 transition-colors"
          >
            See the "Interface"
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ChevronDown size={32} className="text-gray-500" />
      </motion.div>

      <GlitchPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
}
