<script setup lang="ts">

useSeoMeta({
  title: 'Contact | Grenma Studio',
  description:
      'Get in touch with the Grenma Studio team.'
})

import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const sendForm = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const formData = new FormData()

    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('message', message.value)

    const response = await fetch('/sendmail.php', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    if (!response.ok) {
      errorMessage.value =
          result.message || 'Please fill in all required fields.'
      return
    }

    if (result.success) {
      successMessage.value =
          'Thank you! Your message has been sent successfully.'

      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      errorMessage.value =
          result.message || 'An error occurred while sending the message.'
    }
  } catch (error) {
    console.error(error)
    errorMessage.value = 'An error occurred while sending the message.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="relative min-h-screen bg-black text-white px-4 pt-24 md:pt-40 pb-20">

  <!-- Background image -->
    <img
        src="/studio_contact.jpg"
        fetchpriority="high"
        class="absolute inset-0 w-full h-full object-cover opacity-40"
    />

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/10"></div>

    <!-- Micro-grid overlay -->
    <div class="absolute inset-0 pointer-events-none opacity-60 micro-grid"></div>

    <!-- CONTENT WRAPPER -->
    <div class="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 md:pt-16">

      <!-- LEFT COLUMN – FORM -->
      <div class="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-neutral-800 font-body">

        <p class="text-gray-300 mb-10 text-center text-lg">
          Send us a message and we’ll get back to you within 48 hours.
        </p>

        <form @submit.prevent="sendForm" class="space-y-6">

          <div>
            <label class="block mb-2 text-lg">Name</label>
            <input
                v-model="name"
                type="text"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700
                       focus:border-brand outline-none transition"
                placeholder="Your name"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg">Email</label>
            <input
                v-model="email"
                type="email"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700
                       focus:border-brand outline-none transition"
                placeholder="your@email.com"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg">Message</label>
            <textarea
                v-model="message"
                rows="5"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700
                       focus:border-brand outline-none transition"
                placeholder="How can we help?"
            ></textarea>
          </div>

          <!-- BUTTON – brand hover only -->
          <div class="flex justify-center">

            <button
                type="submit"
                :disabled="loading || !name || !email || !message"
                class="px-12 py-4 border-2 border-white text-white rounded-xl text-xl font-prompt font-semibold
         transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark
         disabled:opacity-50 disabled:cursor-not-allowed"
            >

              {{ loading ? 'SENDING...' : 'SEND MESSAGE' }}
            </button>
          </div>
          <p v-if="successMessage" class="text-green-400 text-center mt-4">
            {{ successMessage }}
          </p>

          <p v-if="errorMessage" class="text-red-400 text-center mt-4">
            {{ errorMessage }}
          </p>
        </form>
      </div>

      <!-- RIGHT COLUMN – INFO + MAP (MAP LAST) -->
      <div class="flex flex-col gap-8">

        <!-- Contact Info -->
        <div class="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-neutral-800 font-body">

          <h3 class="text-white">CONTACT INFORMATION</h3>

          <!-- Address -->
          <p class="text-lg mb-4">
            📍
            <a
                href="https://www.google.com/maps?q=1131+Budapest,+Dolmány+utca+48"
                target="_blank"
                class="text-gray-300 hover:text-white underline underline-offset-4"
            >
              1131 Budapest, Dolmány Street 48
            </a>
          </p>

          <!-- Email -->
          <p class="text-lg mb-6">
            ✉️
            <a
                href="mailto:info@grenmastudio.hu"
                class="text-gray-300 hover:text-white underline underline-offset-4"
            >
              info@grenmastudio.hu
            </a>
          </p>

          <!-- Botlik Mátyás -->
          <p class="text-lg mb-2">
            👤 <span class="text-gray-300">Mátyás Botlik</span>
          </p>
          <p class="text-lg mb-6">
            📞
            <a
                href="tel:+36208280908"
                class="text-gray-300 hover:text-white underline underline-offset-4"
            >
              +36 20 828 0908
            </a>
          </p>

          <!-- Ivánfi Dániel -->
          <p class="text-lg mb-2">
            👤 <span class="text-gray-300">Dániel Ivánfi</span>
          </p>
          <p class="text-lg">
            📞
            <a
                href="tel:+36308253143"
                class="text-gray-300 hover:text-white underline underline-offset-4"
            >
              +36 30 825 3143
            </a>
          </p>

        </div>


        <!-- Google Maps (LAST ELEMENT) -->
        <div class="rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.693391102049!2d19.09258127660756!3d47.54261397118405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc80965ce77b%3A0xb28020a5eba2ae51!2sGrenma%20Studio!5e1!3m2!1sen!2shu!4v1782035847690!5m2!1sen!2hu"
              width="100%"
              height="350"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>

p,
label,
input,
textarea,
input::placeholder,
textarea::placeholder {
  @apply font-body;
}

.micro-grid {
  background-image:
      linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 5px 5px;
}

</style>
