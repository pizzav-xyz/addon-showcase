import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, BadgeCheck } from 'lucide-react';
import { testimonials } from '../utils/testimonials';

export function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-dark-bg to-card-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-4"
        >
          What Our <span className="text-hack-green">Definitely Real</span> Users Say
        </motion.h2>
        <p className="text-center text-gray-500 mb-12">(totally not made up)</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-bg border border-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-800"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-white">
                      {testimonial.name}
                    </span>
                    {testimonial.verified && (
                      <BadgeCheck size={16} className="text-hack-green" />
                    )}
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < testimonial.rating ? 'text-pizza-orange fill-pizza-orange' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
