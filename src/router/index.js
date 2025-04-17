import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import('../pages/Index.vue'), name: "Home" },
  { path: "/about", component: () => import('../pages/About.vue'), name: "About" },
  { path: "/services", component: () => import('../pages/Services.vue'), name: "Services" },
  { path: "/book-appointment", component: () => import('../pages/BookAppointment.vue'), name: "BookAppointment" },
  { path: "/bridal", component: () => import('../components/Bridal.vue'), name: "Bridal" },
  { path: "/coloring", component: () => import('../components/Coloring.vue'), name: "Coloring" },
  { path: "/contact", component: () => import('../pages/Contact.vue'), name: "Contact" },
  { path: "/haircuts", component: () => import('../pages/Haircuts.vue'), name: "Haircuts" },
  { path: "/stylists", component: () => import('../pages/Stylists.vue'), name: "Stylists" },
  { path: "/texturizing", component: () => import('../components/Texturizing.vue'), name: "Texturizing" }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
