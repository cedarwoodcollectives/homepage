<template>
  <DefaultLayout>
    <v-container class="text-center my-8">
      <h1 class="text-h4 font-weight-bold text-cedar-dark-text mb-4">Contact Us</h1>
      <p class="text-body-1 text-cedar-grey-text mb-8">
        We'd love to hear from you! Reach out with any questions, booking inquiries, or special requests.
      </p>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="pa-8 rounded-xl" elevation="4">
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Your Name"
                required
                class="mb-4"
                variant="outlined"
                rounded="lg"
                aria-label="Enter your name"
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="Your Email"
                type="email"
                required
                class="mb-4"
                variant="outlined"
                rounded="lg"
                aria-label="Enter your email address"
              ></v-text-field>
              <v-text-field
                v-model="form.subject"
                label="Subject"
                class="mb-4"
                variant="outlined"
                rounded="lg"
                aria-label="Enter the subject of your message"
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                label="Your Message"
                required
                rows="5"
                class="mb-6"
                variant="outlined"
                rounded="lg"
                aria-label="Enter your message"
              ></v-textarea>
              <v-btn
                type="submit"
                color="cedar-green-accent"
                size="large"
                block
                rounded="xl"
                class="text-none font-weight-bold"
                aria-label="Send your message"
              >
                Send Message
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <v-container class="text-center mt-10">
        <h2 class="text-h5 font-weight-bold text-cedar-dark-text mb-4">Find Us</h2>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-card class="pa-4 rounded-xl" elevation="2">
              <v-icon size="48" color="cedar-dark-text">mdi-map-marker</v-icon>
              <h3 class="text-h6 font-weight-bold text-cedar-dark-text mt-2 mb-1">Address</h3>
              <p class="text-body-2 text-cedar-grey-text">
                Cedarwood Collectives HQ<br>
                123 Wellness Way, Kerala, India
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="pa-4 rounded-xl" elevation="2">
              <v-icon size="48" color="cedar-dark-text">mdi-phone</v-icon>
              <h3 class="text-h6 font-weight-bold text-cedar-dark-text mt-2 mb-1">Phone</h3>
              <p class="text-body-2 text-cedar-grey-text">
                +91 123 456 7890
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="pa-4 rounded-xl" elevation="2">
              <v-icon size="48" color="cedar-dark-text">mdi-email</v-icon>
              <h3 class="text-h6 font-weight-bold text-cedar-dark-text mt-2 mb-1">Email</h3>
              <p class="text-body-2 text-cedar-grey-text">
                info@cedarwoodcollectives.com
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = () => {
  // In a real application, you would send this form data to a backend server
  console.log('Form submitted:', form);
  alert('Thank you for your message! We will get back to you soon.');
  // Reset form
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};
</script>

<style scoped>
/* Scoped styles specific to ContactView if any */
</style>