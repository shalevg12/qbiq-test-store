<template>
  <div
    class="min-h-[calc(100svh-4rem)] flex items-start justify-center bg-gray-50 px-6 py-12 pt-10"
  >
    <div class="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
      <img
        src="/images/qbiq_Logo.jpg"
        alt="qbiq Logo"
        class="w-32 h-auto mx-auto mb-6"
      />

      <h1 class="text-2xl font-bold text-gray-800 mb-2">About This Project</h1>
      <p class="text-gray-600 mb-6">
        This project was developed by
        <span class="font-semibold text-emerald-600">Shalev Gabay</span>
        as part of the recruitment process for
        <a
          href="https://www.qbiq.ai"
          target="_blank"
          rel="noopener noreferrer"
          class="text-emerald-600 hover:underline font-semibold"
        >
          qbiq
        </a>.
      </p>

      <Button
        label="Visit qbiq Website"
        icon="pi pi-external-link"
        class="bg-emerald-600 hover:bg-emerald-700 border-none text-white font-medium px-4 py-2 rounded-md shadow-sm transition gap-2"
        @click="openWebsite"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const openWebsite = () => {
  window.open("https://www.qbiq.ai", "_blank");
};
</script>
<style scoped>
</style>
