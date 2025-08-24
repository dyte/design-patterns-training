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
      <!-- Creational Patterns -->
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
              Patterns that deal with object creation mechanisms, trying to
              create objects in a manner suitable to the situation.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">Singleton Pattern</h4>
            <p class="text-sm text-gray-600 mb-3">
              Ensures a class has only one instance and provides global access
              to it.
            </p>
            <div class="text-xs text-gray-500">
              <strong>Coming Soon:</strong> Implementation examples, use cases,
              and best practices
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">Factory Pattern</h4>
            <p class="text-sm text-gray-600 mb-3">
              Creates objects without specifying the exact class to create.
            </p>
            <div class="text-xs text-gray-500">
              <strong>Coming Soon:</strong> Factory methods, abstract factories,
              and practical examples
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">Builder Pattern</h4>
            <p class="text-sm text-gray-600 mb-3">
              Constructs complex objects step by step using a fluent interface.
            </p>
            <div class="text-xs text-gray-500">
              <strong>Coming Soon:</strong> Method chaining, configuration
              objects, and builder implementations
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">Prototype Pattern</h4>
            <p class="text-sm text-gray-600 mb-3">
              Creates objects by cloning an existing instance rather than
              creating new instances.
            </p>
            <div class="text-xs text-gray-500">
              <strong>Coming Soon:</strong> Object cloning, deep vs shallow
              copy, and performance considerations
            </div>
          </div>
        </div>
      </div>

      <!-- Structural Patterns -->
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

      <!-- Behavioral Patterns -->
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
              <strong>Coming Soon:</strong> Event systems, reactive programming,
              and state management
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">Strategy Pattern</h4>
            <p class="text-sm text-gray-600 mb-3">
              Defines a family of algorithms and makes them interchangeable at
              runtime.
            </p>
            <div class="text-xs text-gray-500">
              <strong>Coming Soon:</strong> Algorithm selection, plugin systems,
              and configuration-driven behavior
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">Command Pattern</h4>
            <p class="text-sm text-gray-600 mb-3">
              Encapsulates a request as an object, allowing parameterization and
              queuing.
            </p>
            <div class="text-xs text-gray-500">
              <strong>Coming Soon:</strong> Undo/redo functionality, macro
              commands, and request queuing
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">State Pattern</h4>
            <p class="text-sm text-gray-600 mb-3">
              Allows an object to alter its behavior when its internal state
              changes.
            </p>
            <div class="text-xs text-gray-500">
              <strong>Coming Soon:</strong> State machines, workflow management,
              and conditional behavior
            </div>
          </div>
        </div>
      </div>

      <!-- Frontend-Specific Patterns -->
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
            <h3 class="text-xl font-semibold mb-2">
              Frontend-Specific Patterns
            </h3>
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
              <strong>Coming Soon:</strong> Framework implementations, data
              binding, and separation of concerns
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
              <strong>Coming Soon:</strong> Data layer abstraction, API clients,
              and caching strategies
            </div>
          </div>
        </div>
      </div>
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
export default {
  name: "DesignPatterns",
};
</script>
