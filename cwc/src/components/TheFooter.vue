<template>
  <v-footer class="footer-custom py-10" color="white" :elevation="0">
    <v-container class="text-center">
      <v-row justify="center" class="mb-6">
        <v-col cols="auto">
          <v-btn
            text
            variant="text"
            class="text-none font-weight-normal text-body-1"
            color="cedar-grey-text"
            to="/blog"
            aria-label="Visit our blog"
          >
            Blog
          </v-btn>
          </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <p class="text-body-1 font-weight-normal text-cedar-grey-text">
            © {{ currentYear }} Cedarwood Collectives. All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer-custom {
  border-top: 1px solid var(--color-light-bg);
  background-color: #ffffff !important;
}

/* No need for .text-grey-darken-1 if using theme colors directly */
/* .text-cedar-grey-text is applied via Vuetify's text-<color> class */
</style>