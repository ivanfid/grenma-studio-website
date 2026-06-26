<script setup>
const config = useRuntimeConfig()
</script>


<template>

  <!-- HERO SECTION -->
  <section class="relative h-screen w-full bg-black text-white flex items-center justify-center">

    <!-- Background image -->
    <img
        src="/studio_main.jpg"
        alt="Studio background"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
    />

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Micro‑grid overlay -->
    <div
        class="absolute inset-0 pointer-events-none opacity-45"
        style="
        background-image:
          linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px);
        background-size: 5px 5px;
      "
    ></div>

    <section
        class="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
        :style="{ backgroundImage: `url(${config.app.baseURL}studio_main_bg.jpg)` }"
    >

    </section>


  </section>


  <!-- WHITE BLOCK – THE STUDIO SECTION -->
  <section class="bg-white text-black py-12 px-6">

    <div class="max-w-[900px] mx-auto text-center font-body">

      <img
          src="@/assets/studio/studio_main_logo.png"
          alt="Main Logo"
          class="mx-auto mb-6 w-[160px] md:w-[200px] lg:w-[240px]"
      />

      <h2 class="text-4xl font-bold font-oswald leading-tight mb-8 tracking-wide uppercase">
      <span class="block">
        EGY MODERN, INSPIRÁLÓ KÖRNYEZET
      </span>
        <span class="block mt-2 text-neutral-800">
        AHOL A KREATIVITÁS TALÁLKOZIK A TECHNIKAI PRECIZITÁSSAL
      </span>
      </h2>

      <p class="text-lg leading-relaxed text-neutral-700 mb-6">
        Akár felvételről, keverésről vagy masterelésről van szó, célunk, hogy minden produkció a lehető legjobb minőségben szólaljon meg.
      </p>

      <p class="text-lg leading-relaxed text-neutral-700 mb-6">
        A stúdiót úgy alakítottuk ki, hogy egyszerre legyen otthonos és professzionális. A hangszerek, mikrofonok,
        akusztikai elemek és eszközök mind azt szolgálják, hogy a zenészek és előadók a legjobb formájukat hozhassák.
      </p>

      <p class="text-lg leading-relaxed text-neutral-700">
        Legyen szó egyetlen vokál sáv rögzítéséről vagy egy teljes zenekari produkcióról, nálunk minden adott a kiváló hangzáshoz.
      </p>

    </div>

  </section>



  <!-- PARALLAX CTA BLOCK -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] bg-cover bg-center flex items-center justify-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_main.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/about' : '/about'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
           transition-all duration-300 hover:bg-brand hover:border-brand"
      >
        {{ $route.path.startsWith('/en') ? 'Learn more' : 'Tudj meg többet' }}
      </NuxtLink>
    </div>

  </section>

</template>

<style scoped>

</style>
