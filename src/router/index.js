import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import SolidPrinciples from "@/views/SolidPrinciples.vue";
import InterfacesAndClasses from "@/views/InterfacesAndClasses.vue";
import DesignPatterns from "@/views/DesignPatterns.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/solid-principles",
    name: "SolidPrinciples",
    component: SolidPrinciples,
  },
  {
    path: "/interfaces-and-classes",
    name: "InterfacesAndClasses",
    component: InterfacesAndClasses,
  },
  {
    path: "/design-patterns",
    name: "DesignPatterns",
    component: DesignPatterns,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
