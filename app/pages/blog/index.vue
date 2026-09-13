
<script setup>
const config = useRuntimeConfig()
const posts = useBlogPosts()

useSeoMeta({
  title: 'Blog | Grenma Studio',
  description: 'Hírek, tippek és sztorik a Grenma Studióból.'
})

function formatDate(iso) {
  const [y, m, d] = iso.split('-')
  return `${y}. ${m}. ${d}.`
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

    <section class="px-6 max-w-[1200px] mx-auto text-center mb-14 font-body">
      <p class="text-lg max-w-3xl mx-auto text-center">
        Hírek, tippek és sztorik a Grenma Studióból.
      </p>
    </section>

    <section class="px-6 max-w-[1200px] mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <NuxtLink
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group block rounded-xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <div class="relative h-52 overflow-hidden">
            <img
                :src="`${config.app.baseURL}${post.coverImage}`"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div class="absolute top-3 left-3 bg-brand-dark/90 text-white text-xs font-prompt font-semibold tracking-wide px-3 py-1 rounded-full">
              No. {{ post.number }}
            </div>
          </div>

          <div class="p-6">
            <h3 class="!text-xl !mb-2 !leading-tight group-hover:text-brand transition-colors">
              {{ post.title }}
            </h3>

            <div class="text-sm text-neutral-500 mb-3 font-body">
              {{ formatDate(post.date) }} &middot; {{ post.author }}
            </div>

            <p class="!text-base !mb-0 !text-neutral-600 line-clamp-3">
              {{ blogExcerpt(post) }}
            </p>
          </div>
        </NuxtLink>

      </div>
    </section>

  </div>

</template>

<style scoped>
.micro-grid {
  background-image:
      linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 5px 5px;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
