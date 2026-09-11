
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isEN = computed(() => route.path.startsWith('/en'))
const content = computed(() => useSiteContent('about', isEN.value ? 'en' : 'hu'))

useSeoMeta({
  title: computed(() => content.value.seoTitle),
  description: computed(() => content.value.seoDescription)
})

const config = useRuntimeConfig()
</script>

<template>

  <div class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]">

    <!-- Hero background -->
    <div
        class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]
         bg-black bg-cover bg-center
         lg:bg-[center_30%]
         2xl:bg-[center_80%] 2xl:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_about.jpg)` }"
    ></div>

    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Micro-grid overlay (csak a hero-ra!) -->
    <div class="absolute inset-0 pointer-events-none opacity-60 micro-grid"></div>

  </div>


  <!-- FEHÉR TARTALOM -->
  <div class="about-page bg-white py-16 md:py-20">

    <!-- 1) KÉP – SZÖVEG -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden">
        <img src="/images/studio_lounge.jpg" :alt="content.section1Heading" class="w-full h-full object-cover" />
      </div>

      <div>
        <h3>{{ content.section1Heading }}</h3>
        <p style="white-space: pre-line">{{ content.section1Text }}</p>
      </div>

    </section>

    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>

    <!-- 2) KÉP – SZÖVEG -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden md:order-2">
        <img src="/images/matyi_profile.jpg" :alt="content.section2Heading" class="w-full h-full object-cover" />
      </div>

      <div class="md:order-1">
        <h3>{{ content.section2Heading }}</h3>
        <p style="white-space: pre-line">{{ content.section2Text }}</p>
      </div>

    </section>


    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>

    <!-- 3) SZÖVEG – KÉP -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden md:order-1">
        <img src="/images/dani_profile.jpg" :alt="content.section3Heading" class="w-full h-full object-cover" />
      </div>

      <div class="md:order-2">
        <h3>{{ content.section3Heading }}</h3>
        <p style="white-space: pre-line">{{ content.section3Text }}</p>
      </div>

    </section>

  </div>

  <!-- ALSÓ PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh]
         bg-black bg-cover bg-center
         flex items-center justify-center
         xl:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_about_bottom.jpg)` }"
  >


    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">

      <!-- FŐOLDALI CTA GOMB -->
      <NuxtLink
          :to="isEN ? '/en/studio' : '/studio'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
                 transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        {{ content.ctaLabel }}
      </NuxtLink>

    </div>

  </section>

</template>


<style scoped>
.about-page p {
  margin-bottom: 0;
}

.micro-grid {
  background-image:
      linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 5px 5px;
}
</style>
