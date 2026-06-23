<script setup lang="ts">

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

    <!-- TITLE ONLY -->
    <div class="relative z-10 text-center px-6 inline-flex flex-col items-center">

      <div class="inline-flex flex-col items-center w-auto">

        <div class="h-[2px] bg-white/70 w-full translate-y-[4px]"></div>

        <div class="font-oswald text-5xl sm:text-6xl md:text-8xl my-4 text-center">
          GRENMA STUDIO
        </div>

        <div class="h-[2px] bg-white/70 w-full"></div>

      </div>

      <p class="text-lg sm:text-xl md:text-2xl mt-6 text-gray-300">
        Modern mindset • Professional sound • Inspiring environment
      </p>

    </div>

  </section>

  <!-- WHITE BLOCK – THE STUDIO SECTION (ENGLISH, UPPERCASE SPLIT TITLE) -->
  <section class="bg-white text-black py-20 px-6">

    <div class="max-w-[900px] mx-auto text-center font-body">

      <!-- LOGO ABOVE TITLE -->
      <img
          src="@/assets/studio/studio_main_logo.png"
          alt="Studio logo"
          class="w-40 sm:w-48 md:w-56 mx-auto mb-10"
      />

      <!-- UPPERCASE SPLIT TITLE (same size as previous THE STUDIO) -->
      <h2 class="text-4xl font-bold font-oswald leading-tight mb-10 tracking-wide uppercase">
  <span class="block">
    A MODERN, INSPIRING ENVIRONMENT
  </span>
        <span class="block mt-2 text-neutral-800">
    WHERE CREATIVITY MEETS TECHNICAL PRECISION
  </span>
      </h2>


      <!-- BODY TEXT -->
      <p class="text-lg leading-relaxed text-neutral-700 mb-6">
        Whether it's recording, mixing, or mastering, our goal is to ensure every production sounds its absolute best.
      </p>

      <p class="text-lg leading-relaxed text-neutral-700 mb-6">
        The studio was designed to feel both professional and comfortable. Every instrument, microphone,
        acoustic element, and piece of equipment is chosen to help artists and performers deliver their best.
      </p>

      <p class="text-lg leading-relaxed text-neutral-700">
        From a single vocal track to a full band production, we provide everything needed for exceptional sound quality.
      </p>

    </div>

  </section>




  <!-- PARALLAX CTA BLOCK -->
  <section
      class="relative w-full h-[45vh] bg-fixed bg-cover bg-center flex items-center justify-center"
      style="background-image: url('/studio_main.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          to="/en/about"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
               transition-all duration-300 hover:bg-[#4fbb9b] hover:border-[#4fbb9b]"
      >
        Learn more
      </NuxtLink>
    </div>
  </section>

</template>

<style scoped>

</style>
