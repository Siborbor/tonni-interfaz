import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  selectedProduct: null,
  setProducts: (products) => set({ products }),
  getProductById: (id) => get().products.find((product) => product.id === id),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

export default useProductStore;
