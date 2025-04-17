<template>
    <div class="p-8">
      <h1 class="text-4xl font-bold mb-6 text-gold">Haircut</h1>
      <p class="text-lg text-gray-800">
        Our haircuts are tailored to your unique style and preferences. Whether you’re looking for a classic cut or a modern look, we’ve got you covered.
      </p>
      <ul class="list-disc list-inside mt-4 text-gray-700">
        <li>Men’s Haircuts</li>
        <li>Women’s Haircuts</li>
        <li>Children’s Haircuts</li>
        <li>Custom Styling</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Haircut',
  };
  </script>
  
  <style scoped>
  .bg-white {
    background-color: #f1c5ef; /* Card background */
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
  
  