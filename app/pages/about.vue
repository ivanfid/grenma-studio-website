<script setup>
const config = useRuntimeConfig()
</script>

<template>

  <!-- FIX HERO BACKGROUND -->
  <div
      class="w-full h-[22vh] sm:h-[30vh] md:h-[45vh] min-h-[300px] bg-cover bg-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_about.jpg)` }"
  ></div>

  <!-- FEHÉR TARTALOM -->
  <div class="bg-white text-black py-20">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-20 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">RÓLUNK</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        A Grenma Studio egy modern, barátságos és professzionális környezet,
        ahol minden adott ahhoz, hogy a maximumot hozd ki a zenédből.
      </p>
    </section>

    <!-- 1) KÉP – SZÖVEG -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mb-12 md:mb-24 items-center font-body">

      <div class="rounded-xl overflow-hidden">
        <img src="/studio_lounge.jpg" class="w-full h-full object-cover" />
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-4 font-oswald">A STÚDIÓ</h2>
        <p class="opacity-80 leading-relaxed">
          Budapesten, a XIII. kerületben találsz meg minket (Dolmány utca 48.).
          40 m²-es közösségi hely, 3 stúdióhelység (25 m² lehallgató, 35 m² és 20 m² feljátszók),
          konyha, kulturált mellékhelység. Klíma, Wi-Fi, korlátlan kávé- és teafogyasztás,
          énekeseknek, izgulósoknak hűtött Jägermeister :)
          <br><br>
          Mindent megteszünk annak érdekében, hogy otthonosan érezd magad nálunk.
        </p>
      </div>

    </section>

    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>


    <!-- 2) SZÖVEG – KÉP -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mb-12 md:mb-24 items-center font-body">


    <div>
        <h2 class="text-3xl font-bold mb-6 font-oswald">A TECHNIKA</h2>
        <p class="opacity-80 leading-relaxed">
          A felszerelésünk Pro Tools alapú, rengeteg plug‑innel és virtuális hangszerrel,
          bivalyerős Mac Mini, Apogee, Focusrite, Audient, Gainlab, Distressor, WA‑76,
          Genelec és Dynaudio lehallgatás, Telefunken, AKG, Neumann, Warm Audio,
          Audio Technica, Shure, Sennheiser, Rode mikrofonok.
          <br><br>
          A felvételhez bérelhető hangszerek listája pedig szinte végtelen :)
        </p>
      </div>

      <div class="rounded-xl overflow-hidden">
        <img src="/studio_technika.jpg" class="w-full h-full object-cover" />
      </div>

    </section>

    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>



    <!-- 3) KÉP – SZÖVEG -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mb-12 md:mb-24 items-center font-body">


    <div class="rounded-xl overflow-hidden">
        <img src="/matyi_profile.jpg" class="w-full h-full object-cover" />
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-4 font-oswald">BOTLIK MÁTYÁS</h2>
        <p class="opacity-80 leading-relaxed">
          Matyi 2008 óta készít felvételeket, végtelen türelemmel és odafigyeléssel.
          Modern punk, rock, metal, pop, akusztikus, népzenei és elektronikus projektekben
          egyaránt otthonosan mozog.
        </p>
      </div>

    </section>

  </div>

  <!-- ALSÓ PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] bg-cover bg-center flex items-center justify-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_about.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">

      <!-- FŐOLDALI CTA GOMB -->
      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/studio' : '/studio'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-semibold
                 transition-all duration-300 hover:bg-brand/100 hover:border-brand/100"
      >
        Stúdió
      </NuxtLink>

    </div>

  </section>


</template>
