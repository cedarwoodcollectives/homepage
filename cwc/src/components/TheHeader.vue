<template>
  <v-app-bar app class="app-header" :elevation="0" height="70">
    <v-toolbar-title class="d-flex align-center ml-sm-4">
      <v-icon color="cedar-dark-text" size="28" class="mr-2" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
        </svg>
      </v-icon>
      <router-link to="/" class="text-decoration-none text-h6 font-weight-bold text-black app-title" aria-label="Home - Cedarwood Collectives">
        Cedarwood Collectives
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="d-none d-md-flex align-center mr-4">
      <v-btn
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        text
        variant="text"
        class="text-none font-weight-medium text-body-2 mr-4"
        color="cedar-dark-text"
        :aria-label="`Maps to ${link.name} page`"
      >
        {{ link.name }}
      </v-btn>

      <v-btn
        class="text-none font-weight-bold"
        color="cedar-light-bg"
        flat
        rounded="xl"
        size="large"
        to="/contact-us"
        aria-label="Book your stay now"
      >
        Book Now
      </v-btn>
    </div>

    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list nav>
      <v-list-item
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        link
        @click="drawer = false"
        :title="link.name"
      ></v-list-item>
      <v-list-item
        link
        to="/contact-us"
        @click="drawer = false"
        title="Book Now"
        class="mt-4"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isHighContrast: Boolean,
});

const emit = defineEmits(['toggle-high-contrast']);

const drawer = ref(false); // For mobile navigation drawer

const navLinks = reactive([
  { name: 'Home', path: '/' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'Resorts', path: '/resorts' },
  { name: 'Contact Us', path: '/contact-us' },
  { name: 'Blog', path: '/blog' }, // Added blog link
]);
</script>

<style scoped>
.app-header {
  background-color: #ffffff !important;
  border-bottom: 1px solid var(--color-light-bg); /* Use CSS variable */
  padding: 0 10px; /* Adjust padding for responsiveness */
}

.app-title {
  color: var(--color-dark-text); /* Use CSS variable */
}

/* Ensure buttons use the specific colors from the theme/CSS variables */
.v-btn.text-none {
  letter-spacing: 0.015em;
}

/* Adjust header height to better match example */
.v-app-bar.app-header {
  min-height: 64px !important; /* Vuetify default is 64px, adjusting here */
}

/* Reduce padding on smaller screens */
@media (max-width: 600px) {
  .app-header {
    padding: 0 16px;
  }
}
</style>