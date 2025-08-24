<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-start space-x-4 mb-6">
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">Behavioral Patterns</h3>
        <p class="text-gray-600 mb-4">
          Patterns that focus on communication between objects and the
          assignment of responsibilities between objects.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Observer Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Defines a subscription mechanism to notify multiple objects about
          events.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Event systems, reactive programming, and
          state management
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Strategy Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Defines a family of algorithms and makes them interchangeable at
          runtime.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Algorithm selection, plugin systems, and
          configuration-driven behavior
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">Command Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Encapsulates a request as an object, allowing parameterization and
          queuing.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> Undo/redo functionality, macro commands,
          and request queuing
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-2">State Pattern</h4>
        <p class="text-sm text-gray-600 mb-3">
          Allows an object to alter its behavior when its internal state
          changes.
        </p>
        <div class="text-xs text-gray-500">
          <strong>Coming Soon:</strong> State machines, workflow management, and
          conditional behavior
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BehavioralPatterns",
};
</script>
