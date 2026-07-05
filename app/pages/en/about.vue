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
  <div class="about-page bg-white py-16 md:py-20">

    <!-- 1) IMAGE – TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden">
        <img src="/studio_lounge.jpg" class="w-full h-full object-cover" />
      </div>

      <div>
        <h3>THE STUDIO</h3>
        <p>
          You can find us in Budapest's 13th district (48 Dolmány Street).
          A 40 m² creative space featuring 3 separate studios (20, 25, and 35 m² rooms),
          a kitchen, and clean restroom facilities. Air conditioning, Wi-Fi,
          unlimited coffee and tea, and for singers or nervous performers, chilled Jägermeister :)
          <br><br>
          We do everything we can to make you feel at home.
        </p>
      </div>

    </section>

    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>

    <!-- 2) IMAGE – TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden md:order-2">
        <img src="/matyi_profile.jpg" class="w-full h-full object-cover" />
      </div>

      <div class="md:order-1">
        <h3>MÁTYÁS BOTLIK</h3>
        <p>
          Matyi, the studio manager of Grenma Studio, has been recording music since 2008.
          He works with endless patience and great attention to detail, always bringing out the best in musicians.
          Over the years, he has worked on modern punk, rock, metal, and pop productions, as well as acoustic,
          folk, and electronic music projects, and remains open to every musical style.
        </p>
      </div>

    </section>

    <div class="px-6">
      <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>
    </div>

    <!-- 3) TEXT – IMAGE -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div class="rounded-xl overflow-hidden md:order-1">
        <img src="/dani_profile.jpg" class="w-full h-full object-cover" />
      </div>

      <div class="md:order-2">
        <h3>DÁNIEL IVÁNFI</h3>
        <p>
          Dani has been involved in audio recording since 2017, when he worked on the recording sessions
          for his band Stubborn's full-length album. Since then, he has been passionately working on projects
          for Metal, Punk Rock, and Hardcore bands, covering recording, mixing, and editing tasks.
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
          class="px-12 py-4 sm:px-14 sm:py-5 border-2 border-white text-white rounded-xl text-xl sm:text-2xl font-prompt font-semibold
                 transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark"
      >
        THE STUDIOS
      </NuxtLink>

    </div>

  </section>

</template>

<style scoped>
.about-page p {
  margin-bottom: 0;
}
</style>