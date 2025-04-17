import express from "express"
import bodyParser from "body-parser"
const api = express()
const port = 3000
// ---- Mock data in-memory ----
let services = []
let appointments = []
let reviews = []
// Generăm ID-uri crescătoare
let serviceId = 1
let appointmentId = 1
let reviewId = 1
// CORS
api.use(function (req, res, next) {
res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,OPTIONS, PATCH") 
res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
res.setHeader("Access-Control-Allow-Credentials", true)
next()
})
api.use(bodyParser.json())
// ---------------------------//
// GET (5x) //
// ---------------------------//
// GET #1: Toate serviciile
api.get("/api/services", (req, res) => {
res.json(services)
})
// GET #2: Un serviciu după ID
api.get("/api/services/:id", (req, res) => {
const id = parseInt(req.params.id)
const found = services.find(s => s.id === id)
if (!found) {
return res.status(404).json({ error: "Serviciu inexistent" })
}
})
res.json(found)
// GET #3: Toate programările
api.get("/api/appointments", (req, res) => {
res.json(appointments)
})
// GET #4: O programare după ID
api.get("/api/appointments/:id", (req, res) => {
const id = parseInt(req.params.id)
const found = appointments.find(a => a.id === id)
if (!found) {
return res.status(404).json({ error: "Programare inexistentă" })
}
})
res.json(found)
// GET #5: Toate recenziile
api.get("/api/reviews", (req, res) => {
res.json(reviews)
})
// ---------------------------//
// POST (5x) //
// ---------------------------//
// POST #1: Adaugă un serviciu
api.post("/api/services", (req, res) => {
const { title, description, price } = req.body
const newService = {
id: serviceId++,
title,
description,
price,
createdAt: new Date()
}
})
services.push(newService)
res.status(201).json(newService)
// POST #2: Adaugă mai multe servicii (bulk)
api.post("/api/services/bulk", (req, res) => {
const arr = req.body
if (!Array.isArray(arr)) {
return res.status(400).json({ error: "Trebuie să trimiți un array de servicii." })
}
arr.forEach(item => {
services.push({
id: serviceId++,
title: item.title,
description: item.description,
price: item.price || 0,
createdAt: new Date()
})
})
res.status(201).json({ message: "Servicii adăugate cu succes." })
})
// POST #3: Adaugă o programare
api.post("/api/appointments", (req, res) => {
const { date, time, clientName } = req.body
const newAppointment = {
id: appointmentId++,
date,
time,
clientName,
createdAt: new Date()
}
})
appointments.push(newAppointment)
res.status(201).json(newAppointment)
// POST #4: Adaugă programări (bulk)
api.post("/api/appointments/bulk", (req, res) => {
const arr = req.body
if (!Array.isArray(arr)) {
return res.status(400).json({ error: "Trebuie să trimiți un array de programări." })
}
arr.forEach(item => {
appointments.push({
id: appointmentId++,
date: item.date,
time: item.time,
clientName: item.clientName,
createdAt: new Date()
})
})
res.status(201).json({ message: "Programări adăugate cu succes." })
})
// POST #5: Adaugă o recenzie
api.post("/api/reviews", (req, res) => {
const { author, text, rating } = req.body
const newReview = {
id: reviewId++,
author,
text,
rating,
createdAt: new Date()
}
})
reviews.push(newReview)
res.status(201).json(newReview)
// ---------------------------//
// PUT (5x) //
// ---------------------------//
// PUT #1: Actualizează serviciu (title,description,price)
api.put("/api/services/:id", (req, res) => {
const id = parseInt(req.params.id)
const { title, description, price } = req.body
const index = services.findIndex(s => s.id === id)
if (index === -1) {
return res.status(404).json({ error: "Serviciu inexistent" })
}
})
if (title !== undefined) services[index].title = title
if (description !== undefined) services[index].description = description
if (price !== undefined) services[index].price = price
res.json(services[index])
// PUT #2: Actualizează (simbolic) popularitatea unui serviciu
api.put("/api/services/popular/:id", (req, res) => {
const id = parseInt(req.params.id)
const { popularity } = req.body // ex. number 1-5
const item = services.find(s => s.id === id)
if (!item) {
return res.status(404).json({ error: "Serviciu inexistent" })
}
})
item.popularity = popularity || 1
res.json(item)
// PUT #3: Actualizează o programare (date,time,clientName)
api.put("/api/appointments/:id", (req, res) => {
const id = parseInt(req.params.id)
const { date, time, clientName } = req.body
const index = appointments.findIndex(a => a.id === id)
if (index === -1) {
return res.status(404).json({ error: "Programare inexistentă." })
}
if (date !== undefined) appointments[index].date = date
if (time !== undefined) appointments[index].time = time
if (clientName !== undefined) appointments[index].clientName = clientName
res.json(appointments[index])
})
// PUT #4: Reprogramează (reschedule) o programare
api.put("/api/appointments/reschedule/:id", (req, res) => {
const id = parseInt(req.params.id)
const { newDate, newTime } = req.body
const index = appointments.findIndex(a => a.id === id)
if (index === -1) {
return res.status(404).json({ error: "Programare inexistentă." })
}
})
if (newDate) appointments[index].date = newDate
if (newTime) appointments[index].time = newTime
res.json(appointments[index])
// PUT #5: Actualizează recenzie (author,text,rating)
api.put("/api/reviews/:id", (req, res) => {
const id = parseInt(req.params.id)
const { author, text, rating } = req.body
const index = reviews.findIndex(r => r.id === id)
if (index === -1) {
return res.status(404).json({ error: "Recenzie inexistentă." })
}
})
if (author !== undefined) reviews[index].author = author
if (text !== undefined) reviews[index].text = text
if (rating !== undefined) reviews[index].rating = rating
res.json(reviews[index])
// ---------------------------//
// DELETE (2x) //
// ---------------------------//
// DELETE #1: Șterge un serviciu după ID
api.delete("/api/services/:id", (req, res) => {
const id = parseInt(req.params.id)
const lengthBefore = services.length
services = services.filter(s => s.id !== id)
if (services.length === lengthBefore) {
return res.status(404).json({ error: "Serviciu inexistent" })
}
})
res.status(204).end()
// DELETE #2: Șterge o programare după ID
api.delete("/api/appointments/:id", (req, res) => {
const id = parseInt(req.params.id)
const lengthBefore = appointments.length
appointments = appointments.filter(a => a.id !== id)
if (appointments.length === lengthBefore) {
return res.status(404).json({ error: "Programare inexistentă." })
}
})
res.status(204).end()
// Pornim serverul
api.listen(port, () => {
console.log(`API rulează pe http://localhost:${port}`)
})