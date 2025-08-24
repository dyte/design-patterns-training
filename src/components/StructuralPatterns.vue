<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-start space-x-4 mb-6">
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">Structural Patterns</h3>
        <p class="text-gray-600 mb-4">
          Patterns that deal with object composition and relationships
          between entities, forming larger structures.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Adapter Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Allows incompatible interfaces to work together by acting as a
          bridge.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> API adapters, legacy system
          integration, and wrapper implementations
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Decorator Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Adds new functionality to objects dynamically without altering
          their structure.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Function decorators, class
          decorators, and middleware patterns
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Facade Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Provides a simplified interface to a complex subsystem.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> API facades, library wrappers, and
          interface simplification
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Composite Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Composes objects into tree structures to represent part-whole
          hierarchies.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Tree structures, recursive
          composition, and UI component hierarchies
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StructuralPatterns",
};
</script>
