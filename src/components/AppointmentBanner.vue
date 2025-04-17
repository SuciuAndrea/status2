<template>
    <div class="bg-gold text-white py-12 text-center">
      <h2 class="text-3xl font-bold mb-6">{{ title }}</h2>
      <button class="bg-white text-gold py-3 px-8 rounded font-semibold hover:bg-darkGold hover:text-white transition">
        {{ buttonText }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      buttonText: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-gold {
    background-color: #d4af37;
  }
  
  .text-gold {
    color: #d4af37;
  }
  
  .hover\:bg-darkGold:hover {
    background-color: #b8860b;
  }
  </style>
  