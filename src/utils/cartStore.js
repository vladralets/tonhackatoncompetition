import {create} from "zustand";

export const useCartStore = create((set) => ({
  cart: {
    products: [],
    totalPrice: 0,
  },

  addToCart: (product, count) => {
    set((state) => {
      const existingProduct = state.cart.products.find((p) => p.id === product.id);

      if (existingProduct) {
        return {
          cart: {
            products: state.cart.products.map((p) =>
              p.id === product.id ? { ...p, count: p.count + count } : p
            ),
            totalPrice: state.cart.totalPrice + product.price * count,
          },
        };
      } else {
        return {
          cart: {
            products: [...state.cart.products, { ...product, count }],
            totalPrice: state.cart.totalPrice + product.price * count,
          },
        };
      }
    });
  },

  removeFromCart: (product) => {
    set((state) => ({
      cart: {
        products: state.cart.products.filter((p) => p.id !== product.id),
        totalPrice: state.cart.totalPrice - product.price * product.count,
      },
    }));
  },
}));
