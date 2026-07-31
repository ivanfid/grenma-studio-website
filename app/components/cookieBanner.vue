<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isEN = computed(() => route.path.startsWith('/en'))

const visible = ref(false)

const enableAnalytics = () => {
  if ((window as any).gtag) return

  const script = document.createElement('script')
  script.async = true
  script.src =
      'https://www.googletagmanager.com/gtag/js?id=G-3BH9LSFQQ4'

  document.head.appendChild(script)

  ;(window as any).dataLayer =
      (window as any).dataLayer || []

  ;(window as any).gtag = function () {
    ;(window as any).dataLayer.push(arguments)
  }

  ;(window as any).gtag('js', new Date())

  ;(window as any).gtag('config', 'G-3BH9LSFQQ4', {
    send_page_view: true
  })
}

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')

  if (!consent) {
    visible.value = true
    return
  }

  if (consent === 'accepted') {
    enableAnalytics()
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')

  enableAnalytics()

  visible.value = false
}

const rejectCookies = () => {
  localStorage.setItem('cookie-consent', 'rejected')

  visible.value = false
}
</script>

<template>
  <Transition name="fade">
    <div
        v-if="visible"
        class="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-lg z-[9999]
             bg-neutral-900 border border-white/10 rounded-2xl
             shadow-2xl p-6 text-white"
    >
      <h3 class="text-white text-lg mb-3">
        {{ isEN ? 'Cookie Settings' : 'Cookie beállítások' }}
      </h3>

      <p class="text-white/80 text-sm mb-5">
        {{
          isEN
              ? 'This website uses analytics cookies to measure traffic and improve the user experience. By clicking Accept, you consent to the use of these cookies.'
              : 'Az oldal analitikai sütiket használ a látogatottság mérésére és a felhasználói élmény javítására. Az „Elfogadom” gombra kattintva hozzájárulsz ezen sütik használatához.'
        }}
      </p>

      <div class="flex gap-3 justify-end">
        <button
            @click="rejectCookies"
            class="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
        >
          {{ isEN ? 'Reject' : 'Elutasítom' }}
        </button>

        <button
            @click="acceptCookies"
            class="px-4 py-2 rounded-lg bg-brand-dark hover:opacity-90 transition"
        >
          {{ isEN ? 'Accept' : 'Elfogadom' }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>