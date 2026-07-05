<script setup>
import { ref, onMounted } from 'vue'

const open = ref(null) // 'A', 'B', 'F' vagy null

const toggle = (panel) => {
  open.value = open.value === panel ? null : panel
}

const studioA = new URL('@/assets/studio/studio_a.jpg', import.meta.url).href
const studioB = new URL('@/assets/studio/studio_b.jpg', import.meta.url).href
const studioF = new URL('@/assets/studio/studio_f.jpg', import.meta.url).href

const equipmentA = {
  daw: [
    "Mac Mini 2018 i7/32GB",
    "Avid Artist Mix DAW vezérlő",
    "Apogee Ensemble Thunderbolt",
    "Pro Tools Studio",
    "Reaper",
    "FabFilter Total Bundle",
    "Steven Slate All Access",
    "SSL Complete Access",
    "Celemony Melodyne",
    "Waves plug-inek",
    "iZotope Ozone",
    "Mixwave",
    "Get Good Drums",
    "SSD4",
    "STL Tones",
    "Tonality",
    "És még sok minden más..."
  ],

  monitors: [
    "Genelec 1032A (pár)",
    "Dynaudio BM5A (pár)",
    "Heritage Audio Baby RAM monitorvezérlő",
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
    "Warm Audio WA76 Mod x2 (1176 stílus)"
  ]
}

const equipmentB = {
  daw: [
    "Mac Mini M2 16GB",
    "RME Fireface UC",
    "RME ADI 2",
    "Pro Tools Studio",
    "FabFilter pluginek",
    "Steven Slate All Access",
    "SSL Complete Access",
    "Celemony Melodyne 5",
    "És még sok minden más..."
  ],

  monitors: [
    "ADAM A7X (pár)",
    "Audient Nero monitorvezérlő",
    "SoundID Reference",
    "AKG K701"
  ],

  outboard: [
    "Great River ME-1NV",
    "Heritage Audio HA-73 Elite",
    "Midas XL48",
    "Warm Audio WA-412",
    "Black Lion Audio Auteur mk2"
  ]
}

const equipmentF = {
  monitors: [
    "Behringer Powerplay személyi monitorrendszer (P16 x3)",
    "Beyerdynamic DT770 PRO x5",
    "VIC FIRTH SIH 1",
    "Sony MDR-7506",
    "Yamaha DXR12 x2"
  ],

  microphones: [
    "AKG C414 XLII",
    "Audio Technica AT4050",
    "Audix D6",
    "Audix D2 x2",
    "Audix D4",
    "Audix i5",
    "Audix ADX51 x2",
    "Earthworks DM20 Gen-2",
    "Neumann KM184 x2",
    "RODE TF-5 x2",
    "RODE NT5 x2",
    "sE Electronics sE8 x2",
    "sE Electronics V7x x2",
    "Sennheiser e614",
    "Sennheiser MD421 x4",
    "Sennheiser e604 x3",
    "Sennheiser e609",
    "Sennheiser e602 II",
    "Shure Beta 91",
    "Shure SM7B x3",
    "Shure SM57 x2",
    "Shure SM58 x2",
    "Slate Digital ML-2",
    "Warm Audio WA87 x2 (U87 stílusú)",
    "Warm Audio WA-47jr"
  ],

  drums: [
    "DW Collector’s Maple shell (24” lábdob, 10-12-14-16” tamok)",
    "FG Custom Ash shell (22” lábdob, 12-14” tamok)",
    "Tama Starclassic Birch (22” lábdob, 10-12-16” tamok)",
    "DW Performance Steel pergő (14x8)",
    "FG Custom Bubinga pergő (13x6,5)",
    "Tama Starphonic Brass pergő (14x6)",
    "Tama SLP Black Brass pergő (14x6.5)",
    "Zildjian K Dark cintányér szett (15” light lábcin, 17-19” Dark Thin beütők, 20” Dark kísérő/beütő)",
    "Zultan Caz Series cintányérok",
    "Istanbul Agop cintányérok"
  ],

  amplifiers: [
    "Kemper Profiler",
    "VOX AC30",
    "Marshall JCM 900",
    "Fender Bassbreaker 15",
    "Marshall 1960 4x12",
    "Blackstar Debut 2x12",
    "Tech21 SansAmp Bass DI",
    "Tech21 Dug Pinnick DP-3X",
    "Radial Pro RMP passzív reamper"
  ],

  instruments: [
    "PRS Mira",
    "Schecter PT Fastback",
    "Fender Precision Bass",
    "Schecter Baron-H",
    "Takamine akusztikus gitárok",
    "Gretsch akusztikus gitárok",
    "Roland FP10 digitális zongora"
  ]
}

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
    <div class="absolute inset-0 bg-black/60"></div>
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
  <div class="bg-white py-16 md:py-20">

    <section class="px-6 max-w-[1200px] mx-auto space-y-10">

      <!-- STÚDIÓ A -->
      <div>
        <div
            @click="toggle('A')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioA})` }"
        >
          <!-- ALAP SÖTÉTÍTÉS → HOVERRE FINOM VILÁGOSODÁS -->
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <!-- TITLE + NYÍL -->
          <h3  class="absolute inset-0 flex flex-col items-center justify-center text-white">
            STÚDIÓ A
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
              25 m²-es akusztikailag kezelt lehallgató helyiség.
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
                <h3 class="text-xl font-semibold mb-2">Monitorok</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentA.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Előfokok / Külső eszközök</h3>
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

      <!-- STÚDIÓ B -->
      <div>
        <div
            @click="toggle('B')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioB})` }"
        >
          <!-- ALAP SÖTÉTÍTÉS → HOVERRE FINOM VILÁGOSODÁS -->
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <!-- TITLE + NYÍL -->
          <h3  class="absolute inset-0 flex flex-col items-center justify-center text-white">
            STÚDIÓ B
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
              20 m²-es akusztikailag kezelt lehallgató helyiség.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h3 class="text-xl font-semibold mb-2">DAW</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentB.daw" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-2">Monitorok</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentB.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Előfokok / Külső eszközök</h3>
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

      <!-- FELJÁTSZÓ -->
      <div>
        <div
            @click="toggle('F')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioF})` }"
        >
          <!-- ALAP SÖTÉTÍTÉS → HOVERRE FINOM VILÁGOSODÁS -->
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <!-- TITLE + NYÍL -->
          <h3  class="absolute inset-0 flex flex-col items-center justify-center text-white">
            FELJÁTSZÓ
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
              35 m²-es akusztikailag kezelt feljátszó helyiség, kényelmes akár egy teljes zenekar együtt játszásához is.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h3 class="text-xl font-semibold mb-2">Lehallgatás</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Mikrofonok</h3>
                <ul class="list-disc pl-6 text-neutral-700">
                  <li v-for="(item, i) in equipmentF.microphones" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-2">Dobok</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.drums" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Erősítők</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.amplifiers" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">Hangszerek</h3>
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

  <!-- PARALLAX BLOKK A GALÉRIA ELŐTT -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[40vh] bg-cover bg-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_studio_middle.jpg)` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
  </section>

  <!-- FEHÉR BLOKK – GALÉRIA -->
  <div class="bg-white text-black py-16 md:py-20">

    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h2>KÉPEK</h2>
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
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_studio_bottom.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/references' : '/references'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
               transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
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
