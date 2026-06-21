<template>

  <!-- FIX HERO BACKGROUND -->
  <div
      class="w-full h-[50vh] min-h-[350px] bg-cover bg-center bg-fixed"
      style="background-image: url('/studio_about.jpg')"
  ></div>

  <!-- WHITE CONTENT -->
  <div class="bg-white text-black py-20">

    <!-- HERO TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto text-center mb-20 font-body">
      <h1 class="text-4xl font-bold mb-4 font-oswald">ABOUT US</h1>
      <p class="text-lg opacity-80 max-w-2xl mx-auto">
        Grenma Studio is a modern, friendly and professional environment
        designed to help you bring out the absolute best in your music.
      </p>
    </section>

    <!-- 1) IMAGE – TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mb-24 items-center font-body">

      <div class="rounded-xl overflow-hidden">
        <img src="/studio_lounge.jpg" class="w-full h-full object-cover" />
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-4 font-oswald">THE STUDIO</h2>
        <p class="opacity-80 leading-relaxed">
          You can find us in Budapest’s 13th district (Dolmány Street 48).
          Our space includes a 40 m² community area, three studio rooms
          (a 25 m² control room, and two recording rooms of 35 m² and 20 m²),
          a kitchen and a clean, comfortable restroom.
          Air conditioning, Wi‑Fi, unlimited coffee and tea,
          and for vocalists or the nervous — chilled Jägermeister :)
          <br><br>
          We do everything we can to make you feel at home while working with us.
        </p>
      </div>

    </section>

    <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>

    <!-- 2) TEXT – IMAGE -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 mb-24 items-center font-body">

      <div>
        <h2 class="text-3xl font-bold mb-6 font-oswald">THE GEAR</h2>
        <p class="opacity-80 leading-relaxed">
          Our setup is built around Pro Tools, supported by a wide range of plug‑ins
          and virtual instruments. A powerful Mac Mini drives the system, paired with
          Apogee, Focusrite, Audient and Gainlab preamps, Distressor and WA‑76 compressors,
          Genelec and Dynaudio monitoring, and microphones from Telefunken, AKG, Neumann,
          Warm Audio, Audio Technica, Shure, Sennheiser, Rode and sE Electronics.
          <br><br>
          And when it comes to instruments available for recording — the list is almost endless :)
        </p>
      </div>

      <div class="rounded-xl overflow-hidden">
        <img src="/studio_technika.jpg" class="w-full h-full object-cover" />
      </div>

    </section>

    <div class="max-w-[1200px] mx-auto h-[2px] bg-[#851707]/50 my-16"></div>

    <!-- 3) IMAGE – TEXT -->
    <section class="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center font-body">

      <div class="rounded-xl overflow-hidden">
        <img src="/matyi_profile.jpg" class="w-full h-full object-cover" />
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-4 font-oswald">MÁTYÁS BOTLIK</h2>
        <p class="opacity-80 leading-relaxed">
          Matyi, the engineer and studio lead at Grenma Studio, has been recording since 2008.
          He works with patience, precision and a strong focus on bringing out the best in every musician.
          <br><br>
          Over the years he has worked on modern punk, rock, metal and pop productions,
          as well as acoustic, folk and electronic projects — and he is open to all styles.
        </p>
      </div>

    </section>


  </div>

  <!-- PARALLAX REVEAL SECTION (before footer) -->
  <div
      class="w-full h-[60vh] bg-cover bg-center bg-fixed"
      style="background-image: url('/studio_gallery.jpg')"
  ></div>

</template>
