<template>
    <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
      <img :src="image" :alt="`Photo of ${name}`" class="rounded-full w-40 h-40 mx-auto mb-6 object-cover" />
      <h3 class="text-2xl font-playfair font-bold text-center mb-4">{{ name }}</h3>
      <p class="text-gray-700 text-center mb-4">{{ description }}</p>
  
      <div class="bg-gray-50 p-4 rounded-md text-center">
        <p><strong>Years of Experience:</strong> {{ experience }}</p>
        <p><strong>Favorite Product:</strong> {{ product }}</p>
        <p><strong>Fun Fact:</strong> {{ fact }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      experience: {
        type: String,
        required: true,
      },
      product: {
        type: String,
        required: true,
      },
      fact: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-white {
    background-color: #e0b8e0; /* Card background */
  }
  
  .text-darkGold {
    color: #a3785e; /* Header text color */
  }
  
  .text-gold {
    color: #b48c6c; /* Accent color */
  }
  
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Default shadow */
  }
  
  .hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2); /* Shadow on hover */
  }
  </style>