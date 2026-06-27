<script setup>
const config = useRuntimeConfig()
</script>

<template>

  <!-- HERO BACKGROUND -->
  <div
      class="w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px] bg-cover bg-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_gallery.jpg)` }"
  ></div>

  <!-- WHITE CONTENT -->
  <div class="bg-white text-black py-16 md:py-20">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">PRICING</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        Recording, mixing, mastering, editing — everything you need on the road to a professional sound.
      </p>
    </section>

    <!-- TWO MAIN SERVICE CARDS -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 font-body mt-10">

      <!-- RECORDING -->
      <div class="bg-white border border-neutral-300 rounded-xl p-10 shadow-sm text-center">

        <div class="w-32 h-32 mx-auto mb-6">
          <img src="@/assets/studio/icon_recording.png" class="w-full h-full object-contain" />
        </div>

        <h2 class="text-3xl font-oswald font-bold mb-4">RECORDING</h2>

        <p class="text-neutral-700 leading-relaxed mb-6">
          Multitrack or live session recording, re-amping, drum tracking, vocals, and all other instruments.
        </p>

        <!-- UPDATED PRICES – NO INNER PANEL -->
        <div class="space-y-2 text-lg">
          <p><strong>Hourly rate:</strong> 12,000 Ft</p>
          <p><strong>Day rate (8 hours):</strong> 80,000 Ft</p>
          <p><strong>1–3 songs (full production):</strong> 120,000 Ft</p>
          <p><strong>4–6 songs (full production):</strong> 100,000 Ft</p>
          <p><strong>Over 6 songs:</strong> custom agreement</p>
        </div>

      </div>

      <!-- MIXING / MASTERING -->
      <div class="bg-white border border-neutral-300 rounded-xl p-10 shadow-sm text-center">

        <div class="w-32 h-32 mx-auto mb-6">
          <img src="@/assets/studio/icon_mixing.png" class="w-full h-full object-contain" />
        </div>

        <h2 class="text-3xl font-oswald font-bold mb-4">MIXING / MASTERING</h2>

        <p class="text-neutral-700 leading-relaxed mb-6">
          We offer editing, mixing and mastering for recordings made here, but we are also happy to work with your own material.
        </p>

        <div class="text-lg">
          <p><strong>Mixing / Mastering:</strong> 50,000 Ft per song</p>
        </div>

      </div>

    </section>

  </div>

  <!-- BOTTOM PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] bg-cover bg-center flex items-center justify-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_gallery.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">

      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/contact' : '/contact'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
           transition-all duration-300 hover:bg-brand hover:border-brand"
      >
        BOOK NOW
      </NuxtLink>

    </div>

  </section>

</template>
