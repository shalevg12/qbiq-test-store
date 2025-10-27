<template>
  <div class="min-h-screen bg-slate-50">
    <div class="mx-auto max-w-6xl p-4">
      <h1 class="text-3xl font-extrabold tracking-tight mb-6 text-center">
        Online Courses Store
      </h1>

      <div class="mb-6 flex justify-center">
        <InputText
          v-model="searchTerm"
          placeholder="Search courses..."
          class="w-full md:w-1/2 p-inputtext-sm"
        />
      </div>

      <div v-if="productStore.loading" class="text-gray-600 text-center">Loading courses...</div>
      <div v-else-if="productStore.error" class="text-red-600 text-center">
        {{ productStore.error }}
      </div>

      <div v-else>
        <div v-if="filteredProducts.length === 0" class="text-gray-700 text-center">
          No courses found.
        </div>

        <div v-else class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useProductStore } from '@/store/productStore';
import ProductCard from '@/components/ProductCard.vue';

const productStore = useProductStore();
const toast = useToast();

const searchTerm = ref('');

const filteredProducts = computed(() => {
  const term = searchTerm.value.toLowerCase();
  return productStore.products.filter((p) => p.name.toLowerCase().includes(term));
});

onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.fetchProducts();
    if (productStore.error) {
      toast.add({ severity: 'error', summary: 'Error', detail: productStore.error, life: 3000 });
    }
  }
});
</script>
