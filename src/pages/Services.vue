<!-- src/pages/Services.vue -->
<template>
  <div class="bg-lavender font-roboto text-gray-800 min-h-screen">
  <!-- Header simplified -->
  <header class="bg-white shadow-md p-5 flex justify-between itemscenter">
  <div class="flex items-center space-x-4">
  <img src="/images/logo.png" alt="HairSalon Logo" class="w-16 h-16"
 />
  <span class="text-2xl font-playfair font-bold">HairSalon</span>
  </div>
  <nav class="space-x-6">
  <router-link to="/">Home</router-link>
  <router-link to="/services">Services</router-link>
  <router-link to="/appointments">Appointments</router-link>
  <router-link to="/reviews">Reviews</router-link>
  </nav>
  </header>
  <div class="container mx-auto py-8 px-4">
  <h1 class="text-3xl font-bold mb-4 text-darkGold">Services</h1>
  <div class="mb-6">
  <h2 class="text-xl font-semibold mb-2">Add New Service</h2>
  <div class="flex flex-col md:flex-row gap-2 mb-4">
  <input
  v-model="formTitle"
  type="text"
  placeholder="Title"
  class="border p-2 rounded"
  />
  <input
  v-model="formDesc"
  type="text"
  placeholder="Description"
  class="border p-2 rounded"
  />
  <input
  v-model.number="formPrice"
  type="number"
  placeholder="Price"
  class="border p-2 rounded"
  />
  <button
  class="bg-gold text-white px-4 py-2 rounded hover:bg-darkGold
 transition"
  @click="addNewService"
  >
  Add
  </button>
  </div>
  </div>
  <div v-if="servicesLoading">Loading services...</div>
  <div v-else>
  <ul class="space-y-4">
  <li
  v-for="srv in services"
  :key="srv.id"
  class="bg-white p-4 rounded shadow flex flex-col gap-2"
  >
  <div class="flex justify-between items-center">
  <div>
  <strong>{{ srv.title }}</strong>
  <span class="ml-2 text-gray-500 textsm">({{ srv.description }})</span>
  <span class="ml-2 text-green-700 font-semibold">Price:
 {{ srv.price }}</span>
  <span v-if="srv.popularity" class="ml-4 text-blue-600">
  Popularity: {{ srv.popularity }}
  </span>
  </div>
  <div class="flex gap-2">
  <button
  class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue700"
  @click="startEdit(srv)"
  >
  Edit
  </button>
  <button
  class="bg-purple-600 text-white px-3 py-1 rounded hover:bgpurple-700"
  @click="makePopular(srv)"
  >
  Popular++
  </button>
  <button
  class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red700"
  @click="deleteService(srv.id)"
  >
  X
  </button>
  </div>
  </div>
  <!-- Form de edit (dacă editingId === srv.id) -->
  <div
  v-if="editingId === srv.id"
  class="mt-2 flex flex-col md:flex-row gap-2 items-center"
  >
  <input
  v-model="editTitle"
  type="text"
  class="border p-2 rounded"
  />
  <input
  v-model="editDesc"
  type="text"
  class="border p-2 rounded"
  />
  <input
  v-model.number="editPrice"
  type="number"
  class="border p-2 rounded"
  />
  <button
  class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green700"
  @click="saveEdit(srv.id)"
  >
  Save
  </button>
  <button
  class="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
  @click="cancelEdit"
  >
  Cancel
  </button>
  </div>
  </li>
  </ul>
  </div>
  </div>
  <footer class="bg-gray-900 text-gray-300 py-8 text-center mt-8">
  <p class="text-sm">© 2024 HairSalon - All rights reserved</p>
  </footer>
  </div>
 </template>
 <script setup>
 import { useSalonStore } from '@/stores/useSalonStore'
 import { storeToRefs } from 'pinia'
 import { onMounted, ref } from 'vue'
 const store = useSalonStore()
 const { services, servicesLoading } = storeToRefs(store)
 // Form de adăugare
 const formTitle = ref('')
 const formDesc = ref('')
 const formPrice = ref(0)
 // Edit
 const editingId = ref(null)
 const editTitle = ref('')
 const editDesc = ref('')
 const editPrice = ref(0)
 // Lifecycle
 onMounted(() => {
  store.fetchServices()
 })
 // Add new service
 function addNewService() {
  if (!formTitle.value || !formDesc.value) {
  alert('Please fill in title and desc')
  return
  }
  store.addService({
  title: formTitle.value,
  description: formDesc.value,
  price: formPrice.value
  })
  // reset
  formTitle.value = ''
  formDesc.value = ''
  formPrice.value = 0
 }
 // Delete service
 function deleteService(id) {
  store.deleteService(id)
 }
 // Start edit
 function startEdit(s) {
  editingId.value = s.id
  editTitle.value = s.title
  editDesc.value = s.description
  editPrice.value = s.price
 }
 function cancelEdit() {
  editingId.value = null
  editTitle.value = ''
  editDesc.value = ''
  editPrice.value = 0
 }
 function saveEdit(id) {
  store.updateService(id, {
  title: editTitle.value,
  description: editDesc.value,
  price: editPrice.value
  })
  cancelEdit()
 }
 // Popular++
 function makePopular(s) {
  let pop = s.popularity || 0
  pop++
  store.updatePopularity(s.id, pop)
 }
 </script>
 <style scoped>
 .bg-lavender {
  background-color: #f3e8ff;
 }
 .text-darkGold {
  color: #a3785e;
 }
 .bg-gold {
  background-color: #d4af37;
 }
 .hover\:bg-darkGold:hover {
  background-color: #b8860b;
 }
 </style>