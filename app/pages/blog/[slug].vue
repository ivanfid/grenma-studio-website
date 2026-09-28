
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

function isQuestion(paragraph) {
  return /^\d+\.,\s/.test(paragraph)
}

const t = computed(() => isEN.value ? {
  back: '← Back to the blog homepage'
} : {
  back: '← Vissza a blog főoldalára'
})
</script>

<template>

  <!-- FEHÉR BLOKK – CIKK -->
  <div class="bg-white pt-32 md:pt-56 pb-16 md:pb-20">

    <article class="px-6 max-w-[800px] mx-auto font-body">

      <div class="flex flex-col items-center gap-4 mb-10 text-center">
        <h1 class="!text-[28px] !leading-[32px] !mb-0 md:!text-[36px] md:!leading-[40px] lg:!text-[48px] lg:!leading-[52px]">
          <template v-if="post.titleBold">
            <span class="!font-bold">{{ post.titleBold }}</span>
            <span class="!font-normal"> {{ post.titleLight }}</span>
          </template>
          <template v-else>{{ post.title }}</template>
        </h1>
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

      <template v-for="(paragraph, i) in paragraphs" :key="i">
        <div v-if="paragraph === '[IMAGE]' && post.inlineImage" class="rounded-xl overflow-hidden my-8">
          <img
              :src="`${config.app.baseURL}${post.inlineImage}`"
              :alt="post.title"
              class="w-full h-auto object-cover"
          />
        </div>
        <p v-else :class="{ '!font-bold': isQuestion(paragraph) }">{{ paragraph }}</p>
      </template>

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

</template>
