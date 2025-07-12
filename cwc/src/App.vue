<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
// No specific script logic needed here for a simple root component
// All layout and page content will be handled by router-view
</script>

<style>
/* Global styles for the app */
html {
  scroll-behavior: smooth;
  /* Apply fonts from the example, fall back to sans-serif */
  font-family: "Noto Serif", "Noto Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5; /* Light background similar to the example's implied bg */
}

/* Accessibility high-contrast mode */
body.high-contrast {
  filter: invert(100%) hue-rotate(180deg);
  background-color: black; /* To ensure contrast */
}

/* Invert images back so they don't look weird in high contrast */
body.high-contrast img {
  filter: invert(100%) hue-rotate(180deg);
}

/* Custom colors from your example for easier Vuetify theme adaptation */
:root {
  --color-dark-text: #151612;
  --color-green-accent: #88c03e;
  --color-light-bg: #f2f4f1;
  --color-grey-text: #77816a;
}
</style>