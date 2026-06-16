import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Server, Clock } from 'lucide-react';

const MANIFEST_URL = 'https://piston-meta.mojang.com/mc/game/version_manifest_v2.json';
const ADDON_VERSION = '1.21.1';

interface Version {
  id: string;
  type: string;
  releaseTime: string;
}

export function VersionTracker() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [releases, setReleases] = useState<Version[]>([]);
  const [latestRelease, setLatestRelease] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(MANIFEST_URL)
      .then(r => r.json())
      .then(data => {
        const all: Version[] = data.versions;
        const onlyReleases = all.filter((v: Version) => v.type === 'release');
        setReleases(onlyReleases);
        setLatestRelease(data.latest.release);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const addonIdx = releases.findIndex(v => v.id === ADDON_VERSION);
  const latestIdx = releases.findIndex(v => v.id === latestRelease);
  const versionsBehind = addonIdx >= 0 && latestIdx >= 0 ? addonIdx - latestIdx : 0;
  const missedVersions = addonIdx >= 0 ? releases.slice(latestIdx, addonIdx) : [];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-card-bg to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-4"
        >
          Version <span className="text-pizza-orange">Tracker</span>
        </motion.h2>
        <p className="text-center text-gray-500 mb-12">
          We are very behind and we know it
        </p>

        {loading ? (
          <div className="text-center text-gray-500">Loading from Mojang API...</div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-dark-bg border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-sm text-gray-500 mb-2">Addon targets</div>
                <div className="text-3xl font-display font-bold text-pizza-orange">{ADDON_VERSION}</div>
              </div>
              <div className="bg-dark-bg border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-sm text-gray-500 mb-2">Latest release</div>
                <div className="text-3xl font-display font-bold text-hack-green">{latestRelease}</div>
              </div>
              <div className="bg-dark-bg border border-pizza-red/50 rounded-xl p-6 text-center">
                <div className="text-sm text-gray-500 mb-2 flex items-center justify-center gap-1">
                  <AlertTriangle size={14} className="text-pizza-red" />
                  Versions behind
                </div>
                <div className="text-3xl font-display font-bold text-pizza-red">{versionsBehind}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-dark-bg border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                <Clock size={18} className="text-pizza-orange" />
                Versions we missed
              </h3>
              <div className="flex flex-wrap gap-2">
                {missedVersions.map((v) => (
                  <span
                    key={v.id}
                    className="px-3 py-1 text-sm font-mono rounded-full border border-gray-700 text-gray-400 bg-gray-900"
                  >
                    {v.id}
                  </span>
                ))}
              </div>
              {missedVersions.length > 0 && (
                <p className="text-gray-600 text-sm mt-4 italic">
                  {missedVersions.length} releases since we updated. Blame the clankers.
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-dark-bg border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                <Server size={18} className="text-hack-green" />
                Server compatibility
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-sm text-gray-500">Latest servers</div>
                  <div className="text-lg font-mono text-pizza-red mt-1">{latestRelease}</div>
                </div>
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-sm text-gray-500">This addon</div>
                  <div className="text-lg font-mono text-pizza-orange mt-1">{ADDON_VERSION}</div>
                </div>
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-sm text-gray-500">Servers you can join</div>
                  <div className="text-lg font-mono text-pizza-red mt-1">none of them</div>
                </div>
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="text-sm text-gray-500">Realistic outlook</div>
                  <div className="text-lg font-mono text-hack-green mt-1">skill issue</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 text-center italic">
                Every server running {latestRelease} will reject you. Update when?
              </p>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
