<script setup>
const config = useRuntimeConfig()
</script>

<template>

  <!-- HERO BACKGROUND -->
  <div
      class="w-full h-[50vh] md:h-[45vh] min-h-[300px] bg-cover bg-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_gallery.jpg)` }"
  ></div>


  <!-- FEHÉR TARTALOM -->
  <div class="bg-white text-black py-16 md:py-20">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">ÁRAK</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        Felvétel, keverés, masterelés, editálás és minden, ami a professzionális hangzásig vezet.
      </p>
    </section>


    <!-- KÉT NAGY SZOLGÁLTATÁS CARD -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 font-body mt-10">

      <!-- FELVÉTEL CARD -->
      <div
          class="bg-white border border-neutral-300 rounded-xl p-10 shadow-sm text-center relative"
      >


      <div class="w-32 h-32 mx-auto mb-6">
          <img src="@/assets/studio/icon_recording.png" class="w-full h-full object-contain" />
        </div>

        <h2 class="text-3xl font-oswald font-bold mb-4">FELVÉTEL</h2>

        <p class="text-neutral-700 leading-relaxed mb-6">
          Sávonkénti, vagy akár egyben játszós felvételek készítése, Re-amp, dobfelvétel, ének, egyéb hangszerek rögzítése.
        </p>

        <!-- ÁR PANEL (alapból nyitva) -->
        <div class="mt-4 p-6 bg-white/80 backdrop-blur-xl border border-neutral-300 rounded-xl shadow-inner">
          <p class="text-lg"><strong>Felvétel:</strong> 10.000 Ft / óra</p>
          <p class="text-lg mt-2"><strong>Dobfelvétel:</strong> 25.000 Ft / óra</p>
          <p class="text-lg mt-2"><strong>Re-amp:</strong> 5.000 Ft / track</p>
        </div>

      </div>


      <!-- MIXING / MASTERELÉS CARD -->
      <div
          class="bg-white border border-neutral-300 rounded-xl p-10 shadow-sm text-center relative"
      >


        <div class="w-32 h-32 mx-auto mb-6">
          <img src="@/assets/studio/icon_mixing.png" class="w-full h-full object-contain" />
        </div>

        <h2 class="text-3xl font-oswald font-bold mb-4">KEVERÉS / MASTERELÉS</h2>

        <p class="text-neutral-700 leading-relaxed mb-6">
          Akár a nálunk elkészűlt felvételek editálását, keverését, masterelését is kérheted, de hozott anyagból is szívesen dolgozunk.
        </p>

        <!-- ÁR PANEL (alapból nyitva) -->
        <div class="mt-4 p-6 bg-white/80 backdrop-blur-xl border border-neutral-300 rounded-xl shadow-inner">
          <p class="text-lg"><strong>Mixing:</strong> 25.000 Ft / dal</p>
          <p class="text-lg mt-2"><strong>Masterelés:</strong> 15.000 Ft / dal</p>
          <p class="text-lg mt-2"><strong>Stem mixing:</strong> 35.000 Ft / dal</p>
        </div>

      </div>

    </section>

  </div>


  <!-- ALSÓ PARALLAX + CTA -->
  <section
      class="relative w-full h-[45vh] bg-fixed bg-cover bg-center flex items-center justify-center"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_gallery.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">

      <!-- FŐOLDALI CTA GOMB -->
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/contact' : '/contact'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
                 transition-all duration-300 hover:bg-[#4fbb9b] hover:border-[#4fbb9b]"
      >
        Foglalás
      </NuxtLink>

    </div>

  </section>

</template>
