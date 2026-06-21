<script setup lang="ts">

</script>

<template>
  <section class="relative h-screen w-full bg-black text-white flex items-center justify-center">

    <!-- Background image -->
    <img
        src="/studio_main.jpg"
        alt="Studio background"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
    />

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6">
      <div class="font-oswald text-5xl">
        Grenma Recording Studio
      </div>

      <p class="text-xl md:text-2xl mb-8 text-gray-300">
        Modern equipment • Professional sound • Inspiring environment
      </p>

      <NuxtLink
          to="/en/contact"
          class="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold"
      >
        Book Now
      </NuxtLink>
    </div>

  </section>
</template>

<style scoped>

</style>
