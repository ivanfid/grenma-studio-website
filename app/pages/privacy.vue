
<template>
  <main class="w-full pt-32 md:pt-56 pb-20">
    <div class="max-w-[1200px] mx-auto px-6">

      <div class="max-w-4xl">

        <h2 class="text-3xl md:text-3xl font-bold mb-6">{{ t.heading }}</h2>

        <div class="w-24 h-px bg-[#b02c07] mb-10"></div>

        <section class="mb-12">
          <p class="leading-8 mb-6">{{ t.p1 }}</p>

          <p class="leading-8 mb-6">{{ t.p2 }}</p>

          <p class="leading-8 mb-6">{{ t.p3 }}</p>

          <p class="leading-8">{{ t.p4 }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ t.contactHeading }}</h2>

          <p class="leading-8">{{ t.contactText }}</p>

          <p class="mt-4 font-semibold">
            info@grenmastudio.hu
          </p>
        </section>

      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isEN = computed(() => route.path.startsWith('/en'))
const t = computed(() => useSiteContent('privacy', isEN.value ? 'en' : 'hu'))

useSeoMeta({
  title: computed(() => t.value.seoTitle),
  description: computed(() => t.value.seoDescription)
})
</script>
