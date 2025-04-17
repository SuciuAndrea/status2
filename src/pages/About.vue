<!-- src/pages/About.vue -->
<template>
  <div class="bg-gray-100 font-roboto text-gray-800">
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
        <router-link to="/contact" class="text-gray-800 hover:text-gold transition font-medium">Contact</router-link>
      </nav>
    </header>

    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-purple-200 to-purple-300 py-20 text-center"
    >
      <h1 class="text-5xl font-serif font-bold mb-6">About HairSalon</h1>
      <p class="text-gray-700 text-lg max-w-2xl mx-auto">
        Your trusted partner in beauty and self-expression. Learn more about our history, values, and what makes us special.
      </p>
    </section>

    <!-- Our Journey Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-serif font-bold text-center mb-12">Our Journey</h2>
        <div class="relative border-l-4 border-purple-300">
          <div v-for="(item, index) in timeline" :key="index" class="mb-8 pl-8">
            <div class="absolute -left-4 top-0 bg-purple-300 w-8 h-8 rounded-full"></div>
            <h3 class="text-xl font-bold text-gray-800">{{ item.year }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-serif font-bold mb-6">Meet the Team</h2>
        <p class="text-gray-600 max-w-3xl mx-auto mb-12">
          Our talented team of stylists, colorists, and beauty experts are here to bring your vision to life. Get to know the passionate professionals behind HairSalon.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(member, index) in team"
            :key="index"
            class="bg-purple-300 p-6 rounded-lg shadow-md"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold text-gray-800">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-900 text-gray-300 py-8 text-center">
      <p class="text-sm">
        © 2024 HairSalon - All rights reserved | <router-link to="/" class="text-gold hover:underline">Privacy Policy</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "/images/logo.png",
      timeline: [
        { year: "2009", description: "Humble Beginnings: A small neighborhood salon dedicated to personalizing beauty." },
        { year: "2015", description: "Growing Together: Expanded team and opened a second location." },
        { year: "2024", description: "Innovating the Future: Cutting-edge techniques meet eco-friendly practices." },
      ],
      team: [
        { name: "Georgiana Oros", role: "Creative Director & Lead Stylist", image: "/images/img8.jpg" },
        { name: "Georgiana Oros", role: "Color Specialist", image: "/images/img9.jpg" },
        { name: "Georgiana Oros", role: "Stylist & Haircare Expert", image: "/images/img10.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
/* Custom Colors */
.text-gold {
  color: #d4af37;
}

.bg-gold {
  background-color: #d4af37;
}

.hover\:bg-darkGold:hover {
  background-color: #b8860b;
}
</style>
