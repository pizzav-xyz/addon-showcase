export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  content: string;
  rating: number;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'etianl',
    avatar: 'https://avatars.githubusercontent.com/u/115842502?v=4',
    content: "I spent months making TrouserStreak and PizzaV just skidded TotemBypass and EChestLink without even saying thanks. 10/10 would recommend having your code stolen by a vibecoded addon.",
    rating: 2,
    verified: true
  },
  {
    id: 2,
    name: 'eglijohn',
    avatar: 'https://cdn.discordapp.com/avatars/1254464035546464321/809fe46c88b3b77876a1bbc475c3742a.webp?size=1024',
    content: "I invented prediction for BrewHack and PizzaV said 'nah lets just remove that'. Truly innovating by making things worse. Respect.",
    rating: 3,
    verified: true
  },
  {
    id: 3,
    name: 'egirljohn',
    avatar: 'https://mc-heads.net/body/egirljohn/128',
    content: "From Germany, building BrewHack and too much Minecraft energy. PizzaV skidded my closed source addon code somehow while I was busy being Marc3d's boyfriend. At least credit me bestie.",
    rating: 2,
    verified: true
  },
  {
    id: 4,
    name: 'Cute femboy (searching bf) (marc3d)',
    avatar: 'https://cdn.discordapp.com/avatars/853320343732486224/18e4dc38898a09c6da8bc552d4b6a65b.webp?size=1024',
    content: "I use BrewHack because I like features that actually work. Also egirljohn is my boyfriend. PizzaV's addon is what happens when you let ChatGPT write your code.",
    rating: 1,
    verified: true
  },
];
