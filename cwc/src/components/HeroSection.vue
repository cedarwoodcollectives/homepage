<template>
  <v-card
    class="hero-card mb-8"
    :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${getAssetUrl(image)})` }"
  >
    <div class="d-flex flex-column align-center text-center pa-4 pa-sm-8">
      <h1 class="text-h4 text-sm-h3 text-md-h2 font-weight-black text-white mb-2" :aria-label="title">
        {{ title }}
      </h1>
      <p class="text-body-2 text-sm-body-1 font-weight-regular text-white mb-4" :aria-label="description">
        {{ description }}
      </p>
      <v-btn
        class="text-none font-weight-bold"
        color="cedar-green-accent"
        flat
        rounded="xl"
        size="large"
        :to="buttonLink"
        aria-label="Explore our offerings"
      >
        {{ buttonText }}
      </v-btn>
    </div>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { getAssetUrl } from '@/utils/assets'; // Import our asset utility

const props = defineProps({
  title: String,
  description: String,
  image: String, // Path relative to public/images folder (e.g., 'images/hero-banner.jpg')
  buttonText: String,
  buttonLink: String,
});
</script>

<style scoped>
.hero-card {
  min-height: 480px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px; /* Similar to @[480px]:rounded-xl */
  padding: 16px;
  color: white; /* Ensure text color is white on the background image */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5); /* Add text shadow for readability */
  width: 100%; /* Ensure it takes full width of its container */
}

/* Further adjustments for smaller screens, if needed */
@media (max-width: 600px) {
  .hero-card {
    border-radius: 0; /* Remove border-radius on small screens if desired */
    padding: 16px;
  }
}
</style>