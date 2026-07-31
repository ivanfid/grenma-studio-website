<script setup>

useSeoMeta({
  title: 'Studio | Grenma Studio',
  description:
      'Professional recording, mixing and mastering services in Budapest.'
})

import { ref, onMounted } from 'vue'

const open = ref(null) // 'A', 'B', 'F' or null

const toggle = (panel) => {
  open.value = open.value === panel ? null : panel
}

import studioA from '@/assets/studio/studio_a.jpg'
import studioB from '@/assets/studio/studio_b.jpg'
import studioF from '@/assets/studio/studio_f.jpg'

const equipmentA = {
  daw: [
    "Mac Mini 2018 i7/32GB",
    "Avid Artist Mix DAW Controller",
    "Apogee Ensemble Thunderbolt",
    "Pro Tools Studio",
    "Reaper",
    "FabFilter Total Bundle",
    "Steven Slate All Access",
    "SSL Complete Access",
    "Celemony Melodyne",
    "Waves Plug-ins",
    "iZotope Ozone",
    "Mixwave",
    "Get Good Drums",
    "SSD4",
    "STL Tones",
    "Tonality",
    "And much more..."
  ],

  monitors: [
    "Genelec 1032A (pair)",
    "Dynaudio BM5A (pair)",
    "Heritage Audio Baby RAM Monitor Controller",
    "Sennheiser HD580"
  ],

  outboard: [
    "Focusrite ISA 828",
    "Audient ASP 880",
    "Apogee Ensemble",
    "Focusrite ISA 220",
    "Gainlab Audio Bishop",
    "Kemper Profiler",
    "Empirical Labs Distressor",
    "DBX 160",
    "Warm Audio WA76 Mod ×2 (1176 style)"
  ]
}

const equipmentB = {
  daw: [
    "Mac Mini M2 16GB",
    "RME Fireface UC",
    "RME ADI-2",
    "Pro Tools Studio",
    "FabFilter Plug-ins",
    "Steven Slate All Access",
    "SSL Complete Access",
    "Celemony Melodyne 5",
    "And much more..."
  ],

  monitors: [
    "ADAM A7X (pair)",
    "Audient Nero Monitor Controller",
    "SoundID Reference",
    "AKG K701"
  ],

  outboard: [
    "Great River ME-1NV",
    "Heritage Audio HA-73 Elite",
    "Midas XL48",
    "Warm Audio WA-412",
    "Black Lion Audio Auteur MKII"
  ]
}

const equipmentF = {
  monitors: [
    "Behringer Powerplay Monitoring System (P16 ×3)",
    "Beyerdynamic DT770 PRO ×5",
    "VIC FIRTH SIH 1",
    "Sony MDR-7506",
    "Yamaha DXR12 ×2"
  ],

  microphones: [
    "AKG C414 XLII",
    "Audio Technica AT4050",
    "Audix D6",
    "Audix D2 ×2",
    "Audix D4",
    "Audix i5",
    "Audix ADX51 ×2",
    "Earthworks DM20 Gen-2",
    "Neumann KM184 ×2",
    "RODE TF-5 ×2",
    "RODE NT5 ×2",
    "sE Electronics sE8 ×2",
    "sE Electronics V7x ×2",
    "Sennheiser e614",
    "Sennheiser MD421 ×4",
    "Sennheiser e604 ×3",
    "Sennheiser e609",
    "Sennheiser e602 II",
    "Shure Beta 91",
    "Shure SM7B ×3",
    "Shure SM57 ×2",
    "Shure SM58 ×2",
    "Slate Digital ML-2",
    "Warm Audio WA87 ×2 (U87-style)",
    "Warm Audio WA-47jr"
  ],

  drums: [
    "DW Collector’s Maple Shell Kit (24” kick, 10-12-14-16” toms)",
    "FG Custom Ash Shell Kit (22” kick, 12-14” toms)",
    "Tama Starclassic Birch Kit (22” kick, 10-12-16” toms)",
    "DW Performance Steel Snare (14x8”)",
    "FG Custom Bubinga Snare (13x6.5”)",
    "Tama Starphonic Brass Snare (14x6”)",
    "Tama SLP Black Brass Snare (14x6.5”)",
    "Zildjian K Dark Cymbal Set (15” Light Hi-Hats, 17-19” Dark Thin Crashes, 20” Dark Crash/Ride)",
    "Zultan Caz Series Cymbals",
    "Istanbul Agop Cymbals"
  ],

  amplifiers: [
    "Kemper Profiler",
    "VOX AC30",
    "Marshall JCM 900",
    "Fender Bassbreaker 15",
    "Marshall 1960 4x12 Cabinet",
    "Blackstar Debut 2x12 Cabinet",
    "Tech21 SansAmp Bass DI",
    "Tech21 Dug Pinnick DP-3X",
    "Radial Pro RMP Passive Reamper"
  ],

  instruments: [
    "PRS Mira",
    "Schecter PT Fastback",
    "Fender Precision Bass",
    "Schecter Baron-H",
    "Takamine Acoustic Guitar",
    "Gretsch Acoustic Guitar",
    "Roland FP10 Digital Piano"
  ]
}

const config = useRuntimeConfig()

// --- GALLERY LOGIC ---
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
        class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]
         bg-cover bg-[center_5%]
         lg:bg-[center_30%]
         2xl:bg-[center_80%] 2xl:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}studio_1.jpg)` }"
    ></div>
    <div class="absolute inset-0 bg-black/60"></div>
    <!-- Micro-grid overlay (csak a hero-ra) -->
    <div class="absolute inset-0 pointer-events-none opacity-60 micro-grid"></div>

  </div>


  <!-- WHITE BLOCK – STUDIOS -->
  <div class="bg-white py-16 md:py-20">

    <section class="px-6 max-w-[1200px] mx-auto space-y-10">

      <!-- STUDIO A -->
      <div>
        <div
            @click="toggle('A')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioA})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <h3
              class="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            STUDIO A

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                class="mt-3 w-[1.9rem] opacity-90 group-hover:opacity-100 transform transition-transform duration-300"
                :class="{ 'rotate-180': open === 'A' }"
            >
              <path d="M12 16.5l-7-7 1.4-1.4L12 13.7l5.6-5.6L19 9.5z"/>
            </svg>
          </h3>

        </div>

        <div
            class="accordion bg-white rounded-xl mt-4"
            :style="{ maxHeight: open === 'A' ? '2000px' : '0px' }"
        >
          <div class="p-8">
            <p class="mb-6">
              25 m² acoustically treated control room.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h3 class="text-xl font-semibold mb-2">DAW</h3>
                <ul class="list-disc pl-6 text-neutral-700">
                  <li v-for="(item, i) in equipmentA.daw" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-2">Monitors</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentA.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Preamp / Outboard</h3>
                <ul class="list-disc pl-6 text-neutral-700">
                  <li v-for="(item, i) in equipmentA.outboard" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>


      <!-- STUDIO B -->
      <div>
        <div
            @click="toggle('B')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioB})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <h3
              class="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            STUDIO B

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                class="mt-3 w-[1.9rem] opacity-90 group-hover:opacity-100 transform transition-transform duration-300"
                :class="{ 'rotate-180': open === 'B' }"
            >
              <path d="M12 16.5l-7-7 1.4-1.4L12 13.7l5.6-5.6L19 9.5z"/>
            </svg>
          </h3>

        </div>

        <div
            class="accordion bg-white rounded-xl mt-4"
            :style="{ maxHeight: open === 'B' ? '1200px' : '0px' }"
        >
          <div class="p-8">
            <p class="mb-6">
              20 m² acoustically treated control room.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h3 class="text-xl font-semibold mb-2">DAW</h3>
                <ul class="list-disc pl-6 text-neutral-700">
                  <li v-for="(item, i) in equipmentB.daw" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-2">Monitors</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentB.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Outboard</h3>
                <ul class="list-disc pl-6 text-neutral-700">
                  <li v-for="(item, i) in equipmentB.outboard" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- RECORDING ROOM -->
      <div>
        <div
            @click="toggle('F')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioF})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <h3
              class="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            LIVE ROOM

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                class="mt-3 w-[1.9rem] opacity-90 group-hover:opacity-100 transform transition-transform duration-300"
                :class="{ 'rotate-180': open === 'F' }"
            >
              <path d="M12 16.5l-7-7 1.4-1.4L12 13.7l5.6-5.6L19 9.5z"/>
            </svg>
          </h3>

        </div>

        <div
            class="accordion bg-white rounded-xl mt-4"
            :style="{ maxHeight: open === 'F' ? '2300px' : '0px' }"
        >
          <div class="p-8">
            <p class="mb-6">
              35 m² acoustically treated live room, spacious enough for a full band to perform together comfortably.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h3 class="text-xl font-semibold mb-2">Monitors</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Microphones</h3>
                <ul class="list-disc pl-6 text-neutral-700">
                  <li v-for="(item, i) in equipmentF.microphones" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-2">Drums</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.drums" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Amplifiers</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.amplifiers" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Instruments</h3>
                <ul class="list-disc pl-6 text-neutral-700">
                  <li v-for="(item, i) in equipmentF.instruments" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>

  </div>

  <!-- PARALLAX BLOCK BEFORE GALLERY -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[40vh]
         bg-cover bg-center
         xl:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_studio_middle.jpg)` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
  </section>

  <!-- WHITE BLOCK – GALLERY -->
  <div class="bg-white text-black py-16 md:py-20">

    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h2>PHOTOS</h2>
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


  <!-- BOTTOM PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh]
         bg-cover bg-center
         flex items-center justify-center
         xl:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_studio_bottom.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/references' : '/references'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
               transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        REFERENCES
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

.micro-grid {
  background-image:
      linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 5px 5px;
}
</style>
