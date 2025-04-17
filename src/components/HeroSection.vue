<template>
    <section
      class="h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center relative"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div class="bg-black bg-opacity-50 p-8 rounded-md shadow-md">
        <h1 class="text-5xl font-playfair font-bold mb-6 text-gold">{{ title }}</h1>
        <p class="text-xl mb-8 text-white">{{ description }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .text-gold {
    color: #d4af37;
  }
  
  .bg-opacity-50 {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  