<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isEN = computed(() => route.path.startsWith('/en'))

const aboutLink = computed(() => isEN.value ? '/en/about' : '/about')
const studioLink = computed(() => isEN.value ? '/en/studio' : '/studio')
const referencesLink = computed(() => isEN.value ? '/en/references' : '/references')
const pricingLink = computed(() => isEN.value ? '/en/pricing' : '/pricing')
const contactLink = computed(() => isEN.value ? '/en/contact' : '/contact')
</script>
<template>

  <footer
      class="w-full py-14
         bg-black
         bg-gradient-to-r from-[#b02c07]/20 via-black/95 to-black
         backdrop-blur-md border-t border-white/5"
  >
    <div class="max-w-[1200px] mx-auto px-6">

      <div
          class="flex flex-col md:flex-row
             justify-between gap-10"
      >

        <!-- Brand -->
        <div>
          <h3
              class="font-prompt font-bold tracking-[0.2em]
         text-white text-lg"
          >
            {{ isEN ? 'GRENMA STUDIO' : 'GRENMA STÚDIÓ' }}
          </h3>

          <p class="text-white/50 text-sm mt-3 max-w-xs">
            {{
              isEN
                  ? 'Professional recording studio for music production, recording, mixing and mastering.'
                  : 'Professzionális hangstúdió felvételhez, zenei produkcióhoz, keveréshez és masteringhez.'
            }}
          </p>
        </div>

        <!-- Sitemap -->
        <div>
          <h4
              class="text-white/70 text-xs tracking-[0.2em]
                 mb-4"
          >
            SITEMAP
          </h4>

          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink :to="aboutLink" class="text-white/80 hover:text-white">
                {{ isEN ? 'About Us' : 'Rólunk' }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink :to="studioLink" class="text-white/80 hover:text-white">
                {{ isEN ? 'Studio' : 'Stúdió' }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink :to="referencesLink" class="text-white/80 hover:text-white">
                {{ isEN ? 'References' : 'Referenciák' }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink :to="pricingLink" class="text-white/80 hover:text-white">
                {{ isEN ? 'Pricing' : 'Árak' }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink :to="contactLink" class="text-white/80 hover:text-white">
                {{ isEN ? 'Contact' : 'Kapcsolat' }}
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <div
          class="mt-10 pt-6 border-t border-white/10
             flex items-center justify-center gap-8"
      >
        <a href="https://www.facebook.com/grenmastudio" target="_blank"
           class="text-white text-2xl hover:text-blue-400 transition">
          <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="https://www.youtube.com/playlist?list=PLcP9qeQqGLtc" target="_blank"
        class="text-white text-2xl hover:text-red-500 transition">
        <i class="fa-brands fa-youtube"></i>
        </a>

        <a href="https://www.instagram.com/grenmastudio/" target="_blank"
           class="text-white text-2xl hover:text-pink-400 transition">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>

      <div class="text-center text-white/40 text-xs mt-6 space-x-4">
        <span>© 2026 Grenma Studio</span>

        <NuxtLink
            :to="isEN ? '/en/privacy' : '/privacy'"
            class="hover:text-white transition"
        >
          {{ isEN ? 'Privacy Policy' : 'Adatkezelési tájékoztató' }}
        </NuxtLink>

        <button
            class="hover:text-white transition"
            @click="openCookieSettings"
        >
          {{ isEN ? 'Cookie Settings' : 'Cookie beállítások' }}
        </button>
      </div>



    </div>
  </footer>
</template>
<script setup lang="ts">
</script>