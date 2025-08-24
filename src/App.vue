<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold text-gray-800">
              Design Patterns Training
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link
              to="/"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-blue-600 font-semibold': $route.name === 'Home' }"
            >
              Home
            </router-link>
            <router-link
              to="/solid-principles"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              :class="{
                'text-blue-600 font-semibold':
                  $route.name === 'SolidPrinciples',
              }"
            >
              SOLID
            </router-link>
            <router-link
              to="/interfaces-and-classes"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              :class="{
                'text-blue-600 font-semibold':
                  $route.name === 'InterfacesAndClasses',
              }"
            >
              TypeScript
            </router-link>
            <router-link
              to="/design-patterns"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              :class="{
                'text-blue-600 font-semibold': $route.name === 'DesignPatterns',
              }"
            >
              Patterns
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 px-4">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
