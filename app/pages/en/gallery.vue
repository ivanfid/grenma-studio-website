<script setup>
import { ref, onMounted } from 'vue'

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
  <section class="min-h-screen bg-black text-white px-6 pb-20 pt-[80px] font-oswald">

    <h1 class="text-4xl font-bold mb-10 text-center">GALLERY</h1>

    <div
        id="gallery"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
    >
      <a
          v-for="(img, i) in images"
          :key="i"
          :href="img.src"
          target="_blank"
          :data-pswp-width="img.w"
          :data-pswp-height="img.h"
          class="block overflow-hidden rounded-xl border border-neutral-800 transition fadeThumb"
          :style="{ animationDelay: `${i * 0.1}s` }"
      >
        <img
            :src="img.src"
            class="w-full h-64 object-cover hover:scale-105 transition duration-300"
        />
      </a>
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
