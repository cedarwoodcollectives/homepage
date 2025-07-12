<template>
  <DefaultLayout>
    <v-container class="text-center my-8">
      <h1 class="text-h4 font-weight-bold text-cedar-dark-text mb-4">Our Blog</h1>
      <p class="text-body-1 text-cedar-grey-text mb-8">
        Stay updated with our latest insights on Ayurveda, wellness, and travel to Kerala.
      </p>

      <v-row justify="center">
        <v-col cols="12" md="6" lg="4">
          <v-card class="pa-6 rounded-xl" elevation="2">
            <v-img src="/images/blog-post-1.jpg" alt="Ayurveda healing herbs" class="rounded-lg mb-4"></v-img>
            <h3 class="text-h6 font-weight-bold text-cedar-dark-text mb-2">The Power of Panchakarma</h3>
            <p class="text-body-2 text-cedar-grey-text mb-4">
              Explore the ancient art of detoxification and rejuvenation in Ayurveda.
            </p>
            <v-btn
              color="cedar-green-accent"
              variant="text"
              class="text-none font-weight-medium"
              to="/blog/panchakarma-power"
              aria-label="Read more about The Power of Panchakarma"
            >
              Read More
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-card class="pa-6 rounded-xl" elevation="2">
            <v-img src="/images/blog-post-2.jpg" alt="Yoga pose at sunrise" class="rounded-lg mb-4"></v-img>
            <h3 class="text-h6 font-weight-bold text-cedar-dark-text mb-2">Mindful Living in Kerala</h3>
            <p class="text-body-2 text-cedar-grey-text mb-4">
              Tips for incorporating mindfulness into your daily routine, inspired by Kerala's serene environment.
            </p>
            <v-btn
              color="cedar-green-accent"
              variant="text"
              class="text-none font-weight-medium"
              to="/blog/mindful-living"
              aria-label="Read more about Mindful Living in Kerala"
            >
              Read More
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>

<style scoped>
/* Scoped styles specific to BlogView if any */
</style>