<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">
        Interfaces & Classes in TypeScript
      </h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Learn how to effectively use TypeScript interfaces and classes in
        frontend development to create maintainable, type-safe, and
        well-structured applications.
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
              Interfaces & Classes
            </span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- Main Content Sections -->
    <div class="grid md:grid-cols-1 gap-6">
      <!-- TypeScript Fundamentals -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              TypeScript Fundamentals for Frontend
            </h3>
            <p class="text-gray-600 mb-4">
              Essential TypeScript concepts that every frontend developer should
              know for building type-safe applications.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Type annotations and inference</li>
                <li>• Union and intersection types</li>
                <li>• Generic types and constraints</li>
                <li>• Type guards and narrowing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Interfaces -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
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
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              Interfaces: Contracts for Your Code
            </h3>
            <p class="text-gray-600 mb-4">
              Learn how to define and use interfaces to create clear contracts
              for objects, functions, and components in your applications.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Basic interface definitions</li>
                <li>• Optional and readonly properties</li>
                <li>• Function signatures in interfaces</li>
                <li>• Interface inheritance and composition</li>
                <li>• Index signatures and mapped types</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Classes -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              Classes: Object-Oriented Programming in TypeScript
            </h3>
            <p class="text-gray-600 mb-4">
              Master TypeScript classes, inheritance, access modifiers, and how
              to implement interfaces effectively in frontend applications.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Class declarations and constructors</li>
                <li>• Public, private, and protected members</li>
                <li>• Static properties and methods</li>
                <li>• Abstract classes and methods</li>
                <li>• Implementing interfaces in classes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Frontend-Specific Patterns -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-6 h-6 text-yellow-600"
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
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              Frontend-Specific Use Cases
            </h3>
            <p class="text-gray-600 mb-4">
              Practical examples of interfaces and classes in real frontend
              scenarios including component props, API responses, and state
              management.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Component prop interfaces</li>
                <li>• API response type definitions</li>
                <li>• State management with classes</li>
                <li>• Event handling interfaces</li>
                <li>• Form validation patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Advanced Topics -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">Advanced Patterns</h3>
            <p class="text-gray-600 mb-4">
              Advanced TypeScript patterns that leverage interfaces and classes
              for building scalable and maintainable frontend applications.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Decorators and metadata</li>
                <li>• Mixins and composition patterns</li>
                <li>• Conditional types with interfaces</li>
                <li>• Template literal types</li>
                <li>• Module augmentation patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Practical Exercises -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-6 h-6 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">Hands-On Exercises</h3>
            <p class="text-gray-600 mb-4">
              Practice what you've learned with real-world exercises and coding
              challenges that reinforce interface and class concepts.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Building a type-safe API client</li>
                <li>• Creating reusable UI components</li>
                <li>• Implementing a plugin system</li>
                <li>• Form validation with TypeScript</li>
                <li>• State management patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="bg-green-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold mb-3">Continue Your Learning Journey</h3>
      <p class="text-gray-700 mb-4">
        Understanding interfaces and classes in TypeScript prepares you for
        implementing sophisticated design patterns that solve common frontend
        development challenges.
      </p>
      <div class="flex flex-wrap gap-4">
        <router-link
          to="/solid-principles"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
        >
          ← Previous: SOLID Principles
        </router-link>
        <router-link
          to="/design-patterns"
          class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Next: Design Patterns →
        </router-link>
        <router-link
          to="/"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterfacesAndClasses",
};
</script>
