
<script setup>
useSeoMeta({
  ogImage: 'https://grenmastudio.hu/og-image.jpg',
  ogUrl: 'https://grenmastudio.hu',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterImage: 'https://grenmastudio.hu/og-image.jpg'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://grenmastudio.hu'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
    }
  ]
})

// PhotoSwipe CSS
import 'photoswipe/style.css'
</script>


<template>
  <div class="font-body font-medium">
    <Header />

    <NuxtLayout>
      <NuxtPage keepalive />
    </NuxtLayout>

    <Footer />

    <CookieBanner />
  </div>
</template>

<style>
/* GLOBAL HEADINGS  */
h1 {
  @apply font-prompt font-bold uppercase text-[48px] leading-[52px] tracking-[0.2px] text-[#404040] mb-10;
}
h2 {
  @apply font-prompt font-bold uppercase text-[36px] leading-[40px] tracking-[0.2px] text-[#404040] mb-8;
}
h3 {
  @apply font-prompt font-bold uppercase text-[28px] leading-[32px] tracking-[0.2px] text-[#404040] mb-6;
}
p {
  @apply text-lg leading-relaxed text-[#404040] mb-6 text-left
  md:leading-8 md:text-neutral-600 md:mb-5;
}

/* Two-line H2 structure */
h3 span:first-child {
  @apply block font-normal;
}

h3 span:last-child {
  @apply block mt-2 font-bold;
}
</style>