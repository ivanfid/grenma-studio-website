<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"

const mobileOpen = ref(false)
const route = useRoute()

// --- SHRINK ON SCROLL ---
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

// --- ACTIVE LANGUAGE ---
const isEN = computed(() => route.path.startsWith("/en"))
const isHU = computed(() => !route.path.startsWith("/en"))

// --- LANGUAGE SWITCHER ---
const toEN = computed(() => {
  if (route.path.startsWith("/en")) return route.path
  if (route.path === "/") return "/en"
  return `/en${route.path}`
})

const toHU = computed(() => {
  if (route.path.startsWith("/en")) {
    const hu = route.path.replace("/en", "")
    return hu === "" ? "/" : hu
  }
  return route.path
})

// --- LINKS ---
const homeLink = computed(() =>
    route.path.startsWith("/en") ? "/en" : "/"
)

const aboutLink = computed(() =>
    route.path.startsWith("/en") ? "/en/about" : "/about"
)

const referencesLink = computed(() =>
    route.path.startsWith("/en") ? "/en/references" : "/references"
)

const pricingLink = computed(() =>
    route.path.startsWith("/en") ? "/en/pricing" : "/pricing"
)

const contactLink = computed(() =>
    route.path.startsWith("/en") ? "/en/contact" : "/contact"
)

// --- MENU LABELS ---
const labels = computed(() => ({
  home: isEN.value ? "HOME" : "KEZDŐLAP",
  about: isEN.value ? "ABOUT US" : "RÓLUNK",
  gallery: isEN.value ? "REFERENCES" : "REFERENCIÁK",
  pricing: isEN.value ? "PRICING" : "ÁRAK",
  contact: isEN.value ? "CONTACT" : "KAPCSOLAT"
}))
</script>

<template>
  <header
      :class="[
    'w-full fixed top-0 left-0 z-50 transition-all duration-600 ease-[cubic-bezier(0.4,0.0,0.2,1)]',
    'bg-gradient-to-l from-[#b02c07]/20 via-black/80 to-black/95 backdrop-blur-xl border-b border-white/5',

    !mobileOpen && !isScrolled ? 'py-8' : '',
    !mobileOpen && isScrolled ? 'py-3 shadow-lg' : '',
    mobileOpen ? 'py-6' : ''
  ]"
  >

    <nav class="max-w-[1200px] mx-auto flex items-center justify-between px-6">

      <!-- LOGO -->
      <NuxtLink :to="homeLink" class="flex items-center">
        <img src="/logo.png" alt="Logo" class="h-10 w-auto transition-all duration-300"
             :class="isScrolled ? 'scale-90 opacity-90' : 'scale-100 opacity-100'" />
      </NuxtLink>

      <!-- DESKTOP MENU -->
      <div class="hidden md:flex items-center gap-10">

        <ul class="flex items-center gap-8 text-lg">

          <!-- HOME -->
          <li>
            <NuxtLink
                :to="homeLink"
                :class="[
                  'relative transition text-white hover:text-[#4fbb9b]',
                  'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0',
                  'after:bg-[#4fbb9b] after:transition-all after:duration-300 hover:after:w-full',
                  route.path === homeLink ? 'text-[#4fbb9b] after:w-full' : ''
                ]"
            >
              {{ labels.home }}
            </NuxtLink>
          </li>

          <!-- ABOUT -->
          <li>
            <NuxtLink
                :to="aboutLink"
                :class="[
                  'relative transition text-white hover:text-[#4fbb9b]',
                  'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0',
                  'after:bg-[#4fbb9b] after:transition-all after:duration-300 hover:after:w-full',
                  route.path.startsWith(aboutLink) ? 'text-[#4fbb9b] after:w-full' : ''
                ]"
            >
              {{ labels.about }}
            </NuxtLink>
          </li>

          <!-- REFERENCES -->
          <li>
            <NuxtLink
                :to="referencesLink"
                :class="[
                  'relative transition text-white hover:text-[#4fbb9b]',
                  'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0',
                  'after:bg-[#4fbb9b] after:transition-all after:duration-300 hover:after:w-full',
                  route.path.startsWith(referencesLink) ? 'text-[#4fbb9b] after:w-full' : ''
                ]"
            >
              {{ labels.gallery }}
            </NuxtLink>
          </li>

          <!-- ⭐ PRICING / ÁRAK -->
          <li>
            <NuxtLink
                :to="pricingLink"
                :class="[
                  'relative transition text-white hover:text-[#4fbb9b]',
                  'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0',
                  'after:bg-[#4fbb9b] after:transition-all after:duration-300 hover:after:w-full',
                  route.path.startsWith(pricingLink) ? 'text-[#4fbb9b] after:w-full' : ''
                ]"
            >
              {{ labels.pricing }}
            </NuxtLink>
          </li>

          <!-- CONTACT -->
          <li>
            <NuxtLink
                :to="contactLink"
                :class="[
                  'relative transition text-white hover:text-[#4fbb9b]',
                  'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0',
                  'after:bg-[#4fbb9b] after:transition-all after:duration-300 hover:after:w-full',
                  route.path.startsWith(contactLink) ? 'text-[#4fbb9b] after:w-full' : ''
                ]"
            >
              {{ labels.contact }}
            </NuxtLink>
          </li>

        </ul>

        <!-- LANGUAGE SWITCHER -->
        <div class="flex items-center gap-3 text-white text-sm">
          <NuxtLink
              :to="toHU"
              class="transition"
              :class="isHU ? 'text-[#4fbb9b] font-bold' : 'hover:text-[#4fbb9b]'"
          >
            HU
          </NuxtLink>

          <span>|</span>

          <NuxtLink
              :to="toEN"
              class="transition"
              :class="isEN ? 'text-[#4fbb9b] font-bold' : 'hover:text-[#4fbb9b]'"
          >
            EN
          </NuxtLink>
        </div>

      </div>

      <!-- MOBILE MENU BUTTON -->
      <button
          class="md:hidden text-white text-3xl"
          @click="mobileOpen = !mobileOpen"
      >
        <span v-if="!mobileOpen">☰</span>
        <span v-else>✕</span>
      </button>

    </nav>

    <!-- MOBILE MENU -->
    <div
        v-if="mobileOpen"
        class="md:hidden bg-black/95 px-6 py-4"
    >
      <ul class="flex flex-col gap-4 text-lg">

        <li><NuxtLink :to="homeLink" @click="mobileOpen = false" class="text-white hover:text-[#4fbb9b]">{{ labels.home }}</NuxtLink></li>
        <li><NuxtLink :to="aboutLink" @click="mobileOpen = false" class="text-white hover:text-[#4fbb9b]">{{ labels.about }}</NuxtLink></li>
        <li><NuxtLink :to="referencesLink" @click="mobileOpen = false" class="text-white hover:text-[#4fbb9b]">{{ labels.references }}</NuxtLink></li>
        <li><NuxtLink :to="pricingLink" @click="mobileOpen = false" class="text-white hover:text-[#4fbb9b]">{{ labels.pricing }}</NuxtLink></li>
        <li><NuxtLink :to="contactLink" @click="mobileOpen = false" class="text-white hover:text-[#4fbb9b]">{{ labels.contact }}</NuxtLink></li>

      </ul>

      <!-- MOBILE LANG SWITCH -->
      <div class="flex items-center gap-4 mt-4 text-white text-lg">
        <NuxtLink :to="toHU" @click="mobileOpen = false" :class="isHU ? 'text-[#4fbb9b] font-bold' : 'hover:text-[#4fbb9b]'">HU</NuxtLink>
        <NuxtLink :to="toEN" @click="mobileOpen = false" :class="isEN ? 'text-[#4fbb9b] font-bold' : 'hover:text-[#4fbb9b]'">EN</NuxtLink>
      </div>
    </div>

  </header>
</template>
