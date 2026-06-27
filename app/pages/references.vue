<script setup>
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
</script>

<template>

  <!-- HERO WRAPPER -->
  <div class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]">

    <!-- HERO BACKGROUND -->
    <div
        class="w-full h-full bg-cover bg-center md:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}studio_references_3.jpg)` }"
    ></div>

    <!-- Micro-grid overlay (csak a hero-ra!) -->
    <div
        class="absolute inset-0 pointer-events-none opacity-60"
        style="
      background-image:
        linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
      background-size: 5px 5px;
    "
    ></div>
  </div>

  <!-- WHITE BLOCK – VIDEOS -->
  <div class="bg-white text-black py-16 md:py-20">

    <!-- TITLE -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">REFERENCIÁK</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        Néhány videó, amelyek nálunk készültek vagy a stúdióhoz kapcsolódnak.
      </p>
    </section>

    <!-- VIDEO GRID -->
    <section class="px-6 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">

      <!-- VIDEO 1 -->
      <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/2oDzGbp0duY?si=RBR-or3x2PN_CNWh&start=11"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>

      <!-- VIDEO 2 -->
      <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/XjHfhxRI3PM?si=nVhEhYo3ffPXIrpj&start=11"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>

      <!-- VIDEO 3 -->
      <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/oTCn_e62ck8?si=BWx6-9ef75Q-cSGI&start=152"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>

      <!-- VIDEO 4 -->
      <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/lAFssMaouFg?si=zAeCe__ltHafNBFq&start=152"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>

    </section>

  </div>

  <!-- BOTTOM PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] bg-cover bg-center flex items-center justify-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_references_2.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/pricing' : '/pricing'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
               transition-all duration-300 hover:bg-brand/100 hover:border-brand/100"
      >
        ÁRAK MEGTEKINTÉSE
      </NuxtLink>
    </div>
  </section>

</template>
