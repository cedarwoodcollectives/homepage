<template>
  <DefaultLayout>
    <v-container class="text-center my-8">
      <h1 class="text-h4 font-weight-bold text-cedar-dark-text mb-4">Our Curated Hotels</h1>
      <p class="text-body-1 text-cedar-grey-text mb-8">
        Explore our exquisite collection of Ayurvedic hotels, each offering a unique pathway to wellness and tranquility.
      </p>
    </v-container>

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
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ContentCard from '../components/ContentCard.vue';
import { ref } from 'vue';

const hotels = ref([
  {
    title: 'The Serene Sanctuary',
    description: 'Nestled amidst lush greenery, this hotel offers a peaceful retreat with traditional Ayurvedic treatments and modern amenities. Perfect for those seeking deep relaxation and healing.',
    image: 'images/hotel-1.jpg',
    imageAlt: 'Lush green landscape with a serene hotel building',
    buttonText: 'Learn More',
    buttonLink: '/hotels/serene-sanctuary',
  },
  {
    title: 'Coastal Harmony',
    description: 'Experience the healing power of the sea at this coastal hotel, combining Ayurvedic therapies with breathtaking ocean views. Ideal for a refreshing and restorative getaway.',
    image: 'images/hotel-2.jpg',
    imageAlt: 'Coastal hotel with ocean view',
    buttonText: 'Learn More',
    buttonLink: '/hotels/coastal-harmony',
  },
  {
    title: 'Mountain Haven',
    description: 'Escape to the mountains and rejuvenate your senses with Ayurvedic practices in a serene and refreshing environment. Discover tranquility high above the world.',
    image: 'images/hotel-3.jpg',
    imageAlt: 'Mountain resort amidst misty peaks',
    buttonText: 'Learn More',
    buttonLink: '/hotels/mountain-haven',
  },
  // Add more hotel data here if desired
]);
</script>

<style scoped>
/* Scoped styles specific to HotelsView if any */
</style>