<script setup lang="ts">

</script>

<template>
  <section class="relative h-screen w-full bg-black text-white flex items-center justify-center">

    <!-- Háttérkép -->
    <img
        src="/studio_main.jpg"
        alt="Studio background"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
    />

    <!-- Sötét overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Ultra‑micro grid overlay -->
    <div
        class="absolute inset-0 pointer-events-none opacity-45"
        style="
        background-image:
          linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px);
        background-size: 5px 5px;
      "
    ></div>

    <!-- Tartalom -->
    <div class="relative z-10 text-center px-6 inline-flex flex-col items-center">

      <!-- Cím + csíkok -->
      <div class="inline-flex flex-col items-center w-auto">

        <!-- Felső csík -->
        <div class="h-[2px] bg-white/70 w-full translate-y-[4px]"></div>

        <!-- Cím (mobilon kisebb, desktopon nagy) -->
        <div class="font-oswald text-5xl sm:text-6xl md:text-8xl my-4 text-center">
          GRENMA STUDIO
        </div>


        <!-- Alsó csík -->
        <div class="h-[2px] bg-white/70 w-full"></div>

      </div>

      <!-- Alcím -->
      <p class="text-lg sm:text-xl md:text-2xl mb-8 mt-6 text-gray-300">
        Modern felszerelés • Profi hangzás • Inspiráló környezet
      </p>

      <!-- Gomb -->
      <NuxtLink
          to="/contact"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
               transition-all duration-300 hover:bg-[#4fbb9b] hover:border-[#4fbb9b]"
      >
        Foglalás
      </NuxtLink>

    </div>

  </section>
</template>

<style scoped>

</style>
