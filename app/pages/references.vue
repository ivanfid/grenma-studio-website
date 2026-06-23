<script setup>
import { ref, onMounted } from 'vue'
const config = useRuntimeConfig()

// --- GALÉRIA LOGIKA ---
const imageModules = import.meta.glob('@/assets/gallery/*.jpg', {
  eager: true,
  import: 'default'
})

const images = ref([])

function getImageSize(url) {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve({ width: img.width, height: img.height })
    img.src = url
  })
}

onMounted(async () => {
  for (const path in imageModules) {
    const src = imageModules[path]
    const size = await getImageSize(src)

    images.value.push({
      src,
      w: size.width,
      h: size.height
    })
  }

  const PhotoSwipeLightbox = (await import('photoswipe/lightbox')).default

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: () => import('photoswipe'),
    imageScaleMethod: 'fit'
  })

  lightbox.init()
})
</script>

<template>

  <!-- HERO BACKGROUND -->
  <div
      class="w-full h-[50vh] md:h-[45vh] min-h-[300px] bg-cover bg-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_references.jpg)` }"
  ></div>


  <!-- FEHÉR BLOKK – VIDEÓK -->
  <div class="bg-white text-black py-16 md:py-20">

    <!-- TITLE -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">REFERENCIÁK</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        Néhány videó, amelyek nálunk készültek vagy a stúdióhoz kapcsolódnak.
      </p>
    </section>

    <!-- VIDEÓ GRID -->
    <section class="px-6 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">

      <!-- VIDEO 1 -->
      <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/2oDzGbp0duY?si=RBR-or3x2PN_CNWh&start=11"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>

      <!-- VIDEO 2 -->
      <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/XjHfhxRI3PM?si=nVhEhYo3ffPXIrpj&start=11"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>

      <!-- VIDEO 3 -->
      <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/oTCn_e62ck8?si=BWx6-9ef75Q-cSGI&start=152"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>

      <!-- VIDEO 4 -->
      <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/lAFssMaouFg?si=zAeCe__ltHafNBFq&start=152"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </div>

    </section>

  </div>


  <!-- PARALLAX BLOKK A GALÉRIA ELŐTT -->
  <section
      class="relative w-full h-[40vh] bg-fixed bg-cover bg-center"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_references.jpg)` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
  </section>


  <!-- FEHÉR BLOKK – GALÉRIA -->
  <div class="bg-white text-black py-16 md:py-20">

    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h2 class="text-4xl font-bold mb-4 font-oswald">FOTÓGALÉRIA</h2>
    </section>

    <section class="px-6 max-w-[1200px] mx-auto font-body mt-10">
      <div
          id="gallery"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <a
            v-for="(img, i) in images"
            :key="i"
            :href="img.src"
            target="_blank"
            :data-pswp-width="img.w"
            :data-pswp-height="img.h"
            class="block overflow-hidden rounded-xl border border-neutral-300 transition fadeThumb"
            :style="{ animationDelay: `${i * 0.1}s` }"
        >
          <img
              :src="img.src"
              class="w-full h-64 object-cover hover:scale-105 transition duration-300"
          />
        </a>
      </div>
    </section>

  </div>


  <!-- ALSÓ PARALLAX + CTA -->
  <section
      class="relative w-full h-[45vh] bg-fixed bg-cover bg-center flex items-center justify-center"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_references.jpg)` }"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/pricing' : '/pricing'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
               transition-all duration-300 hover:bg-[#4fbb9b] hover:border-[#4fbb9b]"
      >
        Árak megtekintése
      </NuxtLink>
    </div>
  </section>

</template>

<style>
@keyframes fadeThumb {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.fadeThumb {
  opacity: 0;
  animation: fadeThumb 1s ease-out forwards;
}
</style>
