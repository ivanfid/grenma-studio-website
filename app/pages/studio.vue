
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isEN = computed(() => route.path.startsWith('/en'))
const content = computed(() => useSiteContent('studio', isEN.value ? 'en' : 'hu'))

useSeoMeta({
  title: computed(() => content.value.seoTitle),
  description: computed(() => content.value.seoDescription)
})

const open = ref(null) // 'A', 'B', 'F' vagy null

const toggle = (panel) => {
  open.value = open.value === panel ? null : panel
}

const config = useRuntimeConfig()
const studioA = `${config.app.baseURL}images/studio_a.jpg`
const studioB = `${config.app.baseURL}images/studio_b.jpg`
const studioF = `${config.app.baseURL}images/studio_f.jpg`

const equipmentA = computed(() => content.value.equipmentA)
const equipmentB = computed(() => content.value.equipmentB)
const equipmentF = computed(() => content.value.equipmentF)

const labels = computed(() => ({
  studioA: content.value.studioALabel,
  studioB: content.value.studioBLabel,
  liveRoom: content.value.liveRoomLabel,
  roomADesc: content.value.roomADesc,
  roomBDesc: content.value.roomBDesc,
  roomFDesc: content.value.roomFDesc,
  monitors: content.value.monitorsLabel,
  outboard: content.value.outboardLabel,
  listening: content.value.listeningLabel,
  microphones: content.value.microphonesLabel,
  drums: content.value.drumsLabel,
  amplifiers: content.value.amplifiersLabel,
  instruments: content.value.instrumentsLabel,
  gallery: content.value.galleryHeading,
  referencesCta: content.value.referencesCta
}))

// --- GALÉRIA LOGIKA ---
// A galéria képlistáját futásidőben kérjük le a gallery.php-től (a public/gallery
// mappa aktuális tartalmát adja vissza) — így egy admin kép fel-/letöltése azonnal
// látszik, nincs szükség új build-re. Ha a végpont nem elérhető (pl. helyi fejlesztés
// PHP nélkül), a galéria egyszerűen üresen marad, az oldal többi része zavartalan.
const images = ref([])

function getImageSize(url) {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve({ width: img.width, height: img.height })
    img.onerror = () => resolve({ width: 0, height: 0 })
    img.src = url
  })
}

onMounted(async () => {
  try {
    const files = await $fetch(`${config.app.baseURL}gallery.php`)

    for (const file of files) {
      const src = `${config.app.baseURL}gallery/${file}`
      const size = await getImageSize(src)

      images.value.push({
        src,
        w: size.width,
        h: size.height
      })
    }
  } catch (e) {
    console.warn('A galéria képlistája nem érhető el:', e)
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
         bg-black bg-cover bg-[center_5%]
         lg:bg-[center_30%]
         2xl:bg-[center_80%] 2xl:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_1.jpg)` }"
    ></div>
    <div class="absolute inset-0 bg-black/60"></div>
    <!-- Micro-grid overlay (csak a hero-ra) -->
    <div class="absolute inset-0 pointer-events-none opacity-60 micro-grid"></div>

  </div>

  <!-- FEHÉR BLOKK – STUDIOK -->
  <div class="bg-white py-16 md:py-20">

    <section class="px-6 max-w-[1200px] mx-auto space-y-10">

      <!-- STÚDIÓ A -->
      <div>
        <div
            @click="toggle('A')"
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-black bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioA})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <h3 class="absolute inset-0 flex flex-col items-center justify-center text-white">
            {{ labels.studioA }}
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
            <p class="mb-6">{{ labels.roomADesc }}</p>

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
                <h3 class="text-xl font-semibold mb-2">{{ labels.monitors }}</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentA.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">{{ labels.outboard }}</h3>
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
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-black bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioB})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <h3 class="absolute inset-0 flex flex-col items-center justify-center text-white">
            {{ labels.studioB }}
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
            <p class="mb-6">{{ labels.roomBDesc }}</p>

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
                <h3 class="text-xl font-semibold mb-2">{{ labels.monitors }}</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentB.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">{{ labels.outboard }}</h3>
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
            class="relative h-56 rounded-xl overflow-hidden cursor-pointer group bg-black bg-cover bg-center"
            :style="{ backgroundImage: `url(${studioF})` }"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          <h3 class="absolute inset-0 flex flex-col items-center justify-center text-white">
            {{ labels.liveRoom }}
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
            <p class="mb-6">{{ labels.roomFDesc }}</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h3 class="text-xl font-semibold mb-2">{{ labels.listening }}</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.monitors" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">{{ labels.microphones }}</h3>
                <ul class="list-disc pl-6 text-neutral-700">
                  <li v-for="(item, i) in equipmentF.microphones" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-2">{{ labels.drums }}</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.drums" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">{{ labels.amplifiers }}</h3>
                <ul class="list-disc pl-6 text-neutral-700 mb-6">
                  <li v-for="(item, i) in equipmentF.amplifiers" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mb-2">{{ labels.instruments }}</h3>
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
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[40vh]
         bg-black bg-cover bg-center
         xl:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_studio_middle.jpg)` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
  </section>

  <!-- FEHÉR BLOKK – GALÉRIA -->
  <div class="bg-white text-black py-16 md:py-20">

    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h2>{{ labels.gallery }}</h2>
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
              :alt="`${labels.gallery} ${i + 1}`"
              class="w-full h-64 object-cover hover:scale-105 transition duration-300"
          />
        </a>
      </div>
    </section>

  </div>


  <!-- ALSÓ PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh]
         bg-black bg-cover bg-center
         flex items-center justify-center
         xl:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_studio_bottom.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">
      <NuxtLink
          :to="isEN ? '/en/references' : '/references'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
               transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        {{ labels.referencesCta }}
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
