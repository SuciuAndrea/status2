<!-- src/pages/Index.vue -->
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
    <section
      class="h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center relative"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="bg-black bg-opacity-50 p-8 rounded-md shadow-md">
        <h1 class="text-5xl font-playfair font-bold mb-6 text-gold">Welcome to the hair salon of your dreams!</h1>
        <p class="text-xl mb-8 text-white">Your beauty, our passion. Experience elegance.</p>
        <button class="bg-gold text-white py-3 px-6 rounded hover:bg-darkGold transition text-lg font-semibold">
          Explore Now
        </button>
      </div>
    </section>

    <!--  Sections -->
    <Section
      :imgSrc="img1"
      title="Your True Colors"
      text="Natural tones, blended Balayage, Classic highlights, rich hair color or pastel hues – our color specialists customize to your needs, and then follow up with a fresh haircut and style. You’ll leave with vibrant, glossy hair every time!"
      buttonText="Learn More"
      :reverse="false"
    />
    <Section
      :imgSrc="img2"
      title="Precision Haircuts"
      text="Our team specializes in precision haircuts tailored to your unique features and style preferences. Whether you’re going for a bold look or a classic cut, we ensure every detail is perfect."
      buttonText="View Our Services"
      :reverse="true"
    />
    <Section
      :imgSrc="img3"
      title="Luxurious Hair Care"
      text="Pamper your hair with our luxurious range of hair care products. From nourishing shampoos to professional-grade treatments, we offer everything you need for healthy, radiant hair."
      buttonText="Shop Now"
      :reverse="false"
    />
    <Section
      :imgSrc="img4"
      title="Event Styling"
      text="Be the star of your next event with our bespoke styling services. From weddings to parties, we create stunning hairstyles that complement your outfit and personality."
      buttonText="Book an Appointment"
      :reverse="true"
    />

    <!-- Footer Section -->
    <footer class="bg-gray-900 text-gray-300 py-8 text-center">
      <p class="text-sm">
        © 2024 HairSalon - All rights reserved | <router-link to="/" class="text-gold hover:underline">Privacy Policy</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
import Section from "../components/Section.vue";

export default {
  components: {
    Section,
  },
  data() {
    return {
      logo: "/images/logo.png",
      heroImage: "/images/img3.jpg",
      img1: "/images/img5.jpg",
      img2: "/images/img4.jpg",
      img3: "/images/img6.jpg",
      img4: "/images/img7.jpg",
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

.hover\:bg-darkGold:hover {
  background-color: #b8860b;
}

.text-darkGold {
  color: #b8860b;
}

/* Hero Section Overlay */
.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
