
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const config = useRuntimeConfig()
const isEN = computed(() => route.path.startsWith('/en'))
const lang = computed(() => isEN.value ? 'en' : 'hu')

const post = useBlogPost(route.params.slug, lang.value)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: isEN.value ? 'Post not found' : 'A bejegyzés nem található' })
}

useSeoMeta({
  title: `${post.title} | Grenma Studio Blog`,
  description: blogExcerpt(post).slice(0, 160),
  ogImage: `https://grenmastudio.hu/${post.coverImage}`,
  ogType: 'article'
})

function formatDate(iso) {
  const [y, m, d] = iso.split('-')
  return `${y}. ${m}. ${d}.`
}

const paragraphs = post.body.split('\n\n')

const t = computed(() => isEN.value ? {
  back: '← Back to the blog homepage',
  cta: 'CONTACT'
} : {
  back: '← Vissza a blog főoldalára',
  cta: 'KAPCSOLAT'
})
</script>

<template>

  <!-- HERO WRAPPER (általános, nem cikkenként cserélődő kép) -->
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
    <div class="absolute inset-0 pointer-events-none opacity-60 micro-grid"></div>
  </div>

  <!-- FEHÉR BLOKK – CIKK -->
  <div class="bg-white py-16 md:py-20">

    <article class="px-6 max-w-[800px] mx-auto font-body">

      <div class="flex flex-col items-center gap-4 mb-10 text-center">
        <h1 class="!text-[28px] !leading-[32px] !mb-0 md:!text-[36px] md:!leading-[40px] lg:!text-[48px] lg:!leading-[52px]">{{ post.title }}</h1>
        <span class="inline-block bg-brand-dark text-white text-sm font-prompt font-semibold tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
          No. {{ post.number }}
        </span>
      </div>

      <!-- A CIKK SAJÁT KÉPE — itt, a szövegben, nem hero-ként -->
      <div class="rounded-xl overflow-hidden mb-8">
        <img
            :src="`${config.app.baseURL}${post.coverImage}`"
            :alt="post.title"
            class="w-full h-auto object-cover"
        />
      </div>

      <p v-for="(paragraph, i) in paragraphs" :key="i">
        {{ paragraph }}
      </p>

      <div class="text-neutral-500 text-sm mt-8 pt-6 border-t border-neutral-200 text-center">
        {{ formatDate(post.date) }} &middot; {{ post.author }}
      </div>

    </article>

    <div class="px-6 max-w-[800px] mx-auto mt-10 text-center">
      <NuxtLink
          :to="isEN ? '/en/blog' : '/blog'"
          class="inline-block text-brand hover:text-brand-dark font-prompt font-semibold tracking-wide transition"
      >
        {{ t.back }}
      </NuxtLink>
    </div>

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
