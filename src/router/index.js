import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import SolidPrinciples from "@/views/SolidPrinciples.vue";
import InterfacesAndClasses from "@/views/InterfacesAndClasses.vue";
import DesignPatterns from "@/views/DesignPatterns.vue";
import SingletonPattern from "@/views/SingletonPattern.vue";

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
  {
    path: "/design-patterns/singleton",
    name: "SingletonPattern",
    component: SingletonPattern,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
