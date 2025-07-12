import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import vuetify from './plugins/vuetify'; // Import Vuetify configuration

// Import global CSS (Vuetify's default styles and Material Design Icons)
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// Import our custom fonts
// The example uses Noto Serif and Noto Sans.
// We'll load them via Google Fonts directly in index.html for better SEO/caching.
// For now, let's assume they are linked.
// If you want to import via CSS (less common for global fonts, but possible):
// @import url('https://fonts.googleapis.com/css2?display=swap&family=Noto+Serif%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900');


const app = createApp(App);

app.use(router); // Use Vue Router
app.use(vuetify); // Use Vuetify

app.mount('#app');