<script setup lang="ts">

</script>

<template>
  <section class="relative min-h-screen bg-black text-white px-4 pt-40 pb-20 font-oswald">

    <!-- Background image -->
    <img
        src="/studio_contact.jpg"
        class="absolute inset-0 w-full h-full object-cover opacity-40"
    />

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/10"></div>

    <!-- Micro-grid overlay -->
    <div
        class="absolute inset-0 pointer-events-none opacity-30"
        style="
        background-image:
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
        background-size: 5px 5px;
      "
    ></div>

    <!-- PAGE TITLE -->
    <div class="relative z-10 w-full max-w-[1200px] mx-auto text-center mt-10 mb-12 md:mb-16">
      <h1 class="text-4xl font-bold mb-4 font-oswald">CONTACT</h1>
    </div>

    <!-- CONTENT WRAPPER -->
    <div class="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

      <!-- LEFT COLUMN – FORM -->
      <div class="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-neutral-800">

        <p class="text-gray-300 mb-10 text-center text-lg">
          Write to us and we’ll get back to you within 24 hours.
        </p>

        <form class="space-y-6">

          <div>
            <label class="block mb-2 text-lg">Name</label>
            <input
                type="text"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-[#4fbb9b] outline-none transition"
                placeholder="Enter your name"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg">Email</label>
            <input
                type="email"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-[#4fbb9b] outline-none transition"
                placeholder="your@email.com"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg">Message</label>
            <textarea
                rows="5"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-[#4fbb9b] outline-none transition"
                placeholder="How can we help you?"
            ></textarea>
          </div>

          <button
              type="submit"
              class="w-full px-10 py-4 border-2 border-white text-white rounded-xl text-xl font-semibold
                 transition-all duration-300 hover:bg-[#4fbb9b] hover:border-[#4fbb9b]"
          >
            Send Message
          </button>

        </form>
      </div>

      <!-- RIGHT COLUMN – MAP + INFO -->
      <div class="flex flex-col gap-8">

        <!-- Google Maps -->
        <div class="rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.693391102049!2d19.09258127660756!3d47.54261397118405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc80965ce77b%3A0xb28020a5eba2ae51!2sGrenma%20Studio!5e1!3m2!1sen!2shu!4v1782035847690!5m2!1sen!2shu"
              width="100%"
              height="350"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Contact Info -->
        <div class="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-neutral-800">

          <h2 class="text-3xl font-bold mb-6">CONTACT INFO</h2>

          <p class="text-lg mb-4">
            📍 <span class="text-gray-300">1131 Budapest, Dolmány utca 48.</span>
          </p>

          <p class="text-lg mb-6">
            ✉️ <span class="text-gray-300">info@grenmastudio.hu</span>
          </p>

          <p class="text-lg mb-2">
            👤 <span class="text-gray-300">Mátyás Botlik</span>
          </p>
          <p class="text-lg mb-6">
            📞 <span class="text-gray-300">+36 20 828 0908</span>
          </p>

          <p class="text-lg mb-2">
            👤 <span class="text-gray-300">Dániel Ivánfi</span>
          </p>
          <p class="text-lg">
            📞 <span class="text-gray-300">+36 30 825 3143</span>
          </p>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
p,
label,
input::placeholder,
textarea::placeholder {
  @apply font-serif;
}
</style>
