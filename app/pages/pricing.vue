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
  <div class="bg-white py-16 md:py-20">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10">
      <h2>ÁRAK</h2>
      <p class="text-lg max-w-2xl mx-auto text-center">
        Felvétel, keverés, masterelés, editálás — minden, ami a professzionális hangzásig vezet.
      </p>
    </section>

    <!-- KÉT FŐ SZOLGÁLTATÁSI KÁRTYA -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mt-10">

      <!-- RECORDING -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <!-- KÁRTYA FELSŐ KÉP -->
        <div class="w-full h-60">
          <img
              src="@/assets/studio/card_rec.jpg"
              class="w-full h-full object-cover"
          />
        </div>

        <!-- TARTALOM -->
        <div class="p-10 pt-0">

          <h3>FELVÉTEL</h3>

          <p>
            Multisávos vagy élő session felvételek, reampelés, dob-, vokál- és hangszerfelvételek — teljes mértékben a projekted igényeire szabva.
          </p>

          <div class="space-y-2 text-lg text-left">
            <p class="leading-tight"><strong>Óradíj:</strong> 12 000 Ft</p>
            <p class="leading-tight"><strong>Napidíj (8 óra):</strong> 80 000 Ft</p>
            <p class="leading-tight"><strong>1–3 dal (teljes produkció):</strong> 120 000 Ft / dal</p>
            <p class="leading-tight"><strong>4–6 dal (teljes produkció):</strong> 100 000 Ft / dal</p>
            <p class="leading-tight"><strong>6 dal felett:</strong> egyedi megállapodás</p>
          </div>

        </div>

      </div>

      <!-- MIXING / MASTERING -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <!-- KÁRTYA FELSŐ KÉP -->
        <div class="w-full h-60">
          <img
              src="@/assets/studio/card_mix.jpg"
              class="w-full h-full object-cover"
          />
        </div>

        <!-- TARTALOM -->
        <div class="p-10 pt-0">

          <h3>KEVERÉS / MASTERELÉS</h3>

          <p>
            Vállalunk editálást, keverést és masterelést a nálunk rögzített anyagokhoz — de külső felvételekkel is szívesen dolgozunk.
          </p>

          <div class="space-y-2 text-lg text-left">
            <p class="leading-tight">
              <strong>Keverés / Masterelés:</strong> 50 000 Ft / dal
            </p>
          </div>


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
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-lato font-bold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        FOGLALÁS
      </NuxtLink>

    </div>

  </section>

</template>
