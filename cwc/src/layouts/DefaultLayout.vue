<template>
  <v-app>
    <TheHeader @toggle-high-contrast="toggleHighContrast" :is-high-contrast="isHighContrast" />
    <v-main class="main-content">
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
    <TheFooter />

    <v-tooltip text="Toggle High Contrast Mode" location="left">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          :aria-pressed="isHighContrast"
          :aria-label="isHighContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'"
          class="accessibility-button"
          icon
          size="large"
          color="cedar-green-accent"
          @click="toggleHighContrast"
          tabindex="0"
        >
          <v-icon>{{ isHighContrast ? 'mdi-contrast-circle' : 'mdi-eye-check' }}</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

  </v-app>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import accessibilityMixin from '../mixins/accessibility';

// Use the accessibility mixin
const { isHighContrast, toggleHighContrast } = accessibilityMixin.setup();
</script>

<style scoped>
.main-content {
  padding-top: 20px; /* Adjust as needed to clear app bar */
  padding-bottom: 20px; /* Adjust as needed to clear footer */
  flex-grow: 1; /* Allow main content to grow */
  display: flex;
  justify-content: center;
}

.main-content .v-container {
  width: 100%;
  max-width: 960px; /* Max width from your example */
  padding: 0 16px; /* Horizontal padding, similar to example's px-40 (which is too much) */
}

/* Accessibility Button specific styles */
.accessibility-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensure it's on top */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for visibility */
}
</style>