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

  <!-- WHITE BLOCK – THE STUDIO SECTION (ENGLISH, UPPERCASE SPLIT TITLE) -->
  <section class="bg-white text-black py-12 px-6">

    <div class="max-w-[900px] mx-auto text-center font-body">

      <img
          src="@/assets/studio/studio_main_logo.png"
          alt="Main Logo"
          class="mx-auto mb-6 w-[160px] md:w-[200px] lg:w-[240px]"
      />

      <h2 class="text-4xl font-bold font-oswald leading-tight mb-8 tracking-wide uppercase">
      <span class="block">
        A MODERN, INSPIRING ENVIRONMENT
      </span>
        <span class="block mt-2 text-neutral-800">
        WHERE CREATIVITY MEETS TECHNICAL PRECISION
      </span>
      </h2>

      <p class="text-lg leading-relaxed text-neutral-700 mb-6">
        Whether it’s recording, mixing, or mastering, our goal is to ensure every production sounds as good as it possibly can.
      </p>

      <p class="text-lg leading-relaxed text-neutral-700 mb-6">
        Our studio is designed to feel both welcoming and professional. Every instrument, microphone, acoustic element, and piece of equipment is chosen to help artists and performers deliver their best.
      </p>

      <p class="text-lg leading-relaxed text-neutral-700">
        From capturing a single vocal track to producing a full band arrangement, we provide everything needed for exceptional sound quality.
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
          to="/en/about"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        LEARN MORE
      </NuxtLink>
    </div>
  </section>

</template>

<style scoped>

</style>
