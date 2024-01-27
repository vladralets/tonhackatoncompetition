import { create } from 'zustand';

export const useLocationStore = create((set) => ({
	location: 1,
	setLocation: (id) => set({ location: id }),
}));