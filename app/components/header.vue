<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const mobileOpen = ref(false)
const route = useRoute()

// --- ACTIVE LANGUAGE ---
const isEN = computed(() => route.path.startsWith("/en"))
const isHU = computed(() => !route.path.startsWith("/en"))

// --- LANGUAGE SWITCHER FIX ---
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

// --- HOME LINK FIX ---
const homeLink = computed(() => {
  return route.path.startsWith("/en") ? "/en" : "/"
})

// --- GALLERY LINK ---
const galleryLink = computed(() => {
  return route.path.startsWith("/en") ? "/en/gallery" : "/gallery"
})

// --- CONTACT LINK ---
const contactLink = computed(() => {
  return route.path.startsWith("/en") ? "/en/contact" : "/contact"
})
</script>

<template>
  <header class="w-full bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50">
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
                class="text-white hover:text-[#4fbb9b] transition"
            >
              HOME
            </NuxtLink>
          </li>

          <!-- GALLERY -->
          <li>
            <NuxtLink
                :to="galleryLink"
                class="text-white hover:text-[#4fbb9b] transition"
            >
              GALLERY
            </NuxtLink>
          </li>

          <!-- CONTACT -->
          <li>
            <NuxtLink
                :to="contactLink"
                class="text-white hover:text-[#4fbb9b] transition"
            >
              CONTACT
            </NuxtLink>
          </li>

        </ul>

        <!-- LANGUAGE SWITCHER -->
        <div class="flex items-center gap-3 text-white text-sm">

          <!-- HU -->
          <NuxtLink
              :to="toHU"
              class="transition"
              :class="isHU ? 'text-[#4fbb9b] font-bold' : 'text-white hover:text-[#4fbb9b]'"
          >
            HU
          </NuxtLink>

          <span>|</span>

          <!-- EN -->
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
            HOME
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              :to="galleryLink"
              @click="mobileOpen = false"
              class="text-white hover:text-[#4fbb9b]"
          >
            GALLERY
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              :to="contactLink"
              @click="mobileOpen = false"
              class="text-white hover:text-[#4fbb9b]"
          >
            CONTACT
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
