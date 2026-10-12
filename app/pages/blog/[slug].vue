
<script setup>
import { computed, onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'
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
const readingTime = blogReadingTime(post)

function isQuestion(paragraph) {
  return /^\d+\.,\s/.test(paragraph)
}

const t = computed(() => isEN.value ? {
  back: '← Back to the blog homepage',
  readingTime: `${readingTime} min read`
} : {
  back: '← Vissza a blog főoldalára',
  readingTime: `${readingTime} perc olvasás`
})

// --- OLVASÁSI PROGRESS BAR ---
// Csak akkor látszik, ha a fejléc összehúzva áll (padding 0, nincs futó animáció).
// Ennek 300ms-ig fenn kell állnia: navigáció után a router csak utána görget
// a tetejére, addig a fejléc még az előző oldal összehúzott állapotában van.
const REVEAL_DELAY_MS = 300
const scrollProgress = ref(0)
const headerHeight = ref(0)
const barVisible = ref(false)
let headerEl = null
let headerResizeObserver = null
let headerClassObserver = null
let settleRafId = null
let revealTimer = null

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollable > 0
    ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100))
    : 0
}

function syncHeaderHeight() {
  if (headerEl) headerHeight.value = headerEl.offsetHeight
}

function headerIsSettled() {
  const cs = getComputedStyle(headerEl)
  return cs.paddingTop === '0px' && cs.paddingBottom === '0px'
    && headerEl.getAnimations().length === 0
}

function cancelReveal() {
  clearTimeout(revealTimer)
  revealTimer = null
}

function checkHeaderState() {
  settleRafId = null
  if (!headerEl) return
  syncHeaderHeight()

  if (headerIsSettled()) {
    if (!barVisible.value && revealTimer === null) {
      revealTimer = setTimeout(() => {
        revealTimer = null
        if (headerEl && headerIsSettled()) {
          syncHeaderHeight()
          barVisible.value = true
        }
      }, REVEAL_DELAY_MS)
    }
    return
  }

  cancelReveal()
  barVisible.value = false
  if (headerEl.getAnimations().length > 0) settleRafId = requestAnimationFrame(checkHeaderState)
}

// Azonnali ellenőrzés, hogy a sáv már festés előtt rejtve legyen.
function checkNow() {
  if (settleRafId !== null) {
    cancelAnimationFrame(settleRafId)
    settleRafId = null
  }
  checkHeaderState()
}

let tracking = false

function startTracking() {
  if (tracking) return
  tracking = true
  updateScrollProgress()
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  window.addEventListener('resize', checkNow)

  headerEl = document.querySelector('header')
  if (headerEl) {
    headerResizeObserver = new ResizeObserver(checkNow)
    headerResizeObserver.observe(headerEl, { box: 'border-box' })
    headerClassObserver = new MutationObserver(checkNow)
    headerClassObserver.observe(headerEl, { attributes: true, attributeFilter: ['class'] })
    headerEl.addEventListener('transitionend', checkNow)
    checkHeaderState()
  }
}

function stopTracking() {
  tracking = false
  window.removeEventListener('scroll', updateScrollProgress)
  window.removeEventListener('resize', checkNow)
  headerResizeObserver?.disconnect()
  headerClassObserver?.disconnect()
  headerEl?.removeEventListener('transitionend', checkNow)
  if (settleRafId !== null) cancelAnimationFrame(settleRafId)
  settleRafId = null
  cancelReveal()
  barVisible.value = false
}

// Az app.vue keepalive-ot használ: elhagyáskor az oldal nem semmisül meg, csak
// deaktiválódik — ezért itt állunk le és indulunk újra, hogy a háttérben ne
// fusson tovább, és visszatéréskor ne a régi, látható állapottal jelenjen meg.
onMounted(startTracking)
onActivated(startTracking)
onDeactivated(stopTracking)
onUnmounted(stopTracking)

// Felfelé kerekítve, hogy ne mutasson "0 perc"-et, amíg van még hátra.
const remainingMinutes = computed(() => Math.ceil(readingTime * (1 - scrollProgress.value / 100)))
const remainingLabel = computed(() => isEN.value ? `${remainingMinutes.value} min left` : `${remainingMinutes.value} perc van hátra`)
</script>

<template>

  <!-- OLVASÁSI PROGRESS BAR -->
  <div
      class="fixed left-0 z-40 h-5 w-full"
      :class="barVisible
        ? 'visible opacity-100 transition-opacity duration-[1000ms] ease-in-out'
        : 'invisible opacity-0 transition-none'"
      :style="{ top: headerHeight + 'px' }"
  >
    <div class="absolute inset-y-0 left-0 bg-brand" :style="{ width: scrollProgress + '%' }"></div>
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-white text-xs font-body font-semibold tracking-wide leading-none pointer-events-none">
      {{ remainingLabel }}
    </div>
  </div>

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
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span class="inline-block bg-brand-dark text-white text-sm font-prompt font-semibold tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
            No. {{ post.number }}
          </span>
          <span class="inline-block bg-brand-dark text-white text-sm font-prompt font-semibold tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
            {{ t.readingTime }}
          </span>
        </div>
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
