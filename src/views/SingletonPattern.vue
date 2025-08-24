<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Singleton Pattern</h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Ensures a class has only one instance and provides global access to it.
        Learn when to use this pattern, implementation techniques, and common
        pitfalls.
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
            <router-link
              to="/design-patterns"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
            >
              Design Patterns
            </router-link>
          </div>
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
              Singleton Pattern
            </span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- Pattern Overview -->
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
          <h2 class="text-2xl font-semibold mb-2">
            What is the Singleton Pattern?
          </h2>
          <p class="text-gray-600 mb-4">
            The Singleton pattern is a creational design pattern that restricts
            the instantiation of a class to one single instance. This is useful
            when exactly one object is needed to coordinate actions across the
            system.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Key Characteristics</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start">
              <svg
                class="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Only one instance exists throughout the application
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Global access point to the instance
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Lazy initialization (created when first needed)
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 text-green-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Thread-safe implementation (in multi-threaded environments)
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">Common Use Cases</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              Database connection pools
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              Configuration managers
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              Logging services
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              Cache managers
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              State management stores
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Implementation Examples -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold mb-6">Implementation Examples</h2>

      <!-- Basic Implementation -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-3">
          Basic JavaScript Implementation
        </h3>
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre
            class="text-sm"
          ><code class="text-gray-300"><span class="text-blue-400">class</span> <span class="text-yellow-400">Singleton</span> {
  <span class="text-blue-400">constructor</span>() {
    <span class="text-blue-400">if</span> (<span class="text-yellow-400">Singleton</span>.instance) {
      <span class="text-blue-400">return</span> <span class="text-yellow-400">Singleton</span>.instance;
    }
    
    <span class="text-green-400">// Initialize your singleton properties here</span>
    <span class="text-blue-400">this</span>.data = {};
    <span class="text-blue-400">this</span>.createdAt = <span class="text-blue-400">new</span> <span class="text-yellow-400">Date</span>();
    
    <span class="text-yellow-400">Singleton</span>.instance = <span class="text-blue-400">this</span>;
    <span class="text-blue-400">return</span> <span class="text-blue-400">this</span>;
  }

  <span class="text-yellow-400">getData</span>() {
    <span class="text-blue-400">return</span> <span class="text-blue-400">this</span>.data;
  }

  <span class="text-yellow-400">setData</span>(key, value) {
    <span class="text-blue-400">this</span>.data[key] = value;
  }
}

<span class="text-green-400">// Usage</span>
<span class="text-blue-400">const</span> instance1 = <span class="text-blue-400">new</span> <span class="text-yellow-400">Singleton</span>();
<span class="text-blue-400">const</span> instance2 = <span class="text-blue-400">new</span> <span class="text-yellow-400">Singleton</span>();

<span class="text-purple-400">console</span>.<span class="text-yellow-400">log</span>(instance1 === instance2); <span class="text-green-400">// true</span></code></pre>
        </div>
      </div>

      <!-- Modern ES6+ Implementation -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-3">
          Modern ES6+ Implementation with Module
        </h3>
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre
            class="text-sm"
          ><code class="text-gray-300"><span class="text-green-400">// config-manager.js</span>
<span class="text-blue-400">class</span> <span class="text-yellow-400">ConfigManager</span> {
  <span class="text-blue-400">constructor</span>() {
    <span class="text-blue-400">this</span>.config = {
      apiUrl: <span class="text-green-300">'https://api.example.com'</span>,
      timeout: <span class="text-purple-400">5000</span>,
      retries: <span class="text-purple-400">3</span>
    };
  }

  <span class="text-yellow-400">getConfig</span>(key) {
    <span class="text-blue-400">return</span> key ? <span class="text-blue-400">this</span>.config[key] : <span class="text-blue-400">this</span>.config;
  }

  <span class="text-yellow-400">updateConfig</span>(updates) {
    <span class="text-blue-400">this</span>.config = { ...<span class="text-blue-400">this</span>.config, ...updates };
  }
}

<span class="text-green-400">// Export a single instance</span>
<span class="text-blue-400">export default new</span> <span class="text-yellow-400">ConfigManager</span>();

<span class="text-green-400">// Usage in other files</span>
<span class="text-green-400">// import configManager from './config-manager.js';</span>
<span class="text-green-400">// const apiUrl = configManager.getConfig('apiUrl');</span></code></pre>
        </div>
      </div>

      <!-- Vue.js Store Implementation -->
      <div>
        <h3 class="text-lg font-semibold mb-3">
          Vue.js State Store Implementation
        </h3>
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre
            class="text-sm"
          ><code class="text-gray-300"><span class="text-green-400">// store.js</span>
<span class="text-blue-400">import</span> { reactive } <span class="text-blue-400">from</span> <span class="text-green-300">'vue'</span>;

<span class="text-blue-400">class</span> <span class="text-yellow-400">AppStore</span> {
  <span class="text-blue-400">constructor</span>() {
    <span class="text-blue-400">this</span>.state = <span class="text-yellow-400">reactive</span>({
      user: <span class="text-purple-400">null</span>,
      theme: <span class="text-green-300">'light'</span>,
      notifications: []
    });
  }

  <span class="text-yellow-400">setUser</span>(user) {
    <span class="text-blue-400">this</span>.state.user = user;
  }

  <span class="text-yellow-400">toggleTheme</span>() {
    <span class="text-blue-400">this</span>.state.theme = <span class="text-blue-400">this</span>.state.theme === <span class="text-green-300">'light'</span> ? <span class="text-green-300">'dark'</span> : <span class="text-green-300">'light'</span>;
  }

  <span class="text-yellow-400">addNotification</span>(message) {
    <span class="text-blue-400">this</span>.state.notifications.push({
      id: <span class="text-yellow-400">Date</span>.<span class="text-yellow-400">now</span>(),
      message,
      timestamp: <span class="text-blue-400">new</span> <span class="text-yellow-400">Date</span>()
    });
  }
}

<span class="text-blue-400">export default new</span> <span class="text-yellow-400">AppStore</span>();</code></pre>
        </div>
      </div>
    </div>

    <!-- Pros and Cons -->
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-green-50 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-green-800 mb-4">Advantages</h3>
        <ul class="space-y-2 text-green-700">
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-green-600 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Controlled access to the sole instance
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-green-600 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Reduced memory footprint
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-green-600 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Global access point
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-green-600 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Lazy initialization saves resources
          </li>
        </ul>
      </div>

      <div class="bg-red-50 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-red-800 mb-4">Disadvantages</h3>
        <ul class="space-y-2 text-red-700">
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-red-600 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Violates Single Responsibility Principle
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-red-600 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Difficult to unit test
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-red-600 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Can become a global state problem
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-red-600 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Tight coupling between components
          </li>
        </ul>
      </div>
    </div>

    <!-- Best Practices -->
    <div class="bg-blue-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold text-blue-800 mb-4">
        Best Practices & Alternatives
      </h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-semibold text-blue-700 mb-2">When to Use</h4>
          <ul class="space-y-1 text-blue-700 text-sm">
            <li>• Configuration management</li>
            <li>• Database connection pooling</li>
            <li>• Logging services</li>
            <li>• Cache management</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-blue-700 mb-2">Modern Alternatives</h4>
          <ul class="space-y-1 text-blue-700 text-sm">
            <li>• Dependency injection containers</li>
            <li>• ES6 modules with exported instances</li>
            <li>• Vue.js provide/inject</li>
            <li>• State management libraries (Pinia, Vuex)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="bg-purple-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold mb-3">Continue Learning</h3>
      <div class="flex flex-wrap gap-4">
        <router-link
          to="/design-patterns"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
        >
          ← Back to Design Patterns
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
  name: "SingletonPattern",
};
</script>
