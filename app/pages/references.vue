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
    <div class="absolute inset-0 bg-black/60"></div>
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
  <div class="bg-white py-16 md:py-20">

    <!-- TITLE -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <p class="text-lg max-w-3xl mx-auto text-center">

        Ízelítő a Grenma Stúdióban készült munkákból. A lejátszási listában
        különböző műfajokból válogattunk olyan előadókat és zenekarokat,
        akikkel az elmúlt évek során együtt dolgozhattunk.

      </p>
    </section>

    <section class="px-6 max-w-[1200px] mx-auto mb-12">
      <div class="rounded-xl overflow-hidden shadow-lg">
        <iframe
            data-testid="embed-iframe"
            style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/7DmKFDZyynkUmoKF3nkuGp?utm_source=generator&theme=0&si=ff92d276b2b14954"
            width="100%"
            height="400"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
      </div>
    </section>

    <section class="px-6 max-w-[1200px] mx-auto mb-12">
      <div class="rounded-xl overflow-hidden shadow-lg">
        <iframe
            data-testid="embed-iframe"
            style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/0sYzHXOfjwnxXtsg3nfPHZ?utm_source=generator&theme=0"
            width="100%"
            height="400"
            frameborder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
      </div>
    </section>

    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h2>KLIPEK</h2>
    </section>


    <section class="px-6 max-w-[1200px] mx-auto mb-12">
      <div class="rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full"
            height="600"
            src="https://www.youtube.com/embed/videoseries?si=ikYWpUh9Y9o_wbSz&list=PLcP9qeQqGLtc"
            title="Grenma Studio Playlist"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
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
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
               transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        ÁRAK MEGTEKINTÉSE
      </NuxtLink>
    </div>
  </section>

</template>
