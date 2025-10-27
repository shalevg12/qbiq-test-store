<template>
  <div class="min-h-screen bg-white">
    <div class="mx-auto max-w-5xl p-4">
      <Button icon="pi pi-arrow-left" label="Back" class="p-button-text mb-4" @click="goBack" />

      <div v-if="product">
        <div class="flex flex-col md:flex-row md:space-x-8">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full md:w-[520px] aspect-video object-cover rounded-xl shadow"
            @error="onImgError"
          />
          <div class="mt-4 md:mt-0">
            <h2 class="text-3xl font-extrabold tracking-tight mb-2">{{ product.name }}</h2>
            <p class="text-2xl text-emerald-700 font-semibold mb-2">$ {{ product.price }}</p>
            <p class="text-sm text-slate-500 mb-4"><em>Category: {{ product.category }}</em></p>
            <p class="text-slate-700 leading-relaxed">{{ product.longDescription }}</p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-xl font-semibold mb-3">Reviews</h3>
          <div v-if="product.reviews.length">
            <div
              v-for="review in product.reviews"
              :key="review.id"
              class="mb-4 pb-4 border-b border-slate-200"
            >
              <p class="font-medium">{{ review.author }}</p>
              <div class="text-amber-500 my-1">
                <i v-for="n in review.rating" :key="review.id + 's' + n" class="pi pi-star-fill mr-1"></i>
                <i v-for="n in 5 - review.rating" :key="review.id + 'e' + n" class="pi pi-star mr-1 text-slate-300"></i>
              </div>
              <p class="text-slate-700 text-sm">{{ review.comment }}</p>
            </div>
          </div>
          <div v-else class="text-slate-600">No reviews yet.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { useProductStore } from '@/store/productStore';

interface RouteProps { id: number | string }
const props = defineProps<RouteProps>();

const route = useRoute();
const router = useRouter();
const toast = useToast();
const productStore = useProductStore();

const product = computed(() => productStore.getProductById(props.id));

onMounted(async () => {
  if (!product.value) {
    if (!productStore.products.length) await productStore.fetchProducts();
    if (!product.value) {
      toast.add({ severity: 'error', summary: 'Not Found', detail: 'Product not found.', life: 3000 });
      router.replace({ name: 'ProductList' });
    }
  }
});

const goBack = () => router.back();
const onImgError = (e: Event) => {
  (e.target as HTMLImageElement).src = '/images/placeholder.png';
};
</script>
