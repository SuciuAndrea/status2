<template>
    <div class="bg-lavender font-roboto text-gray-800">
      <!-- Header Section -->
      <header class="bg-white shadow-md p-5 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <img :src="logo" alt="HairSalon Logo" class="w-16 h-16" />
          <span class="text-2xl font-playfair font-bold">HairSalon</span>
        </div>
  
        <nav class="space-x-6">
          <router-link to="/" class="text-gray-800 hover:text-gold transition">Home</router-link>
          <router-link to="/about" class="text-gray-800 hover:text-gold transition">About</router-link>
          <router-link to="/stylists" class="text-gray-800 hover:text-gold transition">Stylists</router-link>
          <router-link to="/haircuts" class="text-gray-800 hover:text-gold transition">Haircuts</router-link>
          <router-link to="/coloring" class="text-gray-800 hover:text-gold transition">Coloring</router-link>
          <router-link to="/bridal" class="text-gray-800 hover:text-gold transition">Bridal</router-link>
          <router-link to="/contact" class="text-gray-800 hover:text-gold transition">Contact</router-link>
        </nav>
      </header>
  
      <!-- Hero Section -->
      <section class="bg-gray-900 text-white py-16 text-center">
        <h1 class="text-4xl font-playfair font-bold">Texturizing</h1>
        <p class="text-lg mt-4">Effortless volume, movement, and style. Discover the art of hair texturizing with our specialists.</p>
      </section>
  
      <!-- Split Content Section -->
      <section class="py-16 bg-gray-100">
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left Side: Image -->
          <div class="flex items-center justify-center">
            <img :src="textImage" alt="Texturizing Technique" class="rounded-lg shadow-lg w-full max-w-md" />
          </div>
          <!-- Right Side: Content -->
          <div>
            <h2 class="text-3xl font-playfair font-bold text-darkGold mb-4">Why Texturizing?</h2>
            <p class="text-lg text-gray-700 mb-6">
              Texturizing transforms your hair with subtle layers, enhanced volume, and dynamic styles. Whether you're embracing natural curls or achieving a sleek, lightweight look, texturizing can create a stunning effect.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Achieve effortless volume and movement.</li>
              <li>Perfect for all hair types and lengths.</li>
              <li>Creates versatile styles that last longer.</li>
            </ul>
          </div>
        </div>
      </section>
  
      <!-- Texturizing Techniques Section -->
      <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-playfair font-bold text-darkGold mb-8">Texturizing Techniques</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(technique, index) in texturizingTechniques"
              :key="index"
              class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img :src="technique.image" :alt="technique.title" class="rounded-t-lg w-full h-48 object-cover mb-4" />
              <h3 class="text-xl font-playfair font-bold mb-2">{{ technique.title }}</h3>
              <p class="text-gray-700">{{ technique.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call-to-Action Section -->
      <section class="bg-gray-900 text-white py-16 text-center">
        <h2 class="text-3xl font-playfair font-bold">Ready for a Transformation?</h2>
        <p class="mt-4 text-lg">Book an appointment with one of our texturizing experts today and redefine your style!</p>
        <button class="mt-6 bg-gold text-white py-3 px-8 rounded hover:bg-darkGold transition">Book Now</button>
      </section>
  
      <!-- Footer Section -->
      <footer class="bg-gray-900 text-gray-300 py-6 text-center">
        <p>&copy; 2024 HairSalon. All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logo: "/images/logo.png",
        textImage: "/images/text.jpg",
        texturizingTechniques: [
          {
            title: "Razor Cutting",
            image: "/images/razor.jpg",
            description: "A precise method that softens layers and adds feathered texture to your hair.",
          },
          {
            title: "Point Cutting",
            image: "/images/point.jpg",
            description: "Ideal for creating movement by removing bulk while maintaining length.",
          },
          {
            title: "Slide Cutting",
            image: "/images/side.jpg",
            description: "Perfect for long hair, adding texture and smooth blending for a polished look.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .bg-lavender {
    background-color: #E6D4FF;
  }
  
  .text-gold {
    color: #b48c6c;
  }
  
  .bg-gold {
    background-color: #b48c6c;
  }
  
  .text-darkGold {
    color: #a3785e;
  }
  
  .bg-darkGold {
    background-color: #a3785e;
  }
  
  footer {
    background-color: #333333; /* Dark footer */
    color: #dcdcdc; /* Light text */
  }
  </style>
  