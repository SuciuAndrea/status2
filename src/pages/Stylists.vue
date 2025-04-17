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

    <!--  spacing between header and filter buttons -->
    <div class="my-8"></div>

    <!-- Filter Buttons Component -->
    <div class="text-center mb-8">
      <button
        v-for="filter in filterOptions"
        :key="filter.value"
        @click="navigateToPage(filter.value)"
        class="bg-gold text-white px-6 py-2 rounded mx-2 hover:bg-darkGold transition"
      >
        {{ filter.label }}
      </button>
    </div>

    <!-- Stylists Grid Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-playfair font-bold text-darkGold mb-8 text-center">Meet Our Expert Stylists</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <StylistCard
            v-for="stylist in stylists"
            :key="stylist.id"
            :name="stylist.name"
            :image="stylist.image"
            :description="stylist.description"
            :experience="stylist.experience"
            :product="stylist.product"
            :fact="stylist.fact"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials Component -->
    <Testimonials />

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
import StylistCard from "../components/StylistCard.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "Stylists",
  components: {
    StylistCard,
    Testimonials,
  },
  data() {
    return {
      logo: "/images/logo.png",
      filterOptions: [
        { label: "Haircut", value: "haircuts" },
        { label: "Coloring", value: "coloring" },
        { label: "Bridal", value: "bridal" },
        { label: "Texturizing", value: "texturizing" },
      ],
      stylists: [
        {
          id: 1,
          name: "Georgiana Oros",
          image: "/images/stilist1.jpg",
          description: "Specializing in color and cuts, she brings a fresh touch to your hair transformation.",
          experience: "12 Years",
          product: "Kerastase Oil",
          fact: "Loves to paint in her free time!",
        },
        {
          id: 2,
          name: "Oros George",
          image: "/images/stilist2.jpg",
          description: "With a passion for styling, he creates personalized looks that bring out your best features.",
          experience: "2 Years",
          product: "L’Oreal Professional",
          fact: "Plays guitar in a band!",
        },
        {
          id: 3,
          name: "Moisa Lavinia",
          image: "/images/stilist3.jpg",
          description: "Focusing on modern cuts and sophisticated styles, she's ready to transform your look.",
          experience: "3 Years",
          product: "Bumble and Bumble Mousse",
          fact: "Always travels with a sketchbook!",
        },
      ],
    };
  },
  methods: {
    navigateToPage(filter) {
      this.$router.push({ path: `/${filter}` }); 
    },
  },
};
</script>

<style scoped>
.bg-gold {
  background-color: #d4af37;
}

.text-darkGold {
  color: #a3785e;
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
