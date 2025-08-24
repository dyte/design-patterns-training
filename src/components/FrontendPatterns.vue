<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-start space-x-4 mb-6">
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">Frontend-Specific Patterns</h3>
        <p class="text-gray-600 mb-4">
          Patterns that are particularly useful in frontend development and
          modern web applications.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Module Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Encapsulates code into modules with public and private methods.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> ES6 modules, namespace patterns, and
          code organization
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">MVC/MVP/MVVM</h4>
        <p class="text-sm text-gray-600 mb-3">
          Architectural patterns for separating concerns in UI applications.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Framework implementations, data binding,
          and separation of concerns
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Publish-Subscribe</h4>
        <p class="text-sm text-gray-600 mb-3">
          Messaging pattern where publishers send messages to subscribers.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Event buses, message brokers, and
          decoupled communication
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Repository Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Abstracts data access logic and centralizes common data access
          functionality.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Data layer abstraction, API clients, and
          caching strategies
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontendPatterns",
};
</script>
