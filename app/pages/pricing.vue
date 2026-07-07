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
      <p class="text-lg max-w-3xl mx-auto text-center">
        Az esetek többségében fix árakkal dolgozunk, amelyekhez szinte korlátlan stúdióidő tartozik.
        Hiszünk abban, hogy a stúdiózás ugyanolyan alkotófolyamat, mint maga a dalszerzés – az értékét nem feltétlenül órákban érdemes mérni.
        Mivel minden projekt egyedi, az alábbi árak tájékoztató jellegűek. Írj vagy hívj, mondd el, mit szeretnél felvenni, és megbeszéljük a részleteket.
      </p>
    </section>

    <!-- HÁROM FŐ SZOLGÁLTATÁSI KÁRTYA -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 mt-10">

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
            Ének- és hangszer felvételek, soksávos és live session felvételek.
          </p>

          <div class="space-y-2 text-lg text-left">
            <p class="leading-tight"><strong>Óradíj:</strong> 12 000 Ft</p>
            <p class="leading-tight"><strong>Napidíj (8 óra):</strong> 80 000 Ft</p>
          </div>


        </div>
      </div>

      <!-- TELJES PRODUKCIÓ -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <!-- KÁRTYA FELSŐ KÉP -->
        <div class="w-full h-60">
          <img
              src="@/assets/studio/card_fullprod.jpg"
              class="w-full h-full object-cover"
          />
        </div>

        <div class="p-10 pt-0">
          <h3>TELJES PRODUKCIÓ</h3>

          <p>
            A teljes folyamat egy helyen – hangszerek, ének felvétele, keverés és mastering.
          </p>

          <div class="space-y-2 text-lg text-left">
            <p class="leading-tight">
              <strong>1–3 dal:</strong> 120 000 Ft / dal
            </p>
            <p class="leading-tight">
              <strong>4–6 dal:</strong> 100 000 Ft / dal
            </p>
            <p class="leading-tight">
              <strong>6 dal felett:</strong> egyedi megállapodás alapján
            </p>
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

          <h3>KEVERÉS & MASTERING</h3>

          <p>
            Külső felvételekkel is szívesen dolgozunk. Vállalunk editálást, keverést és masterelést. Küldd el a sávokat, mi pedig kihozzuk belőlük a legjobbat!
          </p>

          <div class="space-y-2 text-lg text-left">
            <p class="leading-tight">
              50 000 Ft-tól / dal
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
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        FOGLALÁS
      </NuxtLink>

    </div>

  </section>

</template>
