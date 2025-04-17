<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105">
    <!-- Image with fixed aspect ratio -->
    <div class="relative w-full h-64">
      <img
        :src="image"
        :alt="title"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div class="p-6">
      <h3 class="text-lg font-bold text-darkGold mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.bg-white {
  background-color: #e5b2ea; /* Card background */
}

.text-darkGold {
  color: #a3785e; /* Title text color */
}

.text-gray-700 {
  color: #4a4a4a; /* Description text */
}

.bg-gold {
  background-color: #b48c6c; /* Button color */
}

.hover\:bg-darkGold:hover {
  background-color: #a3785e; /* Button hover color */
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Default shadow */
}

.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2); /* Shadow on hover */
}
</style>
