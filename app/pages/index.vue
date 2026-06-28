<script setup>
const config = useRuntimeConfig()
</script>


<template>

  <!-- HERO SECTION -->
  <section class="relative h-screen w-full bg-black text-white flex items-center justify-center">

    <!-- Background video -->
    <video
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover opacity-60"
    >
      <!-- később majd ezt tedd első helyre -->
      <source src="/lowres_video.mp4" type="video/mp4" />
    </video>

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

  </section>



  <!-- WHITE BLOCK – THE STUDIO SECTION -->
  <section class="bg-white text-black py-12 px-6">

    <div class="max-w-[900px] mx-auto text-center font-body">

      <img
          src="@/assets/studio/studio_main_logo.png"
          alt="Main Logo"
          class="mx-auto mb-6 w-[160px] md:w-[200px] lg:w-[240px]"
      />

      <h2>
      <span>
        EGY MODERN, INSPIRÁLÓ KÖRNYEZET
      </span>
        <span>
        AHOL A KREATIVITÁS TALÁLKOZIK A TECHNIKAI PRECIZITÁSSAL
      </span>
      </h2>

      <p>
        Akár felvételről, keverésről vagy masterelésről van szó, célunk, hogy minden produkció a lehető legjobb minőségben szólaljon meg.
      </p>

      <p>
        A stúdiót úgy alakítottuk ki, hogy egyszerre legyen otthonos és professzionális. A hangszerek, mikrofonok,
        akusztikai elemek és eszközök mind azt szolgálják, hogy a zenészek és előadók a legjobb formájukat hozhassák.
      </p>

      <p>
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
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-lato font-bold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"

      >
        {{ $route.path.startsWith('/en') ? 'LEARN MORE' : 'TUDJ MEG TÖBBET' }}
      </NuxtLink>
    </div>

  </section>

</template>

<style scoped>

</style>
