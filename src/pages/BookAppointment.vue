<template>
  <div class="min-h-screen bg-gray-100">
  <header class="bg-white p-4 shadow flex justify-between">
  <h1 class="text-xl font-bold">Appointments</h1>
  <nav class="space-x-4">
  <router-link to="/">Home</router-link>
  <router-link to="/services">Services</router-link>
  <router-link to="/appointments">Appointments</router-link>
  <router-link to="/reviews">Reviews</router-link>
  </nav>
  </header>
  <main class="p-4">
  <h2 class="text-2xl font-bold mb-4">Manage Appointments</h2>
  <!-- Add form -->
  <div class="mb-6 bg-white p-4 shadow rounded">
  <h3 class="mb-2 font-semibold">Add Appointment</h3>
  <div class="flex flex-col md:flex-row gap-2">
  <input
  v-model="formDate"
  type="text"
  placeholder="Date (ex: 2024-12-01)"
  class="border p-2 rounded"
  />
  <input
  v-model="formTime"
  type="text"
  placeholder="Time (ex: 14:00)"
  class="border p-2 rounded"
  />
  <input
  v-model="formClient"
  type="text"
  placeholder="Client Name"
  class="border p-2 rounded"
  />
  <button
  class="bg-green-600 text-white px-4 py-2 rounded"
  @click="addAppointment"
  >
  Add
  </button>
  </div>
  </div>
  <!-- Loading or list -->
  <div v-if="appointmentsLoading">Loading appointments...</div>
  <div v-else>
  <ul class="space-y-3">
  <li
  v-for="ap in appointments"
  :key="ap.id"
  class="bg-white p-4 shadow rounded flex flex-col gap-2"
  >
  <div class="flex justify-between items-center">
  <div>
  <strong>{{ ap.date }}</strong>, <em>{{ ap.time }}</em>
  <span class="ml-2 text-gray-500">({{ ap.clientName }})</span>
  </div>
  <div class="flex gap-2">
  <button
  class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
  @click="startEdit(ap)"
  >
  Edit
  </button>
  <button
  class="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
  @click="quickReschedule(ap)"
  >
  Resched
  </button>
  <button
  class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
  @click="deleteAppointment(ap.id)"
  >
  X
  </button>
  </div>
  </div>
  <!-- Edit form -->
  <div v-if="editingId === ap.id" class="flex flex-col md:flex-row gap-2 mt-2">
  <input
  v-model="editDate"
  type="text"
  class="border p-2 rounded"
  />
  <input
  v-model="editTime"
  type="text"
  class="border p-2 rounded"
  />
  <input
  v-model="editClient"
  type="text"
  class="border p-2 rounded"
  />
  <button
  class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
  @click="saveEdit(ap.id)"
  >
  Save
  </button>
  <button class="bg-gray-300 px-3 py-1 rounded" @click="cancelEdit">
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
 const { appointments, appointmentsLoading } = storeToRefs(store)
 // Add form
 const formDate = ref('')
 const formTime = ref('')
 const formClient = ref('')
 // Edit
 const editingId = ref(null)
 const editDate = ref('')
 const editTime = ref('')
 const editClient = ref('')
 // Lifecycle
 onMounted(() => {
  store.fetchAppointments()
 })
 // Add appointment
 function addAppointment() {
  store.addAppointment({
  date: formDate.value,
  time: formTime.value,
  clientName: formClient.value
  })
  formDate.value = ''
  formTime.value = ''
  formClient.value = ''
 }
 // Delete
 function deleteAppointment(id) {
  store.deleteAppointment(id)
 }
 // Edit
 function startEdit(ap) {
  editingId.value = ap.id
  editDate.value = ap.date
  editTime.value = ap.time
  editClient.value = ap.clientName
 }
 function cancelEdit() {
  editingId.value = null
  editDate.value = ''
  editTime.value = ''
  editClient.value = ''
 }
 function saveEdit(id) {
  store.updateAppointment(id, {
  date: editDate.value,
  time: editTime.value,
  clientName: editClient.value
  })
  cancelEdit()
 }
 // Reschedule
 function quickReschedule(ap) {
  store.rescheduleAppointment(ap.id, {
  newDate: '2025-01-01',
  newTime: '10:00'
  })
  alert('Rescheduled to 2025-01-01, 10:00')
 }
 </script>