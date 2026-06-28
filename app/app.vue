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

// LOADER LOGIC
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const router = useRouter()

router.beforeEach(() => {
  loading.value = true
})

router.afterEach(() => {
  setTimeout(() => {
    loading.value = false
  }, 200)
})
</script>

<template>
  <!-- GLOBAL LOADER -->
  <div
      v-if="loading"
      class="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[9999]"
  >
    <div class="loader"></div>
  </div>

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
/* LOADER */
.loader {
  width: 48px;
  height: 48px;
  border: 4px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

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
