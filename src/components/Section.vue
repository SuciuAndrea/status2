<!-- src/components/Section.vue -->
<template>
  <section
    class="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-24"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <!-- Image -->
    <div class="w-full md:w-1/2">
      <img :src="imgSrc" :alt="title" class="rounded-lg shadow-lg" />
    </div>

    <!-- Text Content -->
    <div class="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ title }}</h2>
      <p class="text-gray-600 mb-6">{{ text }}</p>
      <button class="bg-gold text-white py-3 px-6 rounded hover:bg-darkGold transition">
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.bg-gold {
  background-color: #d4af37;
}

.hover\:bg-darkGold:hover {
  background-color: #b8860b;
}
</style>
