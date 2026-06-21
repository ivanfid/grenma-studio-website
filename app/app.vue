<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@300;400;500&display=swap"
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
  }, 200) // kis delay, hogy ne villogjon
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

  <div class="font-oswald">
    <Header />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Footer />
  </div>
</template>

<style>
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
</style>
