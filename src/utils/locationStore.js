import { create } from 'zustand';

export const useLocationStore = create((set) => ({
	location: 3,
	setLocation: (id) => set({ location: id }),
}));