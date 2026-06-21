<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const mobileOpen = ref(false)
const route = useRoute()

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

const galleryLink = computed(() =>
    route.path.startsWith("/en") ? "/en/gallery" : "/gallery"
)

const contactLink = computed(() =>
    route.path.startsWith("/en") ? "/en/contact" : "/contact"
)

// --- MENU LABELS ---
const labels = computed(() => ({
  home: isEN.value ? "HOME" : "KEZDŐLAP",
  about: isEN.value ? "ABOUT US" : "RÓLUNK",
  gallery: isEN.value ? "GALLERY" : "GALÉRIA",
  contact: isEN.value ? "CONTACT" : "KAPCSOLAT"
}))
</script>

<template>
  <header
      class="w-full fixed top-0 left-0 z-50
           bg-gradient-to-l from-[#b02c07]/20 via-black/80 to-black/95
           backdrop-blur-xl border-b border-white/5"
  >
    <nav class="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">

      <!-- LOGO -->
      <NuxtLink :to="homeLink" class="flex items-center">
        <img src="/logo.png" alt="Logo" class="h-10 w-auto" />
      </NuxtLink>

      <!-- DESKTOP MENU -->
      <div class="hidden md:flex items-center gap-10">

        <ul class="flex items-center gap-8 text-lg">

          <!-- HOME -->
          <li>
            <NuxtLink
                :to="homeLink"
                :class="[
                'relative transition text-white hover:text-[#4fbb9b] ' +
                'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 ' +
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
                'relative transition text-white hover:text-[#4fbb9b] ' +
                'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 ' +
                'after:bg-[#4fbb9b] after:transition-all after:duration-300 hover:after:w-full',
                route.path.startsWith(aboutLink) ? 'text-[#4fbb9b] after:w-full' : ''
              ]"
            >
              {{ labels.about }}
            </NuxtLink>
          </li>

          <!-- GALLERY -->
          <li>
            <NuxtLink
                :to="galleryLink"
                :class="[
                'relative transition text-white hover:text-[#4fbb9b] ' +
                'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 ' +
                'after:bg-[#4fbb9b] after:transition-all after:duration-300 hover:after:w-full',
                route.path.startsWith(galleryLink) ? 'text-[#4fbb9b] after:w-full' : ''
              ]"
            >
              {{ labels.gallery }}
            </NuxtLink>
          </li>

          <!-- CONTACT -->
          <li>
            <NuxtLink
                :to="contactLink"
                :class="[
                'relative transition text-white hover:text-[#4fbb9b] ' +
                'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 ' +
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
              :class="isHU ? 'text-[#4fbb9b] font-bold' : 'text-white hover:text-[#4fbb9b]'"
          >
            HU
          </NuxtLink>

          <span>|</span>

          <NuxtLink
              :to="toEN"
              class="transition"
              :class="isEN ? 'text-[#4fbb9b] font-bold' : 'text-white hover:text-[#4fbb9b]'"
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

        <li>
          <NuxtLink
              :to="homeLink"
              @click="mobileOpen = false"
              class="text-white hover:text-[#4fbb9b]"
          >
            {{ labels.home }}
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              :to="aboutLink"
              @click="mobileOpen = false"
              class="text-white hover:text-[#4fbb9b]"
          >
            {{ labels.about }}
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              :to="galleryLink"
              @click="mobileOpen = false"
              class="text-white hover:text-[#4fbb9b]"
          >
            {{ labels.gallery }}
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              :to="contactLink"
              @click="mobileOpen = false"
              class="text-white hover:text-[#4fbb9b]"
          >
            {{ labels.contact }}
          </NuxtLink>
        </li>

      </ul>

      <!-- MOBILE LANG SWITCH -->
      <div class="flex items-center gap-4 mt-4 text-white text-lg">
        <NuxtLink
            :to="toHU"
            @click="mobileOpen = false"
            :class="isHU ? 'text-[#4fbb9b] font-bold' : 'hover:text-[#4fbb9b]'"
        >
          HU
        </NuxtLink>

        <NuxtLink
            :to="toEN"
            @click="mobileOpen = false"
            :class="isEN ? 'text-[#4fbb9b] font-bold' : 'hover:text-[#4fbb9b]'"
        >
          EN
        </NuxtLink>
      </div>
    </div>

  </header>
</template>
