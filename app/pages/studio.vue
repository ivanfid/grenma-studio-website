<script setup>
import { ref, onMounted } from 'vue'

const open = ref(null) // 'A', 'B', 'F' vagy null

const toggle = (panel) => {
  open.value = open.value === panel ? null : panel
}

const studioA = new URL('@/assets/studio/studio_a.jpg', import.meta.url).href
const studioB = new URL('@/assets/studio/studio_b.jpg', import.meta.url).href
const studioG = new URL('@/assets/studio/studio_f.jpg', import.meta.url).href

const equipmentA = [
  "mikrofon",
  "előfok",
  "kábel",
  "konténer",
  "dob",
  "cintányér",
  "még több kábel",
  "ez egy jó hosszú nevű eszköz ki tudja",
  "gumicukor",
  "csin"
]

const equipmentB = [
  "mikrofon B",
  "előfok B",
  "kábel B",
  "dob B",
  "cintányér B",
  "speciális B eszköz",
  "gumicukor B"
]

const equipmentF = [
  "feljátszó mikrofon",
  "feljátszó kábel",
  "feljátszó interfész",
  "feljátszó monitor",
  "feljátszó extra eszköz"
]

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

  <!-- HERO WRAPPER -->
  <div class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]">

    <!-- HERO BACKGROUND -->
    <div
        class="w-full h-full bg-cover bg-center md:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}studio_1.jpg)` }"
    ></div>

    <!-- Micro-grid overlay (csak a hero-ra) -->
    <div
        class="absolute inset-0 pointer-events-none opacity-60"
        style="
      background-image:
        linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
      background-size: 5px 5px;
    "
    ></div>

  </div>

  <!-- FEHÉR BLOKK – STUDIOK -->
  <div class="bg-white text-black py-16 md:py-20">


  <!-- TITLE -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">STÚDIÓK</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        Itt Bemutatjuk az A, B stúdiót, és a feljátszót is.
      </p>
    </section>

    <section class="px-6 max-w-[1200px] mx-auto space-y-10 font-body">

      <!-- STÚDIÓ A -->
      <div>
        <div
            @click="toggle('A')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioA})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

          <h2 class="absolute inset-0 flex items-center justify-center text-white text-4xl font-oswald font-bold">
            STÚDIÓ A
          </h2>
        </div>

        <div
            class="accordion bg-white rounded-xl mt-4"
            :style="{ maxHeight: open === 'A' ? '600px' : '0px' }"
        >


          <div class="p-8">
            <p class="text-neutral-700 leading-relaxed mb-6">
              Itt jön majd a Stúdió A részletes leírása.
            </p>

            <h3 class="text-xl font-semibold mb-2">Eszközlista</h3>
            <ul class="list-disc pl-6 text-neutral-700">
              <li v-for="(item, i) in equipmentA" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>


      <!-- STÚDIÓ B -->
      <div>
        <div
            @click="toggle('B')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioB})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

          <h2 class="absolute inset-0 flex items-center justify-center text-white text-4xl font-oswald font-bold">
            STÚDIÓ B
          </h2>
        </div>

        <div
            class="accordion bg-white rounded-xl mt-4"
            :style="{ maxHeight: open === 'B' ? '600px' : '0px' }"
        >

          <div class="p-8">
            <p class="text-neutral-700 leading-relaxed mb-6">
              Itt jön majd a Stúdió B részletes leírása.
            </p>

            <h3 class="text-xl font-semibold mb-2">Eszközlista</h3>
            <ul class="list-disc pl-6 text-neutral-700">
              <li v-for="(item, i) in equipmentB" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>


      <!-- FELJÁTSZÓ -->
      <div>
        <div
            @click="toggle('F')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioG})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

          <h2 class="absolute inset-0 flex items-center justify-center text-white text-4xl font-oswald font-bold">
            FELJÁTSZÓ
          </h2>
        </div>

        <div
            class="accordion bg-white rounded-xl mt-4"
            :style="{ maxHeight: open === 'F' ? '600px' : '0px' }"
        >

          <div class="p-8">
            <p class="text-neutral-700 leading-relaxed mb-6">
              Itt jön majd a Feljátszó részletes leírása.
            </p>

            <h3 class="text-xl font-semibold mb-2">Eszközlista</h3>
            <ul class="list-disc pl-6 text-neutral-700">
              <li v-for="(item, i) in equipmentF" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

    </section>



  </div>

  <!-- PARALLAX BLOKK A GALÉRIA ELŐTT -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[40vh] bg-cover bg-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_references.jpg)` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
  </section>

  <!-- FEHÉR BLOKK – GALÉRIA -->
  <div class="bg-white text-black py-16 md:py-20">

    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h2 class="text-4xl font-bold mb-4 font-oswald">KÉPEK</h2>
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
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] bg-cover bg-center flex items-center justify-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_2.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/references' : '/references'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
               transition-all duration-300 hover:bg-brand/100 hover:border-brand/100"
      >
        REFERENCIÁK
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

.accordion {
  overflow: hidden;
  transition: max-height 0.6s ease-out;
}
</style>
