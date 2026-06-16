import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, WifiOff } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface GlitchPopupProps {
  open: boolean;
  onClose: () => void;
}

export function GlitchPopup({ open, onClose }: GlitchPopupProps) {
  const [glitchPhase, setGlitchPhase] = useState(0);

  useEffect(() => {
    if (!open) { setGlitchPhase(0); return; }
    const timer = setInterval(() => {
      setGlitchPhase(p => (p + 1) % 4);
    }, 150);
    const stop = setTimeout(() => clearInterval(timer), 2000);
    return () => { clearInterval(timer); clearTimeout(stop); };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Dark backdrop */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }}
          />

          {/* Floating error fragments */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [Math.random() * 400 - 200, Math.random() * 600 - 300],
                y: [Math.random() * 400 - 200, Math.random() * 600 - 300],
                rotate: [0, 360],
                opacity: [0.8, 0],
              }}
              transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.2 }}
              className="absolute text-pizza-red/40 font-mono text-xs pointer-events-none"
            >
              {['ERR_CONNECTION_REFUSED', '503', 'FATAL', 'SEGFAULT', 'NULL_REF', 'OOM'][i]}
            </motion.div>
          ))}

          {/* Main popup */}
          <motion.div
            animate={{
              x: glitchPhase % 2 === 0 ? [0, -3, 5, -2, 0] : [0, 2, -4, 3, 0],
              skewX: glitchPhase % 2 === 0 ? [0, -1, 2, -1, 0] : [0, 1, -2, 1, 0],
            }}
            transition={{ duration: 0.15, repeat: Infinity }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#0a0a0f] border border-pizza-red/50 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"
            style={{
              boxShadow: '0 0 30px rgba(230, 57, 70, 0.3), 0 0 60px rgba(230, 57, 70, 0.1)',
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              {/* Glitchy icon */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 0.9, 1.1, 1],
                  rotate: [0, -5, 5, -3, 0],
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="mb-4"
              >
                <WifiOff size={48} className="text-pizza-red mx-auto" />
              </motion.div>

              {/* Glitchy title */}
              <motion.h3
                animate={{
                  textShadow: [
                    '2px 0 #ff00c1, -2px 0 #00fff9',
                    '-2px 0 #ff00c1, 2px 0 #00fff9',
                    '0px 0 #ff00c1, 0px 0 #00fff9',
                    '3px 0 #ff00c1, -1px 0 #00fff9',
                    '2px 0 #ff00c1, -2px 0 #00fff9',
                  ],
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
                className="text-2xl font-display font-bold text-pizza-red mb-4"
              >
                {'DOWNLOAD'.split('').map((c, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      opacity: [1, 0, 1],
                      y: [0, Math.random() * 4 - 2, 0],
                    }}
                    transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.05 }}
                  >
                    {c}
                  </motion.span>
                ))}
              </motion.h3>

              <div className="h-8 mb-4">
                <TypeAnimation
                  sequence={[
                    'is down right now',
                    1500,
                    '404 not found',
                    1500,
                    'server caught fire',
                    1500,
                    'try again never',
                    1500,
                  ]}
                  wrapper="span"
                  speed={80}
                  className="text-lg text-gray-400 font-mono"
                  repeat={Infinity}
                />
              </div>

              {/* Fake progress bar */}
              <div className="w-full h-3 bg-gray-900 rounded-full overflow-hidden mb-4 border border-gray-800">
                <motion.div
                  animate={{
                    width: ['0%', '15%', '8%', '22%', '3%', '45%', '12%', '0%'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-red rounded-full"
                />
              </div>

              <motion.div
                animate={{ opacity: [1, 0.3, 1, 0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="flex items-center justify-center gap-2 text-sm text-pizza-red"
              >
                <AlertTriangle size={14} />
                <span className="font-mono">CONTACTING MOTHERSHIP... FAILED</span>
                <AlertTriangle size={14} />
              </motion.div>

              <p className="text-gray-600 text-xs mt-4 font-mono">
                [ error code: PIZZA_404_NO_SLICE ]
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
