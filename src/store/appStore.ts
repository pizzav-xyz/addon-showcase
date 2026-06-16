import { create } from 'zustand';

interface AppState {
  activeFeature: string | null;
  setActiveFeature: (id: string | null) => void;
  showConfetti: boolean;
  setShowConfetti: (show: boolean) => void;
  clickCount: number;
  incrementClick: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeFeature: null,
  setActiveFeature: (id) => set({ activeFeature: id }),
  showConfetti: false,
  setShowConfetti: (show) => set({ showConfetti: show }),
  clickCount: 0,
  incrementClick: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}));
