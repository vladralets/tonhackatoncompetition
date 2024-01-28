import { create } from 'zustand';

export const useCartStore = create((set) => ({
	cart: {
		products: [1],
		totalPrice: 0,
	},
	addToCart: (product) =>
		set((state) => ({
			cart: {
				products: [...state.cart.products, product],
				totalPrice: state.cart.totalPrice + product.price,
			},
		})),
	removeFromCart: (product) =>
		set((state) => ({
			cart: {
				products: state.cart.products.filter((p) => p.id !== product.id),
				totalPrice: state.cart.totalPrice - product.price,
			},
		})),
}));