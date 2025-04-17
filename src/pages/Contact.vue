<template>
  <div class="bg-lavender font-roboto text-gray-800">
   <!-- Header -->
   <header class="bg-white shadow-md p-5 flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <!-- Use logo prop -->
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
    <HeroSection
      :image="'/images/contact-hero.jpg'"
      title="Get In Touch"
      description="We’d love to hear from you! Reach out to us anytime."
    />
    <!-- Contact Information -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-playfair font-bold text-darkGold text-center mb-12">
          Contact Information
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <ContactInfoCard
            title="Visit Us"
            description="123 Hair Avenue<br>Style City, ST 56789"
          />
          <ContactInfoCard
            title="Call Us"
            description="+1 234 567 890<br>+1 987 654 321"
          />
          <ContactInfoCard
            title="Email Us"
            description="info@hairsalon.com<br>support@hairsalon.com"
          />
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 bg-lavender">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-playfair font-bold text-center text-darkGold mb-8">
          Send Us a Message
        </h2>
        <form action="#" method="POST" class="bg-white p-10 rounded-lg shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-gold"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              class="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-gold"
            />
          </div>
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            class="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-gold mb-6"
          ></textarea>
          <div class="flex justify-between items-center">
            <button
              type="submit"
              class="bg-gold text-white py-3 px-8 rounded-full hover:bg-darkGold transition"
            >
              Send Message
            </button>
            <router-link
              to="/book-appointment"
              class="bg-darkGold text-white py-3 px-8 rounded-full hover:bg-gold transition"
            >
              Book an Appointment
            </router-link>
          </div>
        </form>
      </div>
    </section>

    <!-- Map Section -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-playfair font-bold text-darkGold text-center mb-8">
          Find Us Here
        </h2>
        <MapEmbed
          :src="'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508434!2d144.9560543153189!3d-37.81720997975169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773c6b8d04a3cb!2s123%20Hair%20Ave%2C%20Style%20City!5e0!3m2!1sen!2s!4v1234567890'"
        />
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSection.vue";
import Footer from "../components/Footer.vue";
import ContactInfoCard from "../components/ContactInfoCard.vue";
import MapEmbed from "../components/MapEmbed.vue";

export default {
  components: {
    Header,
    HeroSection,
    Footer,
    ContactInfoCard,
    MapEmbed,
  },
};
</script>

<style scoped>
.text-gold {
  color: #d4af37;
}

.bg-gold {
  background-color: #d4af37;
}

.text-darkGold {
  color: #a3785e;
}
</style>
