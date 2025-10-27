<template>
  <footer class="mt-12 border-t border-slate-200 bg-white">
    <div class="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
      <p class="text-sm text-slate-600">
        © {{ year }} qbiq Courses. All rights reserved to Shalev Gabay.
      </p>

      <nav class="flex items-center gap-4 text-sm text-slate-600">
        <RouterLink to="/" class="hover:text-emerald-600 transition-colors">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-emerald-600 transition-colors">About</RouterLink>
        <a
          href="#"
          class="hover:text-emerald-600 transition-colors"
          @click.prevent="scrollTop"
        >
          Back to top ↑
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
