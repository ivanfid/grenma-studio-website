<script setup>
import { ref } from "vue"
const config = useRuntimeConfig()

// melyik árpanel legyen nyitva
const openPanel = ref(null)

const openPrices = (type) => {
  openPanel.value = type
}

const closePrices = () => {
  openPanel.value = null
}
</script>

<template>

  <!-- HERO BACKGROUND -->
  <div
      class="w-full h-[60vh] md:h-[50vh] min-h-[350px] bg-cover bg-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_gallery.jpg)` }"
  ></div>


  <!-- FEHÉR TARTALOM -->
  <div class="bg-white text-black py-20 md:py-28">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-10 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">STÚDIÓ</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        Felvétel, keverés, masterelés, editálás és minden, ami a professzionális hangzásig vezet.
      </p>
    </section>


    <!-- KÉT NAGY SZOLGÁLTATÁS CARD -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 font-body mt-10">

      <!-- FELVÉTEL CARD -->
      <div
          @click="openPrices('recording')"
          class="cursor-pointer bg-white border border-neutral-300 rounded-xl p-10 shadow-sm text-center transition hover:shadow-lg hover:-translate-y-1"
      >

        <div class="w-32 h-32 mx-auto mb-6">
          <img src="@/assets/studio/icon_recording.png" class="w-full h-full object-contain" />
        </div>

        <h2 class="text-3xl font-oswald font-bold mb-4">FELVÉTEL</h2>

        <p class="text-neutral-700 leading-relaxed">
          Sávonkénti, vagy akár egyben játszós felvételek készítése, Re-amp, dobfelvétel, ének, egyéb hangszerek rögzítése.
        </p>

        <p class="mt-6 font-semibold text-[#851707] tracking-wide">
          Árak →
        </p>

      </div>


      <!-- MIXING / MASTERELÉS CARD -->
      <div
          @click="openPrices('mixing')"
          class="cursor-pointer bg-white border border-neutral-300 rounded-xl p-10 shadow-sm text-center transition hover:shadow-lg hover:-translate-y-1"
      >

        <div class="w-32 h-32 mx-auto mb-6">
          <img src="@/assets/studio/icon_mixing.png" class="w-full h-full object-contain" />
        </div>

        <h2 class="text-3xl font-oswald font-bold mb-4">KEVERÉS / MASTERELÉS</h2>

        <p class="text-neutral-700 leading-relaxed">
          Akár a nálunk elkészűlt felvételek editálását, keverését, masterelését is kérheted, de hozott anyagból is szívesen dolgozunk.
        </p>

        <p class="mt-6 font-semibold text-[#851707] tracking-wide">
          Árak →
        </p>

      </div>

    </section>

  </div>


  <!-- KÖZÉPRE UGRÓ MODAL ÁR PANEL -->
  <transition name="fade">
    <div
        v-if="openPanel"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
        @click.self="closePrices"
    >
      <transition name="pop">
        <div
            v-if="openPanel"
            class="bg-white rounded-2xl p-10 shadow-2xl max-w-[500px] w-[90%] text-center"
        >

          <h3 class="text-2xl font-oswald font-bold mb-4">
            {{ openPanel === 'recording' ? 'Felvétel – Árak' : 'Keverés / Masterelés – Árak' }}
          </h3>

          <div class="text-neutral-800 text-lg leading-relaxed">

            <template v-if="openPanel === 'recording'">
              <p>Felvétel: <strong>10.000 Ft / óra</strong></p>
              <p class="mt-2">Dobfelvétel: <strong>25.000 Ft / óra</strong></p>
              <p class="mt-2">Re-amp: <strong>5.000 Ft / track</strong></p>
            </template>

            <template v-else>
              <p>Mixing: <strong>25.000 Ft / dal</strong></p>
              <p class="mt-2">Masterelés: <strong>15.000 Ft / dal</strong></p>
              <p class="mt-2">Stem mixing: <strong>35.000 Ft / dal</strong></p>
            </template>

          </div>

          <!-- Minimalista bezárás -->
          <button
              @click="closePrices"
              class="mt-6 text-[#851707] font-semibold hover:opacity-70 transition"
          >
            Bezárás
          </button>

        </div>
      </transition>
    </div>
  </transition>

</template>

<style scoped>
/* Fade overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Pop-in modal */
.pop-enter-active,
.pop-leave-active {
  transition: all 0.25s ease-out;
}
.pop-enter-from,
.pop-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
</style>
