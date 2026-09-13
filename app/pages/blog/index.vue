
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const config = useRuntimeConfig()
const isEN = computed(() => route.path.startsWith('/en'))
const lang = computed(() => isEN.value ? 'en' : 'hu')

const posts = computed(() => useBlogPosts(lang.value))
const featured = computed(() => posts.value[0])
const older = computed(() => posts.value.slice(1))

useSeoMeta({
  title: computed(() => isEN.value ? 'Blog | Grenma Studio' : 'Blog | Grenma Studio'),
  description: computed(() => isEN.value
      ? 'News, tips and stories from the Grenma Studio.'
      : 'Hírek, tippek és sztorik a Grenma Studióból.')
})

const t = computed(() => isEN.value ? {
  earlierPosts: 'Earlier posts',
  readMore: 'Read more →',
  cta: 'CONTACT'
} : {
  earlierPosts: 'Korábbi bejegyzések',
  readMore: 'Tovább olvasom →',
  cta: 'KAPCSOLAT'
})

function formatDate(iso) {
  const [y, m, d] = iso.split('-')
  return `${y}. ${m}. ${d}.`
}

function postLink(slug) {
  return isEN.value ? `/en/blog/${slug}` : `/blog/${slug}`
}
</script>

<template>

  <!-- HERO WRAPPER -->
  <div class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]">

    <!-- HERO BACKGROUND -->
    <div
        class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]
         bg-black bg-cover bg-center
         lg:bg-[center_30%]
         2xl:bg-[center_80%] 2xl:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}images/studio_lounge.jpg)` }"
    ></div>
    <div class="absolute inset-0 bg-black/60"></div>
    <!-- Micro-grid overlay (csak a hero-ra!) -->
    <div class="absolute inset-0 pointer-events-none opacity-60 micro-grid"></div>
  </div>

  <!-- FEHÉR BLOKK – BEJEGYZÉSEK -->
  <div class="bg-white py-16 md:py-20">

    <!-- LEGFRISSEBB BEJEGYZÉS – TELJES -->
    <article v-if="featured" class="px-6 max-w-[800px] mx-auto font-body">

      <div class="flex flex-col items-center gap-4 mb-10 text-center">
        <h1 class="!text-[28px] !leading-[32px] !mb-0 md:!text-[36px] md:!leading-[40px] lg:!text-[48px] lg:!leading-[52px]">{{ featured.title }}</h1>
        <span class="inline-block bg-brand-dark text-white text-sm font-prompt font-semibold tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
          No. {{ featured.number }}
        </span>
      </div>

      <div class="rounded-xl overflow-hidden mb-8">
        <img
            :src="`${config.app.baseURL}${featured.coverImage}`"
            :alt="featured.title"
            class="w-full h-auto object-cover"
        />
      </div>

      <p v-for="(paragraph, i) in featured.body.split('\n\n')" :key="i">
        {{ paragraph }}
      </p>

      <NuxtLink
          :to="postLink(featured.slug)"
          class="block text-neutral-500 hover:text-brand text-sm mt-8 pt-6 border-t border-neutral-200 text-center transition-colors"
      >
        {{ formatDate(featured.date) }} &middot; {{ featured.author }}
      </NuxtLink>

    </article>

    <!-- KORÁBBI BEJEGYZÉSEK – LISTA -->
    <section v-if="older.length" class="px-6 max-w-[800px] mx-auto mt-20">

      <div class="max-w-[800px] mx-auto h-[2px] bg-[#851707]/50 mb-12"></div>

      <h2 class="!text-2xl">{{ t.earlierPosts }}</h2>

      <ul class="space-y-6 font-body">
        <li v-for="post in older" :key="post.slug">
          <NuxtLink :to="postLink(post.slug)" class="group block">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="!font-body !text-xl !font-bold !mb-0 !normal-case !tracking-normal group-hover:text-brand transition-colors">
                {{ post.title }}
              </h3>
              <span class="text-sm text-neutral-500 whitespace-nowrap">{{ formatDate(post.date) }}</span>
            </div>
            <p class="!mb-0 !mt-1 text-neutral-500 text-sm">
              {{ t.readMore }}
            </p>
          </NuxtLink>
        </li>
      </ul>

    </section>

  </div>

  <!-- ALSÓ PARALLAX + CTA -->
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
          :to="isEN ? '/en/contact' : '/contact'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
           transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        {{ t.cta }}
      </NuxtLink>
    </div>

  </section>

</template>

<style scoped>
.micro-grid {
  background-image:
      linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 5px 5px;
}
</style>
