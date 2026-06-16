export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
  url?: string;
}

export const users: User[] = [
  {
    id: 'etianl',
    name: 'etianl',
    role: 'Creator of TrouserStreak',
    avatar: 'https://avatars.githubusercontent.com/u/115842502?v=4',
    description: 'Made the code we skidded. Thanks for the free features!',
    url: 'https://github.com/etianl'
  },
  {
    id: 'eglijohn',
    name: 'eglijohn',
    role: 'Creator of BrewHack',
    avatar: 'https://cdn.discordapp.com/avatars/1254464035546464321/809fe46c88b3b77876a1bbc475c3742a.webp?size=1024',
    description: 'Invented prediction so we could remove it. True visionary.',
  },
  {
    id: 'cute-femboy',
    name: 'Cute femboy (searching bf)',
    role: 'BrewHack User',
    avatar: 'https://cdn.discordapp.com/avatars/853320343732486224/18e4dc38898a09c6da8bc552d4b6a65b.webp?size=1024',
    description: 'Uses BrewHack. We have nothing else to say.',
  }
];

export const clankers = [
  { name: 'ChatGPT', note: 'free account cycling through codex' },
  { name: 'Claude', note: 'too expensive', crossed: true },
  { name: 'Gemini', note: '' },
  { name: 'Copilot', note: '' },
  { name: 'Codex', note: '' },
  { name: 'OpenCode', note: '' },
  { name: 'Qwen', note: 'chinese' },
  { name: 'MiniMax', note: 'chad for distilling claude' },
  { name: 'MiMo', note: 'by xiami' },
  { name: 'PizzaV', note: 'somehow' },
];
