
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isEN = computed(() => route.path.startsWith('/en'))
const t = computed(() => useSiteContent('pricing', isEN.value ? 'en' : 'hu'))

useSeoMeta({
  title: computed(() => t.value.seoTitle),
  description: computed(() => t.value.seoDescription)
})

const config = useRuntimeConfig()
</script>

<template>

  <!-- HERO WRAPPER -->
  <div class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]">

    <!-- HERO BACKGROUND -->
    <div
        class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]
         bg-black bg-cover bg-[center_5%]
         lg:bg-[center_30%]
         2xl:bg-[center_80%] 2xl:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_pricing.jpg)` }"
    ></div>
    <div class="absolute inset-0 bg-black/60"></div>
    <!-- Micro-grid overlay (csak a hero-ra!) -->
    <div class="absolute inset-0 pointer-events-none opacity-60 micro-grid"></div>
  </div>

  <!-- WHITE CONTENT -->
  <div class="bg-white py-16 md:py-20">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10">
      <p class="text-lg max-w-3xl mx-auto text-center">{{ t.intro }}</p>
    </section>

    <!-- HÁROM FŐ SZOLGÁLTATÁSI KÁRTYA -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 mt-10">

      <!-- RECORDING -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <div class="w-full h-60">
          <img
              :src="`${config.app.baseURL}images/card_rec.jpg`"
              :alt="t.recTitle"
              class="w-full h-full object-cover"
          />
        </div>

        <div class="p-10 pt-0">

          <h3>{{ t.recTitle }}</h3>

          <p>{{ t.recDesc }}</p>

          <div class="space-y-2 text-lg text-left text-neutral-600">
            <div><strong>{{ t.recHourly }}</strong> {{ t.recHourlyValue }}</div>
            <div><strong>{{ t.recDaily }}</strong> {{ t.recDailyValue }}</div>
          </div>

        </div>
      </div>

      <!-- TELJES PRODUKCIÓ -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <div class="w-full h-60">
          <img
              :src="`${config.app.baseURL}images/card_fullprod.jpg`"
              :alt="t.prodTitle"
              class="w-full h-full object-cover"
          />
        </div>

        <div class="p-10 pt-0">
          <h3>{{ t.prodTitle }}</h3>

          <p>{{ t.prodDesc }}</p>

          <div class="space-y-2 text-lg text-left text-neutral-600">
            <div><strong>{{ t.prod1to3 }}</strong> {{ t.prod1to3Value }}</div>
            <div><strong>{{ t.prod4to6 }}</strong> {{ t.prod4to6Value }}</div>
            <div><strong>{{ t.prod6plus }}</strong> {{ t.prod6plusValue }}</div>
          </div>

        </div>

      </div>


      <!-- MIXING / MASTERING -->
      <div class="bg-white border border-neutral-300 rounded-xl shadow-sm text-center overflow-hidden">

        <div class="w-full h-60">
          <img
              :src="`${config.app.baseURL}images/card_mix.jpg`"
              :alt="t.mixTitle"
              class="w-full h-full object-cover"
          />
        </div>

        <div class="p-10 pt-0">

          <h3>{{ t.mixTitle }}</h3>

          <p>{{ t.mixDesc }}</p>

          <div class="space-y-2 text-lg text-left text-neutral-600">
            <div>{{ t.mixValue }}</div>
          </div>

        </div>
      </div>

    </section>

  </div>


  <!-- BOTTOM PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh]
         bg-black bg-cover bg-center
         flex items-center justify-center
         xl:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_pricing_2.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">

      <NuxtLink
          :to="isEN ? '/en/contact' : '/contact'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        {{ t.ctaLabel }}
      </NuxtLink>

    </div>

  </section>

</template>

<style>
.micro-grid {
  background-image:
      linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 5px 5px;
}
</style>
