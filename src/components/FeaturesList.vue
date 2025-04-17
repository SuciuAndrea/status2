<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
      <div v-for="(feature, index) in features" :key="index" class="bg-white p-6 shadow-md rounded-lg">
        <div class="mb-4">
          <img :src="feature.icon" :alt="feature.title" class="w-16 h-16 mx-auto" />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        features: [
          {
            title: "Expert Stylists",
            description: "Our team consists of experienced professionals who understand your style.",
            icon: "/images/expert-stylist.jpg",
          },
          {
            title: "Eco-Friendly Products",
            description: "We use only high-quality, eco-friendly products for your hair care.",
            icon: "/images/eco-friendly.jpg",
          },
          {
            title: "Customized Experience",
            description: "Tailored solutions to match your unique preferences and lifestyle.",
            icon: "/images/customized-experience.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styling for icons */
  img {
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  }
  </style>
  