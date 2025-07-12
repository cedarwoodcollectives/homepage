<template>
  <DefaultLayout>
    <HeroSection
      :title="heroContent.title"
      :description="heroContent.description"
      :image="heroContent.image"
      :button-text="heroContent.buttonText"
      :button-link="heroContent.buttonLink"
    />

    <h2 class="text-h5 font-weight-bold text-cedar-dark-text px-4 pb-3 pt-5">Our Hotels</h2>
    <v-row>
      <v-col cols="12" v-for="hotel in hotels" :key="hotel.title">
        <ContentCard
          :title="hotel.title"
          :description="hotel.description"
          :image="hotel.image"
          :image-alt="hotel.imageAlt"
          :button-text="hotel.buttonText"
          :button-link="hotel.buttonLink"
        />
      </v-col>
    </v-row>

    <h2 class="text-h5 font-weight-bold text-cedar-dark-text px-4 pb-3 pt-5">Ayurvedic Resort</h2>
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
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import HeroSection from '../components/HeroSection.vue';
import ContentCard from '../components/ContentCard.vue';
import { ref } from 'vue';

const heroContent = ref({
  title: 'Discover the Essence of Kerala with Cedarwood Collectives',
  description: 'Immerse yourself in the ancient wisdom of Ayurveda amidst the tranquil beauty of Kerala. Experience rejuvenation and wellness at our curated hotels and resorts.',
  image: 'images/hero-banner.jpg',
  buttonText: 'Explore',
  buttonLink: '/hotels', // Link to the hotels page
});

const hotels = ref([
  {
    title: 'The Serene Sanctuary',
    description: 'Nestled amidst lush greenery, this hotel offers a peaceful retreat with traditional Ayurvedic treatments and modern amenities.',
    image: 'images/hotel-1.jpg',
    imageAlt: 'Lush green landscape with a serene hotel building',
    buttonText: 'View Details',
    buttonLink: '/hotels/serene-sanctuary', // Example detail page
  },
  {
    title: 'Coastal Harmony',
    description: 'Experience the healing power of the sea at this coastal hotel, combining Ayurvedic therapies with breathtaking ocean views.',
    image: 'images/hotel-2.jpg',
    imageAlt: 'Coastal hotel with ocean view',
    buttonText: 'View Details',
    buttonLink: '/hotels/coastal-harmony',
  },
  {
    title: 'Mountain Haven',
    description: 'Escape to the mountains and rejuvenate your senses with Ayurvedic practices in a serene and refreshing environment.',
    image: 'images/hotel-3.jpg',
    imageAlt: 'Mountain resort amidst misty peaks',
    buttonText: 'View Details',
    buttonLink: '/hotels/mountain-haven',
  },
]);

const resortContent = ref({
  title: 'The Cedarwood Resort',
  description: 'Our flagship resort offers a comprehensive Ayurvedic experience, including personalized treatments, yoga, and meditation sessions.',
  image: 'images/resort-1.jpg',
  imageAlt: 'Luxurious Ayurvedic resort with traditional architecture',
  buttonText: 'Learn More',
  buttonLink: '/resorts/cedarwood-resort', // Example detail page
});
</script>

<style scoped>
/* No specific styles needed here, components handle their own styling */
</style>