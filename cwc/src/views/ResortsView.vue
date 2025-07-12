<template>
  <DefaultLayout>
    <v-container class="text-center my-8">
      <h1 class="text-h4 font-weight-bold text-cedar-dark-text mb-4">Our Ayurvedic Resorts</h1>
      <p class="text-body-1 text-cedar-grey-text mb-8">
        Delve deeper into holistic well-being at our comprehensive Ayurvedic resorts, designed for transformative healing.
      </p>
    </v-container>

    <v-row>
      <v-col cols="12">
        <ContentCard
          :title="resortContent.title"
          :description="resortContent.description"
          :image="resortContent.image"
          :image-alt="resortContent.imageAlt"
          :button-text="resortContent.buttonText"
          :button-link="resortContent.buttonLink"
        />
      </v-col>
    </v-row>

    <v-container class="mt-10">
      <h2 class="text-h5 font-weight-bold text-cedar-dark-text mb-4">Our Unique Programs</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-6 rounded-xl" elevation="2">
            <h3 class="text-h6 font-weight-bold text-cedar-dark-text mb-2">Panchakarma Therapy</h3>
            <p class="text-body-2 text-cedar-grey-text">
              Experience the ancient detoxification and rejuvenation program for deep cleansing and restoring balance.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-6 rounded-xl" elevation="2">
            <h3 class="text-h6 font-weight-bold text-cedar-dark-text mb-2">Yoga & Meditation Retreats</h3>
            <p class="text-body-2 text-cedar-grey-text">
              Harmonize your mind, body, and spirit with our expert-led yoga and meditation sessions in serene surroundings.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ContentCard from '../components/ContentCard.vue';
import { ref } from 'vue';

const resortContent = ref({
  title: 'The Cedarwood Resort',
  description: 'Our flagship resort offers a comprehensive Ayurvedic experience, including personalized treatments, yoga, and meditation sessions. It\'s an oasis of healing and tranquility in the heart of Kerala.',
  image: 'images/resort-1.jpg',
  imageAlt: 'Luxurious Ayurvedic resort with traditional architecture and lush gardens',
  buttonText: 'Discover More',
  buttonLink: '/resorts/cedarwood-resort',
});
</script>

<style scoped>
/* Scoped styles specific to ResortsView if any */
</style>