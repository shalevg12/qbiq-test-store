<template>
  <header
    class="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200"
  >
    <div
      class="max-w-6xl mx-auto flex items-center justify-between p-4"
    >
      <!-- לוגו / שם -->
      <div
        class="flex items-center gap-2 cursor-pointer select-none"
        @click="goHome"
      >
<div class="flex items-center gap-2">
  <img
    src="/images/Logo_qbiq.png"
    alt="qbiq Logo"
    class="h-10 w-auto object-contain"
  />
  <h1 class="text-xl font-bold text-slate-800">qbiq Courses</h1>
</div>

      </div>

      <!-- ניווט -->
      <nav class="flex gap-4 text-slate-600">
        <button
          class="hover:text-emerald-600 transition-colors"
          @click="goHome"
        >
          Home
        </button>
        <button
          class="hover:text-emerald-600 transition-colors"
          @click="goAbout"
        >
          About
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const goHome = () => router.push('/');
const goAbout = () => router.push('/about');
</script>
