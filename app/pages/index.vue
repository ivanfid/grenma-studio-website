
<script setup>
import { ref, computed, onActivated } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isEN = computed(() => route.path.startsWith('/en'))
const content = computed(() => useSiteContent('index', isEN.value ? 'en' : 'hu'))

useSeoMeta({
  title: computed(() => content.value.seoTitle),
  description: computed(() => content.value.seoDescription)
})

const config = useRuntimeConfig()

const heroVideo = ref()

onActivated(() => {
  setTimeout(async () => {
    try {
      await heroVideo.value?.play()
    } catch (e) {}
  }, 50)
})
</script>


<template>

  <!-- HERO SECTION -->
  <section class="relative h-screen w-full bg-black text-white flex items-center justify-center">

    <!-- Background video -->
    <video
        ref="heroVideo"
        autoplay
        loop
        muted
        playsinline
        @ended="e => e.target.play()"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
    >

    <source src="/images/lowres_video.mp4" type="video/mp4" />
    </video>


    <!-- Dark overlay -->
    <!-- <div class="absolute inset-0 bg-black/40"></div>-->

    <!-- Micro‑grid overlay -->
    <div
        class="absolute inset-0 pointer-events-none opacity-45 hero-grid"
    ></div>

  </section>

  <!-- WHITE BLOCK – THE STUDIO SECTION -->
  <section class="bg-white py-12 px-6">

    <div class="max-w-[900px] mx-auto text-center font-body">

      <img
          :src="`${config.app.baseURL}images/studio_main_logo.png`"
          alt="Main Logo"
          class="mx-auto mb-6 w-[160px] md:w-[200px] lg:w-[240px]"
      />

      <h3>
      <span>
        {{ content.heroLine1 }}
      </span>
      <span>
        {{ content.heroLine2 }}
      </span>
      </h3>

      <p style="white-space: pre-line">{{ content.paragraph1 }}</p>

      <p style="white-space: pre-line">{{ content.paragraph2 }}</p>

      <p style="white-space: pre-line">{{ content.paragraph3 }}</p>

    </div>

  </section>

  <!-- PARALLAX CTA BLOCK -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh]
         bg-black bg-cover bg-center
         flex items-center justify-center
         xl:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_main.jpg)` }"
  >


    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          :to="isEN ? '/en/about' : '/about'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"

      >
        {{ content.ctaLabel }}
      </NuxtLink>
    </div>

  </section>

</template>

<style scoped>
.hero-grid {
  background-image:
      linear-gradient(rgba(255, 255, 255, 0.10) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.10) 1px, transparent 1px);

  background-size: 5px 5px;
}
</style>
