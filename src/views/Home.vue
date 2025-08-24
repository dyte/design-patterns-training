<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <div
      class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg text-white p-8"
    >
      <h1 class="text-4xl font-bold mb-4">Design Patterns Training</h1>
      <p class="text-xl opacity-90">
        A comprehensive hands-on training session covering essential design
        patterns and principles for modern software development.
      </p>
    </div>

    <!-- Training Modules -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- SOLID Principles -->
      <router-link
        to="/solid-principles"
        class="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
      >
        <div
          class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
        >
          <svg
            class="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold mb-2 text-gray-900">
          SOLID Principles
        </h3>
        <p class="text-gray-600">
          Learn the five fundamental principles of object-oriented design that
          make software more maintainable and flexible.
        </p>
        <div class="mt-4 text-blue-600 font-medium">Explore SOLID →</div>
      </router-link>

      <!-- Interfaces and Classes -->
      <router-link
        to="/interfaces-and-classes"
        class="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
      >
        <div
          class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
        >
          <svg
            class="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold mb-2 text-gray-900">
          Interfaces & Classes in TypeScript
        </h3>
        <p class="text-gray-600">
          Master the use of interfaces and classes in frontend development with
          TypeScript for better code structure.
        </p>
        <div class="mt-4 text-green-600 font-medium">Learn TypeScript →</div>
      </router-link>

      <!-- Design Patterns -->
      <router-link
        to="/design-patterns"
        class="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
      >
        <div
          class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
        >
          <svg
            class="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold mb-2 text-gray-900">
          Common Design Patterns
        </h3>
        <p class="text-gray-600">
          Explore the most frequently used design patterns in software
          development with practical examples and implementations.
        </p>
        <div class="mt-4 text-purple-600 font-medium">Discover Patterns →</div>
      </router-link>
    </div>

    <!-- Training Info -->
    <div class="bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">What You'll Learn</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-3">Principles & Foundation</h3>
          <ul class="space-y-2">
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Single Responsibility Principle</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Open/Closed Principle</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Liskov Substitution Principle</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Interface Segregation Principle</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Dependency Inversion Principle</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Practical Implementation</h3>
          <ul class="space-y-2">
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>TypeScript Interfaces & Classes</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Creational Design Patterns</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Structural Design Patterns</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Behavioral Design Patterns</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-green-500 font-bold">✓</span>
              <span>Real-world Examples</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div
      class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 text-center"
    >
      <h2 class="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
      <p class="text-gray-600 mb-6">
        Begin your journey with the fundamentals and work your way up to
        advanced patterns.
      </p>
      <router-link
        to="/solid-principles"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
      >
        Start with SOLID Principles
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
