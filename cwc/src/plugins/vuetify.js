// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VBtn } from 'vuetify/components'; // Explicitly import VBtn for global defaults

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2', // Default Vuetify blue, we'll override some specific component colors
          secondary: '#424242', // Dark grey
          accent: '#82B1FF', // Light blue accent
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',

          // Custom colors based on your HTML example:
          'cedar-dark-text': '#151612',
          'cedar-green-accent': '#88C03E',
          'cedar-light-bg': '#F2F4F1',
          'cedar-grey-text': '#77816A',
        },
      },
      dark: {
        // You can define a dark theme here if needed, mirroring the light theme with inverted colors
        colors: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          'cedar-dark-text': '#E0E0E0', // Adjusted for dark theme
          'cedar-green-accent': '#6BB51F', // Adjusted for dark theme
          'cedar-light-bg': '#333333', // Adjusted for dark theme
          'cedar-grey-text': '#AAAAAA', // Adjusted for dark theme
        },
      },
    },
  },
  // Global defaults for components to match your example's styling
  defaults: {
    VBtn: {
      rounded: 'xl', // Rounded corners for buttons, like example
      elevation: 0, // Example buttons seem flat
      class: 'font-weight-bold text-none', // Text styling
      // Using custom colors from theme directly or through `color` prop in components
    },
    VCard: {
      rounded: 'xl', // Rounded cards
      elevation: 0, // Flat design
    },
    VTextField: {
      variant: 'outlined', // Outlined text fields
      rounded: 'lg',
    },
    VAppBar: {
      flat: true, // Flat app bar
      elevation: 0,
      border: 'thin', // Mimic border-b-[#f2f4f1]
      color: 'white',
    },
    VContainer: {
      // Default container to mimic example's content width
      maxWidth: '960px',
    },
    // Add more global defaults as needed
  },
});