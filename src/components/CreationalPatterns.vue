<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-start space-x-4 mb-6">
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          ></path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">Creational Patterns</h3>
        <p class="text-gray-600 mb-4">
          Patterns that deal with object creation mechanisms, trying to create
          objects in a manner suitable to the situation.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Singleton Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Ensures a class has only one instance and provides global access to
          it.
        </p>
        <router-link
          to="/design-patterns/singleton"
          class="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          Learn more about Singleton Pattern
          <svg
            class="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </router-link>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Factory Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Creates objects without specifying the exact class to create.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Factory methods, abstract factories, and
          practical examples
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Builder Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Constructs complex objects step by step using a fluent interface.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Method chaining, configuration objects,
          and builder implementations
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Prototype Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Creates objects by cloning an existing instance rather than creating
          new instances.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Object cloning, deep vs shallow copy,
          and performance considerations
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreationalPatterns",
};
</script>
