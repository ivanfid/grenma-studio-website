<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    }
  ]
})

// PhotoSwipe CSS
import 'photoswipe/style.css'
</script>

<template>
  <!-- GLOBAL FONT SYSTEM: Inter Medium -->
  <div class="font-body font-medium">
    <Header />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Footer />
  </div>
</template>

<style>
/* GLOBAL HEADINGS  */
h1 {
  @apply font-lato font-black uppercase text-[48px] leading-[52px] tracking-[0.2px] text-[#404040] mb-10;
}
h2 {
  @apply font-lato font-black uppercase text-[36px] leading-[40px] tracking-[0.2px] text-[#404040] mb-8;
}
h3 {
  @apply font-lato font-black uppercase text-[28px] leading-[32px] tracking-[0.2px] text-[#404040] mb-6;
}
p {
  @apply text-lg leading-relaxed text-[#404040] mb-6 text-left;
}

/* Two-line H2 structure */
h2 span:first-child {
  @apply block font-normal;
}

h2 span:last-child {
  @apply block mt-2 font-black;
}
</style>
