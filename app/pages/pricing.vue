<script setup>
const config = useRuntimeConfig()
</script>

<template>

  <!-- HERO WRAPPER -->
  <div class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]">

    <!-- HERO BACKGROUND -->
    <div
        class="w-full h-full bg-cover bg-center md:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}studio_pricing.jpg)` }"
    ></div>
    <div class="absolute inset-0 bg-black/60"></div>
    <!-- Micro-grid overlay (csak a hero-ra!) -->
    <div
        class="absolute inset-0 pointer-events-none opacity-50"
        style="
      background-image:
        linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
      background-size: 5px 5px;
    "
    ></div>
  </div>

  <!-- WHITE CONTENT -->
  <div class="bg-white text-black py-16 md:py-20">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">ÁRAK</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        Felvétel, keverés, masterelés, editálás és minden, ami a professzionális hangzásig vezet.
      </p>
    </section>

    <!-- TWO MAIN SERVICE CARDS -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 font-body mt-10">

      <!-- RECORDING -->
      <div class="bg-white border border-neutral-300 rounded-xl p-10 shadow-sm text-center">

        <div class="w-32 h-32 mx-auto mb-6">
          <img src="@/assets/studio/icon_recording.png" class="w-full h-full object-contain" />
        </div>

        <h2 class="text-3xl font-oswald font-bold mb-4">FELVÉTEL</h2>

        <p class="text-neutral-700 leading-relaxed mb-6 text-left">
          Sávonkénti vagy egyben játszós felvételek készítése, re-amp, dobfelvétel, ének és egyéb hangszerek rögzítése.
        </p>

        <div class="space-y-2 text-lg text-left">
          <p><strong>Óradíj:</strong> 12.000 Ft</p>
          <p><strong>Napidíj (8 óra):</strong> 80.000 Ft</p>
          <p><strong>1–3 dal (full):</strong> 120.000 Ft</p>
          <p><strong>4–6 dal (full):</strong> 100.000 Ft</p>
          <p><strong>6 dal fölött:</strong> egyéni megállapodás</p>
        </div>

      </div>

      <!-- MIXING / MASTERING -->
      <div class="bg-white border border-neutral-300 rounded-xl p-10 shadow-sm text-center">

        <div class="w-32 h-32 mx-auto mb-6">
          <img src="@/assets/studio/icon_mixing.png" class="w-full h-full object-contain" />
        </div>

        <h2 class="text-3xl font-oswald font-bold mb-4">KEVERÉS / MASTERELÉS</h2>

        <p class="text-neutral-700 leading-relaxed mb-6 text-left">
          A nálunk készült felvételek editálását, keverését és masterelését is vállaljuk, de hozott anyagból is szívesen dolgozunk.
        </p>

        <div class="text-lg text-left">
          <p><strong>Keverés / Masterelés:</strong> 50.000 Ft / dal</p>
        </div>

      </div>

    </section>

  </div>

  <!-- BOTTOM PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] bg-cover bg-center flex items-center justify-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_pricing_2.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">

      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/contact' : '/contact'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        FOGLALÁS
      </NuxtLink>

    </div>

  </section>

</template>
