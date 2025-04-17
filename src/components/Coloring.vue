<template>
    <div class="bg-lavender font-roboto text-gray-800">
      <!-- Header Section -->
      <header class="bg-white shadow-md p-5 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <img :src="logo" alt="HairSalon Logo" class="w-16 h-16 rounded-full" />
          <span class="text-2xl font-playfair font-bold text-gray-800">HairSalon</span>
        </div>
  
        <nav class="space-x-6">
          <router-link to="/" class="text-gray-800 hover:text-gold transition font-medium">Home</router-link>
          <router-link to="/about" class="text-gray-800 hover:text-gold transition font-medium">About</router-link>
          <router-link to="/stylists" class="text-gray-800 hover:text-gold transition font-medium">Stylists</router-link>
          <router-link to="/services" class="text-gray-800 hover:text-gold transition font-medium">Services</router-link>
          <router-link to="/haircuts" class="text-gray-800 hover:text-gold transition font-medium">Haircuts</router-link>
          <router-link to="/contact" class="text-gray-800 hover:text-gold transition font-medium">Contact</router-link>
        </nav>
      </header>
  
      <!-- Hero Section -->
      <section class="h-[50vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center relative" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="bg-black bg-opacity-50 p-8 rounded-md shadow-md">
          <h1 class="text-5xl font-playfair font-bold mb-6 text-gold">Professional Hair Coloring Services</h1>
          <p class="text-xl mb-8 text-white">Transform your look with expert hair coloring techniques.</p>
        </div>
      </section>
  
      <!-- About Coloring Section -->
      <section class="py-16">
        <div class="max-w-5xl mx-auto px-4">
          <h2 class="text-3xl font-playfair font-bold text-darkGold mb-6 text-center">Our Coloring Services</h2>
          <p class="text-lg text-gray-700 leading-8 mb-8 text-center">
            From balayage to ombre, we offer a wide range of coloring techniques tailored to your unique style. Our stylists use high-quality products to ensure vibrant and long-lasting results.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-md shadow-md p-6">
              <img src="/images/1.jpg" alt="Balayage" class="w-full h-48 object-cover rounded-t-md" />
              <h3 class="text-2xl font-semibold text-darkGold mt-4">Balayage</h3>
              <p class="text-gray-700 mt-2">A seamless blend of natural highlights for a sun-kissed look.</p>
            </div>
            <div class="bg-white rounded-md shadow-md p-6">
              <img src="/images/4.jpg" alt="Ombre" class="w-full h-48 object-cover rounded-t-md" />
              <h3 class="text-2xl font-semibold text-darkGold mt-4">Ombre</h3>
              <p class="text-gray-700 mt-2">A gradual transition of color from roots to tips.</p>
            </div>
            <div class="bg-white rounded-md shadow-md p-6">
              <img src="/images/2.jpg" alt="Full Color" class="w-full h-48 object-cover rounded-t-md" />
              <h3 class="text-2xl font-semibold text-darkGold mt-4">Full Color</h3>
              <p class="text-gray-700 mt-2">Bold, vibrant colors that make a statement.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="py-16 bg-gold text-white text-center">
        <h2 class="text-3xl font-playfair font-bold mb-4">Book Your Coloring Session Today!</h2>
        <p class="text-lg mb-6">Experience the magic of professional hair coloring with our expert stylists.</p>
        <button class="bg-darkGold py-3 px-6 rounded hover:bg-white hover:text-darkGold transition font-semibold">
          <router-link to="/contact" class="text-white hover:text-darkGold transition">Get Started</router-link>
        </button>
      </section>
  
      <!-- Footer Section -->
      <footer class="bg-gray-900 text-gray-300 py-8 text-center mt-8">
        <p class="text-sm">
          © 2024 HairSalon - All rights reserved |
          <router-link to="/" class="text-gold hover:underline">Privacy Policy</router-link>
        </p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Coloring",
    data() {
      return {
        logo: "/images/logo.png",
        heroImage: "/images/coloring-hero.jpg", // Path to your coloring page hero image
      };
    },
  };
  </script>
  
  <style scoped>
  /* Custom Colors */
  .bg-lavender {
    background-color: #f3e8ff;
  }
  
  .text-gold {
    color: #d4af37;
  }
  
  .bg-gold {
    background-color: #d4af37;
  }
  
  .bg-darkGold {
    background-color: #b8860b;
  }
  
  .text-darkGold {
    color: #b8860b;
  }
  
  footer {
    background-color: #333333;
    color: #dcdcdc;
  }
  
  footer a {
    color: #d4af37;
  }
  
  footer a:hover {
    text-decoration: underline;
  }
  </style>
  