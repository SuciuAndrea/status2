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
          <router-link to="/contact" class="text-gray-800 hover:text-gold transition">Contact</router-link>
        </nav>
      </header>
  
      <!-- Bridal Hero Section -->
      <section class="relative bg-cover bg-center h-96" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center text-center">
          <h1 class="text-4xl font-playfair font-bold text-white z-10">Elegant Bridal Styles</h1>
        </div>
      </section>
  
      <!-- Bridal Description Section -->
      <section class="py-16 bg-gray-100">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-playfair font-bold text-darkGold mb-6">Your Special Day, Perfected</h2>
          <p class="text-lg text-gray-700 mb-8">
            Our expert stylists specialize in creating stunning bridal hairstyles tailored to your preferences. From classic updos to modern looks, we ensure you look your best on your wedding day.
          </p>
          <router-link to="#bridal-gallery" class="bg-gold text-white py-3 px-6 rounded shadow-lg hover:bg-darkGold transition">
            View Bridal Gallery
          </router-link>
        </div>
      </section>
  
      <!-- Bridal Stylists Section -->
      <section class="py-16">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-3xl font-playfair font-bold text-darkGold mb-8 text-center">Our Bridal Stylists</h2>
  
          <div class="space-y-12">
            <div
              v-for="(stylist, index) in stylists"
              :key="index"
              class="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg"
            >
              <img :src="stylist.image" :alt="stylist.name" class="w-40 h-40 rounded-full object-cover mb-6 md:mb-0 md:mr-6" />
              <div>
                <h3 class="text-2xl font-playfair font-bold mb-4">{{ stylist.name }}</h3>
                <p class="text-gray-700 mb-4">{{ stylist.description }}</p>
                <p class="font-medium text-darkGold">Years of Experience: {{ stylist.experience }} Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Bridal Gallery Section -->
      <section id="bridal-gallery" class="py-16 bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-3xl font-playfair font-bold text-darkGold mb-8 text-center">Bridal Gallery</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <img
              v-for="(image, index) in gallery"
              :key="index"
              :src="image"
              :alt="`Bridal Style ${index + 1}`"
              class="rounded-lg shadow-lg hover:shadow-xl transition"
            />
          </div>
        </div>
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
        heroImage: "/images/bridal-hero.jpg",
        stylists: [
          {
            name: "Georgiana Oros",
            image: "/images/stilist1.jpg",
            description:
              "Georgiana specializes in timeless and romantic bridal looks. She works with you to create a style that complements your dress, theme, and personal vision.",
            experience: 12,
          },
          {
            name: "Oros George",
            image: "/images/stilist2.jpg",
            description:
              "Oros is known for creating modern bridal hairstyles that stand out. Whether you prefer a sleek bun or intricate braids, he brings your vision to life.",
            experience: 5,
          },
        ],
        gallery: [
          "/images/bride1.jpg",
          "/images/bride2.jpg",
          "/images/bride3.jpg",
          "/images/bride4.jpg",
          "/images/bride5.jpg",
          "/images/bride6.jpg",
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .bg-lavender {
    background-color: #e6d4ff;
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
  