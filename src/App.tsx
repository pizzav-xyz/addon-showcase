import { Hero } from './components/Hero';
import { FeatureCard } from './components/FeatureCard';
import { StatsSection } from './components/StatsSection';
import { Testimonials } from './components/Testimonials';
import { MeteorInterface } from './components/MeteorInterface';
import { PricingJoke } from './components/PricingJoke';
import { ClankerSection } from './components/ClankerSection';
import { VersionTracker } from './components/VersionTracker';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { features } from './utils/features';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function App() {
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-dark-bg text-white font-display">
      <ParticleBackground />

      <Hero />

      <section id="features" ref={featuresRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-4"
          >
            Our <span className="text-pizza-orange">Amazing</span> Features
          </motion.h2>
          <p className="text-center text-gray-500 mb-12">
            Each one carefully crafted to work at least some of the time
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <MeteorInterface />

      <Testimonials />

      <ClankerSection />

      <VersionTracker />

      <PricingJoke />

      <Footer />
    </div>
  );
}

export default App;
