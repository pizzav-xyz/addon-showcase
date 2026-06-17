import { Swords, Shield, Target, Link, Brain, Bell, Hammer, Shovel } from 'lucide-react';

export interface Feature {
  id: string;
  name: string;
  description: string;
  reliability: number;
  icon: typeof Swords;
  stolen: boolean;
  stolenFrom?: string;
  tagline: string;
}

export const features: Feature[] = [
  {
    id: 'mace-multikill',
    name: 'Mace MultiKill',
    description: 'Kill multiple entities per tick with this totally not broken module. Works when it feels like it.',
    reliability: 50,
    icon: Swords,
    stolen: false,
    tagline: 'Why kill one when you can kill none?'
  },
  {
    id: 'totembypass',
    name: 'TotemBypass',
    description: 'Bypass totems of undying. Skidded straight from TrouserStreak with zero credit given.',
    reliability: 50,
    icon: Shield,
    stolen: true,
    stolenFrom: 'TrouserStreak',
    tagline: 'Totems hate this one weird trick!'
  },
  {
    id: 'infinite-reach',
    name: 'Infinite Reach',
    description: 'Hit players from across the map! Works 25% of the time. The other 75% you just look stupid.',
    reliability: 25,
    icon: Target,
    stolen: false,
    tagline: 'Reach for the stars, hit the ground'
  },
  {
    id: 'echestlink',
    name: 'EChestLink',
    description: 'Access ender chests from anywhere. Also skidded from TrouserStreak because why not.',
    reliability: 50,
    icon: Link,
    stolen: true,
    stolenFrom: 'TrouserStreak',
    tagline: 'Your echest, our echest'
  },
  {
    id: 'predictionless',
    name: 'Predictionless',
    description: 'No prediction needed! Disables hacks automatically when your enemy moves, because standing still is the real skill issue. Unlike shitty BrewHack, we gave up on prediction entirely.',
    reliability: 50,
    icon: Brain,
    stolen: false,
    tagline: 'Why predict when you can just miss?'
  },
  {
    id: 'notifier-plus',
    name: 'Notifier+',
    description: 'Notifies you when a scary person enters your visual range. Finally, anxiety as a feature.',
    reliability: 50,
    icon: Bell,
    stolen: false,
    tagline: 'Your paranoia, automated'
  },
  {
    id: 'bedrockbreaker',
    name: 'Bedrockbreaker',
    description: 'Fully autonomous bedrock breaking. It doesn\'t break bedrock. It doesn\'t even break a sweat. It does nothing.',
    reliability: 0,
    icon: Hammer,
    stolen: false,
    tagline: 'Works on bedrock (the block, not your patience)'
  },
  {
    id: 'inf-nuker',
    name: 'Inf Nuker',
    description: 'Breaks blocks around you. Occasionally decides to mine bitcoin instead. We don\'t question it.',
    reliability: 30,
    icon: Shovel,
    stolen: false,
    tagline: 'Free hash rate included'
  }
];
