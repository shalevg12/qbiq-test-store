<template>
  <!-- wrapper לחיץ עם נגישות -->
  <div
    role="button"
    tabindex="0"
    @click="openDetails"
    @keydown.enter.space.prevent="openDetails"
    class="group outline-none focus:ring-4 focus:ring-emerald-200 rounded-2xl"
  >
    <Card
      class="h-full rounded-2xl overflow-hidden shadow-sm transition-all
             group-hover:shadow-xl group-hover:-translate-y-0.5"
    >
      <template #header>
        <!-- גם התמונה לחיצה (אבל האירוע על ה-wrapper) -->
        <img
          :src="product.thumbnail"
          :alt="product.name"
          class="w-full h-44 object-cover transition-transform group-hover:scale-[1.01]"
          @error="onImgError"
        />
      </template>

      <template #title>
        <h3 class="text-lg font-semibold line-clamp-1">{{ product.name }}</h3>
      </template>

      <template #subtitle>
        <div class="text-sm text-slate-600 mb-4 line-clamp-2">
          {{ product.shortDescription }}
        </div>
      </template>
      
      <template #content> <!-- content & footer (to me it's looks better when they together). -->
      <span class="text-base font-semibold text-emerald-700">$ {{ product.price }}</span>
      <div class="pt-1">
        <Button
          label="View Details"
          icon="pi pi-chevron-right"
          class="p-button-sm"
          @click.stop="openDetails"
        />
      </div>
  </template>

    </Card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Product } from '@/types';

const props = defineProps<{ product: Product }>();
const router = useRouter();

const openDetails = () => {
  router.push({ name: 'ProductDetail', params: { id: props.product.id } });
};

const onImgError = (e: Event) => {
  (e.target as HTMLImageElement).src = '/images/placeholder.png';
};
</script>

<style scoped>
</style>
