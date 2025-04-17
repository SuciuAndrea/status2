<template>
  <div class="min-h-screen bg-white">
  <header class="bg-gray-800 text-white p-4 flex justify-between">
  <h1 class="font-bold">Reviews</h1>
  <nav class="space-x-4">
  <router-link to="/">Home</router-link>
  <router-link to="/services">Services</router-link>
  <router-link to="/appointments">Appointments</router-link>
  <router-link to="/reviews">Reviews</router-link>
  </nav>
  </header>
  <main class="p-4">
  <h2 class="text-2xl font-bold mb-4">Client Reviews</h2>
  <!-- Add Review -->
  <div class="bg-gray-100 p-4 rounded shadow mb-6">
  <h3 class="font-semibold mb-2">Add a Review</h3>
  <div class="flex flex-col md:flex-row gap-2">
  <input
  v-model="formAuthor"
  type="text"
  placeholder="Author"
  class="border p-2 rounded"
  />
  <input
  v-model="formText"
  type="text"
  placeholder="Review text"
  class="border p-2 rounded flex-1"
  />
  <input
  v-model.number="formRating"
  type="number"
  placeholder="Rating (1-5)"
  class="border p-2 rounded w-24"
  />
  <button
  class="bg-green-600 text-white px-4 py-2 rounded"
  @click="addReview"
  >
  Add
  </button>
  </div>
  </div>
  <!-- List -->
  <div v-if="reviewsLoading">Loading reviews...</div>
  <div v-else>
  <ul class="space-y-4">
  <li
  v-for="rev in reviews"
  :key="rev.id"
  class="bg-white p-4 rounded shadow"
  >
  <div class="flex justify-between items-center">
  <div>
  <strong class="mr-2">{{ rev.author }}</strong>
  <span class="text-sm text-gray-500">Rating: {{ rev.rating }}</span>
  </div>
  <button
  class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
  @click="startEdit(rev)"
  >
  Edit
  </button>
  </div>
  <p class="text-gray-700 mt-2">{{ rev.text }}</p>
  <!-- Edit form -->
  <div
  v-if="editingId === rev.id"
  class="mt-2 flex flex-col md:flex-row gap-2"
  >
  <input
  v-model="editAuthor"
  type="text"
  class="border p-2 rounded"
  />
  <input
  v-model="editText"
  type="text"
  class="border p-2 rounded flex-1"
  />
  <input
  v-model.number="editRating"
  type="number"
  class="border p-2 rounded w-24"
  />
  <button
  class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
  @click="saveEdit(rev.id)"
  >
  Save
  </button>
  <button
  class="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
  @click="cancelEdit"
  >
  Cancel
  </button>
  </div>
  </li>
  </ul>
  </div>
  </main>
  </div>
 </template>
 <script setup>
 import { useSalonStore } from '@/stores/useSalonStore'
 import { storeToRefs } from 'pinia'
 import { onMounted, ref } from 'vue'
 const store = useSalonStore()
 const { reviews, reviewsLoading } = storeToRefs(store)
 // Add form
 const formAuthor = ref('')
 const formText = ref('')
 const formRating = ref(5)
 // Edit
 const editingId = ref(null)
 const editAuthor = ref('')
 const editText = ref('')
 const editRating = ref(5)
 onMounted(() => {
  store.fetchReviews()
 })
 function addReview() {
  if (!formAuthor.value || !formText.value) {
  alert('Complete author and text')
  return
  }
  store.addReview({
  author: formAuthor.value,
  text: formText.value,
  rating: formRating.value
  })
  formAuthor.value = ''
  formText.value = ''
  formRating.value = 5
 }
 function startEdit(rev) {
  editingId.value = rev.id
  editAuthor.value = rev.author
  editText.value = rev.text
  editRating.value = rev.rating
 }
 function cancelEdit() {
  editingId.value = null
  editAuthor.value = ''
  editText.value = ''
  editRating.value = 5
 }
 function saveEdit(id) {
  store.updateReview(id, {
  author: editAuthor.value,
  text: editText.value,
  rating: editRating.value
  })
  cancelEdit()
 }
 </script>