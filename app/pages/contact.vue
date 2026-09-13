
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isEN = computed(() => route.path.startsWith('/en'))
const t = computed(() => useSiteContent('contact', isEN.value ? 'en' : 'hu'))

useSeoMeta({
  title: computed(() => t.value.seoTitle),
  description: computed(() => t.value.seoDescription)
})

const pageTitle = computed(() => isEN.value ? 'Contact' : 'Kapcsolat')

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
      errorMessage.value = result.message || t.value.genericError || ''
      return
    }

    if (result.success) {
      successMessage.value = t.value.successMessage || ''

      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      errorMessage.value = result.message || t.value.genericError || ''
    }
  } catch (error) {
    console.error(error)
    errorMessage.value = t.value.genericError || ''
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h1 class="sr-only">{{ pageTitle }}</h1>

  <section class="relative min-h-screen bg-black text-white px-4 pt-24 md:pt-40 pb-20">

  <!-- Background image -->
    <img
        src="/images/studio_contact.jpg"
        alt=""
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

        <p class="text-gray-300 mb-10 text-center text-lg">{{ t.intro }}</p>

        <form @submit.prevent="sendForm" class="space-y-6">

          <div>
            <label class="block mb-2 text-lg">{{ t.nameLabel }}</label>
            <input
                v-model="name"
                type="text"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700
                       focus:border-brand outline-none transition"
                :placeholder="t.namePlaceholder"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg">{{ t.emailLabel }}</label>
            <input
                v-model="email"
                type="email"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700
                       focus:border-brand outline-none transition"
                :placeholder="t.emailPlaceholder"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg">{{ t.messageLabel }}</label>
            <textarea
                v-model="message"
                rows="5"
                class="w-full py-3 px-4 rounded-lg bg-neutral-800 border border-neutral-700
                       focus:border-brand outline-none transition"
                :placeholder="t.messagePlaceholder"
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

              {{ loading ? t.sending : t.send }}
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

          <h3 class="text-white">{{ t.contactInfoTitle }}</h3>

          <!-- Cím -->
          <p class="text-lg mb-4">
            📍
            <a
                href="https://www.google.com/maps?q=1131+Budapest,+Dolmány+utca+48"
                target="_blank"
                class="text-gray-300 hover:text-white underline underline-offset-4"
            >
              {{ t.address }}
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
            👤 <span class="text-gray-300">{{ t.person1 }}</span>
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
            👤 <span class="text-gray-300">{{ t.person2 }}</span>
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
              :src="t.mapSrc"
              width="100%"
              height="350"
              style="border:0;"
              allowfullscreen
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
