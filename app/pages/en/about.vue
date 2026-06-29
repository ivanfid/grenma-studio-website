<script setup>
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

    <!-- Micro-grid overlay -->
    <div
        class="absolute inset-0 pointer-events-none opacity-60"
        style="
      background-image:
        linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
      background-size: 5px 5px;
    "
    ></div>

  </div>


  <!-- WHITE CONTENT -->
  <div class="bg-white py-16 md:py-20">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-20">
      <h2>ABOUT US</h2>
      <p class="max-w-2xl mx-auto text-center">
        Grenma Studio is a modern, friendly and professional environment
        designed to help you get the absolute best out of your music.
      </p>
    </section>

    <!-- 1) IMAGE – TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mb-12 md:mb-24 items-center">

      <div class="rounded-xl overflow-hidden">
        <img src="/studio_lounge.jpg" class="w-full h-full object-cover" />
      </div>

      <div>
        <h3>THE STUDIO</h3>
        <p>
          You can find us in Budapest, District XIII (Dolmány utca 48).
          A 40 m² community area, 3 studio rooms (a 25 m² control room,
          and two live rooms of 35 m² and 20 m²), kitchen, clean restroom,
          air conditioning, Wi‑Fi, unlimited coffee and tea —
          and for singers or the nervous ones, chilled Jägermeister :)
          <br><br>
          We do everything we can to make you feel at home while working with us.
        </p>
      </div>

    </section>

    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>

    <!-- 2) IMAGE – TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mb-12 md:mb-24 items-center">

      <div class="rounded-xl overflow-hidden md:order-2">
        <img src="/matyi_profile.jpg" class="w-full h-full object-cover" />
      </div>

      <div class="md:order-1">
        <h3>MÁTYÁS BOTLIK</h3>
        <p>
          Matyi has been recording since 2008, always with endless patience
          and attention to detail. He feels at home in modern punk, rock, metal,
          pop, acoustic, folk and electronic projects alike.
        </p>
      </div>

    </section>


    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>

    <!-- 3) TEXT – IMAGE -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mb-12 md:mb-24 items-center">

      <div class="rounded-xl overflow-hidden md:order-1">
        <img src="/dani_profile.jpg" class="w-full h-full object-cover" />
      </div>

      <div class="md:order-2">
        <h3>DÁNIEL IVÁNFI</h3>
        <p>
          Dani has been working seriously with recording since 2017,
          when he worked on the debut album of his band Stubborn.
          Since then, he has been passionately involved in metal, punk rock
          and hardcore productions — recording, mixing and editing.
        </p>
      </div>

    </section>

  </div>

  <!-- BOTTOM PARALLAX + CTA -->
  <section
      class="relative w-full h-[22vh] sm:h-[30vh] md:h-[45vh] bg-cover bg-center flex items-center justify-center md:bg-fixed"
      :style="{ backgroundImage: `url(${config.app.baseURL}studio_about_bottom.jpg)` }"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 text-center">

      <NuxtLink
          :to="$route.path.startsWith('/en') ? '/en/studio' : '/studio'"
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-lato font-bold
                 transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        THE STUDIOS
      </NuxtLink>

    </div>

  </section>

</template>
