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

      <h2 class="font-lato text-[36px] leading-[40px] tracking-[0.2px] uppercase text-[#404040] mb-8">
          <span class="block font-normal">
            A MODERN, INSPIRING ENVIRONMENT
          </span>
                <span class="block mt-2 font-black">
            WHERE CREATIVITY MEETS TECHNICAL PRECISION
          </span>
      </h2>

      <p class="font-inter text-lg leading-relaxed text-[#404040] mb-6 text-left">
        Whether it’s recording, mixing, or mastering, our goal is to ensure that every production sounds its absolute best.
      </p>

      <p class="font-inter text-lg leading-relaxed text-[#404040] mb-6 text-left">
        The studio was designed to be both welcoming and professional. Every instrument, microphone,
        acoustic element and piece of equipment serves one purpose: helping musicians and performers deliver their best.
      </p>

      <p class="font-inter text-lg leading-relaxed text-[#404040] text-left">
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
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-lato font-bold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        LEARN MORE
      </NuxtLink>
    </div>
  </section>

</template>

<style scoped>

</style>
