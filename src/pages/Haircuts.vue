<template> 
  <div class="bg-lavender font-roboto text-gray-800">
    <!-- Header -->
    <header class="bg-white shadow-md p-5 flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <img src="/images/logo.png" alt="HairSalon Logo" class="w-16 h-16" />
        <span class="text-2xl font-playfair font-bold">HairSalon</span>
      </div>

      <nav class="space-x-6">
        <router-link to="/" class="text-gray-800 hover:text-gold transition">Home</router-link>
        <router-link to="/about" class="text-gray-800 hover:text-gold transition">About</router-link>
        <router-link to="/stylists" class="text-gray-800 hover:text-gold transition">Stylists</router-link>
        <router-link to="/services" class="text-gray-800 hover:text-gold transition">Services</router-link>
        <router-link to="/contact" class="text-gray-800 hover:text-gold transition">Contact</router-link>
      </nav>
    </header>

    <!-- Hero Section -->
    <HeroSection
      :image="'/images/haircuts-hero.jpg'"
      title="Haircuts"
      description="Crafted to perfection, tailored for you."
    />

    <!-- Haircut Styles Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-playfair font-bold text-darkGold mb-8">Our Signature Haircuts</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            image="/images/bob.jpg"
            title="Classic Bob"
            description="A timeless look that suits all face shapes, adding sophistication to your appearance."
          />
          <ServiceCard
            image="/images/layer.jpg"
            title="Layered Cut"
            description="Add volume and movement to your hair with expertly styled layers."
          />
          <ServiceCard
            image="/images/pixiecut.jpg"
            title="Pixie Cut"
            description="A bold and stylish option that emphasizes facial features beautifully."
          />
          <ServiceCard
            image="/images/fade.jpg"
            title="Fade Cut"
            description="Sharp and clean, the perfect choice for a modern and fresh look."
          />
          <ServiceCard
            image="/images/undercut.jpg"
            title="Undercut"
            description="A daring and edgy style that shows off your individuality."
          />
          <ServiceCard
            image="/images/shag.jpg"
            title="Shag Cut"
            description="Effortlessly cool and trendy, perfect for a casual yet polished look."
          />
        </div>
      </div>
    </section>

    <!-- Features List Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-playfair font-bold text-darkGold mb-8 text-center">Why Choose Our Haircuts?</h2>
        <FeaturesList
          :features="[ 
            'Expert stylists with years of experience.',
            'Tailored styles to suit your personality and face shape.',
            'Use of premium hair care products for every service.',
            'Cutting-edge techniques for modern and classic styles.',
            'Relaxing and luxurious salon environment.',
            'Personalized consultations to understand your needs.'
          ]"
        />
      </div>
    </section>

    <!-- Appointment Banner -->
    <AppointmentBanner
      title="Ready for a Fresh New Look?"
      buttonText="Book Your Haircut"
    />

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-8 text-center">
      <p class="text-sm">
        © 2024 HairSalon - All rights reserved |
        <router-link to="/" class="text-gold hover:underline">Privacy Policy</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import ServiceCard from "../components/ServiceCard.vue";
import AppointmentBanner from "../components/AppointmentBanner.vue";
import FeaturesList from "../components/FeaturesList.vue";

export default {
  components: {
    HeroSection,
    ServiceCard,
    AppointmentBanner,
    FeaturesList,
  },
};
</script>

<style scoped>
.bg-white {
    background-color: #f0aeec; /* Card background */
  }

.text-gold {
  color: #d4af37;
}

.bg-gold {
  background-color: #d4af37;
}

.text-darkGold {
  color: #a3785e;
}

/*  images fit better in the squares */
.grid img {
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1; 
  border-radius: 0.5rem; 
}
</style>
