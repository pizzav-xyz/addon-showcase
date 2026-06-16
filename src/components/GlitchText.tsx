import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        textShadow: [
          '2px 0 #ff00c1, -2px 0 #00fff9',
          '-2px 0 #ff00c1, 2px 0 #00fff9',
          '2px 0 #ff00c1, -2px 0 #00fff9',
        ],
      }}
      transition={{ duration: 0.1, repeat: Infinity, repeatType: 'mirror' }}
    >
      {text}
    </motion.span>
  );
}
