<script setup>
useSeoMeta({
  title: 'Rólunk | Grenma Studio',
  description:
      'Ismerd meg a Grenma Studio történetét és szolgáltatásait.'
})
const config = useRuntimeConfig()
</script>

<template>

  <div class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]">

    <!-- Hero background -->
    <div
        class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px]
         bg-cover bg-center
         lg:bg-[center_30%]
         2xl:bg-[center_80%] 2xl:bg-fixed"
        :style="{ backgroundImage: `url(${config.app.baseURL}studio_about.jpg)` }"
    ></div>

    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Micro-grid overlay (csak a hero-ra!) -->
    <div class="absolute inset-0 pointer-events-none opacity-60 micro-grid"></div>

  </div>


  <!-- FEHÉR TARTALOM -->
  <div class="about-page bg-white py-16 md:py-20">

    <!-- 1) KÉP – SZÖVEG -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden">
        <img src="/studio_lounge.jpg" class="w-full h-full object-cover" />
      </div>

      <div>
        <h3>A STÚDIÓ</h3>
        <p>
          Budapesten, a XIII. kerületben találsz meg minket (Dolmány utca 48.).
          40 m²-es közösségi hely, 3 szeparált stúdió (20, 25 és 35 m² helyiség),
          konyha, kulturált mellékhelyiség. Klíma, Wi-Fi, korlátlan kávé- és teafogyasztás,
          énekeseknek, izgulósoknak hűtött Jägermeister:)
          <br><br>
          Mindent megteszünk annak érdekében, hogy otthonosan érezd magad nálunk.
        </p>
      </div>

    </section>

    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>

    <!-- 2) KÉP – SZÖVEG -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden md:order-2">
        <img src="/matyi_profile.jpg" class="w-full h-full object-cover" />
      </div>

      <div class="md:order-1">
        <h3>BOTLIK MÁTYÁS</h3>
        <p>
          Matyi, a Grenma Studio stúdióvezetője 2008 óta készít felvételeket. Végtelen türelemmel és nagy odafigyeléssel dolgozik, a zenészekből a maximumot kihozva.
          Az elmúlt években a modern punk, rock, metal, pop produkciók mellett akusztikus, népzenei és elektronikus zenei projekteken is dolgozott, és nyitott minden stílus irányába.
        </p>
      </div>

    </section>


    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>

    <!-- 3) SZÖVEG – KÉP -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden md:order-1">
        <img src="/dani_profile.jpg" class="w-full h-full object-cover" />
      </div>

      <div class="md:order-2">
        <h3>IVÁNFI DÁNIEL</h3>
        <p>
          Dani 2017 óta foglalkozik felvétel készítéssel, amikor az éppen aktuális zenekara,
          a Stubborn nagylemezének felvételin dolgozott. Azóta megállíthatatlan szenvedéllyel tevékenykedik Metal, Punk Rock, HC
          zenekarok anyagain, legyen szó felvételről, keverésről, editálási feladatokról.
        </p>
      </div>

    </section>

  </div>

  <!-- ALSÓ PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh]
         bg-cover bg-center
         flex items-center justify-center
         xl:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_about_bottom.jpg)` }"
  >


    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">

      <!-- FŐOLDALI CTA GOMB -->
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/studio' : '/studio'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
                 transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        A STÚDIÓK
      </NuxtLink>

    </div>

  </section>

</template>


<style scoped>
.about-page p {
  margin-bottom: 0;
}

.micro-grid {
  background-image:
      linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 5px 5px;
}
</style>

