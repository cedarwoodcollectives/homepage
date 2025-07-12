<template>
  <v-card class="content-card mb-4" :elevation="0">
    <v-row no-gutters class="align-stretch">
      <v-col cols="12" xl="6">
        <v-img
          :src="getAssetUrl(image)"
          :alt="imageAlt"
          class="content-card-image rounded-xl"
          cover
          aspect-ratio="16/9"
        ></v-img>
      </v-col>
      <v-col cols="12" xl="6">
        <v-card-text class="d-flex flex-column justify-center gap-1 py-4 px-4 text-cedar-dark-text">
          <h3 class="text-lg font-weight-bold text-cedar-dark-text mb-1" :aria-label="title">
            {{ title }}
          </h3>
          <div class="d-flex flex-column flex-sm-row align-sm-end justify-sm-space-between flex-grow-1">
            <p class="text-body-1 font-weight-normal text-cedar-grey-text flex-grow-1 mb-2 mb-sm-0" :aria-label="description">
              {{ description }}
            </p>
            <v-btn
              class="text-none font-weight-medium"
              color="cedar-green-accent"
              flat
              rounded="xl"
              size="small"
              :to="buttonLink"
              aria-label="View details for {{ title }}"
            >
              {{ buttonText }}
            </v-btn>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { getAssetUrl } from '@/utils/assets';

const props = defineProps({
  title: String,
  description: String,
  image: String, // Path relative to public/images
  imageAlt: String, // Alt text for accessibility
  buttonText: String,
  buttonLink: String,
});
</script>

<style scoped>
.content-card {
  border-radius: 12px; /* Similar to rounded-xl */
  overflow: hidden; /* Ensures image corners match card */
  border: 1px solid rgba(0,0,0,0.05); /* Subtle border for definition */
}

.content-card-image {
  /* Ensure image takes full width and height within its container */
  height: 100%;
  width: 100%;
}

/* Adjust layout for large screens */
@media (min-width: 1280px) { /* xl breakpoint in Vuetify */
  .content-card .v-row.align-stretch {
    align-items: flex-start; /* Align image and text content at the top */
  }
}
</style>