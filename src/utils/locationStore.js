import { create } from 'zustand';

export const useLocationStore = create((set) => ({
	location: 0,
	setLocation: (id) => set({ location: id }),
}));