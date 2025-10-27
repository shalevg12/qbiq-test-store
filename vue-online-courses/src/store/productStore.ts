import { defineStore } from 'pinia';
import type { Product } from '@/types';

// Define a Pinia store for product data
export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null
  }),
  getters: {
    // Getter to find a product by ID
    getProductById: (state) => {
      return (id: number | string) => state.products.find(p => p.id === id);
    }
  },
  actions: {
    // Fetch product list from the mock JSON data
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        // Fetch the courses data from the public folder
        const response = await fetch('/data/courses.json');
        if (!response.ok) {
          throw new Error(`Failed to load products (status ${response.status})`);
        }
        const data: Product[] = await response.json();
        this.products = data;
      } catch (err:any) {
        console.error('Error fetching products:', err);
        this.error = err.message || 'Failed to load products.';
      } finally {
        this.loading = false;
      }
    }
  }
});
