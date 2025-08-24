<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">
        Common Design Patterns
      </h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Explore the most frequently used design patterns in software
        development. Learn proven solutions to recurring design problems and how
        to implement them effectively in modern applications.
      </p>
    </div>

    <!-- Navigation Breadcrumb -->
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link
            to="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Home
          </router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">
              Design Patterns
            </span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- Pattern Categories -->
    <div class="grid md:grid-cols-1 gap-8">
      <CreationalPatterns />
      <StructuralPatterns />
      <BehavioralPatterns />
      <FrontendPatterns />
    </div>

    <!-- Practical Applications -->
    <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold mb-3">Practical Applications</h3>
      <p class="text-gray-700 mb-4">
        Each pattern will include real-world examples, code implementations in
        TypeScript/JavaScript, and hands-on exercises to solidify your
        understanding.
      </p>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Code Examples</h4>
          <p class="text-sm text-gray-600">
            Real implementation examples with before/after scenarios
          </p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Interactive Exercises</h4>
          <p class="text-sm text-gray-600">
            Hands-on coding challenges and pattern identification exercises
          </p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Best Practices</h4>
          <p class="text-sm text-gray-600">
            When to use each pattern and common pitfalls to avoid
          </p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="bg-purple-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold mb-3">Complete Your Learning Journey</h3>
      <p class="text-gray-700 mb-4">
        You've reached the final section! Design patterns bring together
        everything you've learned about SOLID principles and TypeScript
        interfaces/classes.
      </p>
      <div class="flex flex-wrap gap-4">
        <router-link
          to="/interfaces-and-classes"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
        >
          ← Previous: Interfaces & Classes
        </router-link>
        <router-link
          to="/solid-principles"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Review: SOLID Principles
        </router-link>
        <router-link
          to="/"
          class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CreationalPatterns from "@/components/CreationalPatterns.vue";
import StructuralPatterns from "@/components/StructuralPatterns.vue";
import BehavioralPatterns from "@/components/BehavioralPatterns.vue";
import FrontendPatterns from "@/components/FrontendPatterns.vue";

export default {
  name: "DesignPatterns",
  components: {
    CreationalPatterns,
    StructuralPatterns,
    BehavioralPatterns,
    FrontendPatterns,
  },
};
</script>
