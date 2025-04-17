// src/stores/useSalonStore.js
import { defineStore } from "pinia"
import axios from "axios"
export const useSalonStore = defineStore("salon", {
state: () => ({
// Services
services: [],
servicesLoading: false,
// Appointments
appointments: [],
appointmentsLoading: false,
// Reviews
reviews: [],
reviewsLoading: false
}),
actions: {
// ----------- Services -----------
async fetchServices() {
this.servicesLoading = true
try {
const res = await axios.get("http://localhost:3000/api/services")
this.services = res.data
} finally {
this.servicesLoading = false
}
},
async addService(serviceData) {
// { title, description, price }
const res = await axios.post("http://localhost:3000/api/services", serviceData)
this.services.unshift(res.data)
},
async deleteService(id) {
await axios.delete(`http://localhost:3000/api/services/${id}`)
this.services = this.services.filter(s => s.id !== id)
},
async updateService(id, fields) {
// fields = { title, description, price }
const res = await axios.put(`http://localhost:3000/api/services/${id}`, fields)
const index = this.services.findIndex(s => s.id === id)
if (index !== -1) {
this.services[index] = res.data
}
},
async updatePopularity(id, popularity) {
const res = await axios.put(
`http://localhost:3000/api/services/popular/${id}`,
{ popularity }
)
const index = this.services.findIndex(s => s.id === id)
if (index !== -1) {
this.services[index] = res.data
}
},
// ----------- Appointments -----------
async fetchAppointments() {
this.appointmentsLoading = true
try {
const res = await axios.get("http://localhost:3000/api/appointments")
this.appointments = res.data
} finally {
this.appointmentsLoading = false
}
},
async addAppointment({ date, time, clientName }) {
const res = await axios.post("http://localhost:3000/api/appointments", {
date,
time,
clientName
})
this.appointments.push(res.data)
},
async deleteAppointment(id) {
await axios.delete(`http://localhost:3000/api/appointments/${id}`)
this.appointments = this.appointments.filter(a => a.id !== id)
},
async updateAppointment(id, fields) {
// { date, time, clientName }
const res = await axios.put(`http://localhost:3000/api/appointments/${id}`, fields)
const index = this.appointments.findIndex(a => a.id === id)
if (index !== -1) {
this.appointments[index] = res.data
}
},
async rescheduleAppointment(id, { newDate, newTime }) {
const res = await axios.put(
`http://localhost:3000/api/appointments/reschedule/${id}`,
{ newDate, newTime }
)
const index = this.appointments.findIndex(a => a.id === id)
if (index !== -1) {
this.appointments[index] = res.data
}
},
// ----------- Reviews -----------
async fetchReviews() {
this.reviewsLoading = true
try {
const res = await axios.get("http://localhost:3000/api/reviews")
this.reviews = res.data
} finally {
this.reviewsLoading = false
}
},
async addReview({ author, text, rating }) {
const res = await axios.post("http://localhost:3000/api/reviews", {
author, text, rating
})
this.reviews.push(res.data)
},
async updateReview(id, { author, text, rating }) {
const res = await axios.put(`http://localhost:3000/api/reviews/${id}`, {
author, text, rating
})
const index = this.reviews.findIndex(r => r.id === id)
if (index !== -1) {
this.reviews[index] = res.data
}
}
}
})