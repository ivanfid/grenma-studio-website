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
        In most cases, we work with fixed project rates that include virtually unlimited studio time.
        We believe that recording is just as much a creative process as songwriting itself, and its value
        shouldn't necessarily be measured in hours. Since every project is unique, the prices below are
        intended as a general guide. Get in touch, tell us about your project, and we'll work out the details together.
      </p>
    </section>

    <!-- THREE MAIN SERVICE CARDS -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 mt-10">

      <!-- RECORDING -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <!-- CARD IMAGE -->
        <div class="w-full h-60">
          <img
              src="@/assets/studio/card_rec.jpg"
              class="w-full h-full object-cover"
          />
        </div>

        <!-- CONTENT -->
        <div class="p-10 pt-0">

          <h3>RECORDING</h3>

          <p>
            Vocal and instrument recording, multitrack recording, and live session recording.
          </p>

          <div class="space-y-2 text-lg text-left text-neutral-600">
            <div><strong>Hourly rate:</strong> 12,000 HUF</div>
            <div><strong>Day rate (8 hours):</strong> 80,000 HUF</div>
          </div>

        </div>
      </div>

      <!-- FULL PRODUCTION -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <!-- CARD IMAGE -->
        <div class="w-full h-60">
          <img
              src="@/assets/studio/card_fullprod.jpg"
              class="w-full h-full object-cover"
          />
        </div>

        <div class="p-10 pt-0">

          <h3>FULL PRODUCTION</h3>

          <p>
            The entire production process in one place – instrument and vocal recording, mixing, and mastering.
          </p>

          <div class="space-y-2 text-lg text-left text-neutral-600">
            <div><strong>1–3 songs:</strong> 120,000 HUF / song</div>
            <div><strong>4–6 songs:</strong> 100,000 HUF / song</div>
            <div><strong>6+ songs:</strong> custom pricing available</div>
          </div>

        </div>

      </div>

      <!-- MIXING / MASTERING -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <!-- CARD IMAGE -->
        <div class="w-full h-60">
          <img
              src="@/assets/studio/card_mix.jpg"
              class="w-full h-full object-cover"
          />
        </div>

        <!-- CONTENT -->
        <div class="p-10 pt-0">

          <h3>MIXING & MASTERING</h3>

          <p>
            We're happy to work with recordings made elsewhere. We offer editing, mixing, and mastering services.
            Send us your tracks, and we'll help them reach their full potential.
          </p>

          <div class="space-y-2 text-lg text-left text-neutral-600">
            <div>From 50,000 HUF/ song</div>
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
        BOOK NOW
      </NuxtLink>

    </div>

  </section>

</template>
