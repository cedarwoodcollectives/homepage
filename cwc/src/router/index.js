import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HotelsView from '../views/HotelsView.vue';
import ResortsView from '../views/ResortsView.vue';
import ContactView from '../views/ContactView.vue';
import { updateSeoMeta } from '../utils/seo'; // Import our SEO utility

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Cedarwood Collectives - Discover Kerala\'s Ayurvedic Retreats',
      description: 'Immerse yourself in the ancient wisdom of Ayurveda amidst the tranquil beauty of Kerala. Experience rejuvenation and wellness at our curated hotels and resorts.',
      keywords: 'Kerala, Ayurveda, hotels, resorts, wellness, India travel, tranquil retreat, holistic health',
      ogImage: 'images/hero-banner.jpg' // Path relative to public folder
    }
  },
  {
    path: '/hotels',
    name: 'Hotels',
    component: HotelsView,
    meta: {
      title: 'Our Hotels - Serene Ayurvedic Escapes in Kerala',
      description: 'Explore our curated selection of Ayurvedic hotels in Kerala, offering peaceful retreats with traditional treatments and modern amenities for ultimate rejuvenation.',
      keywords: 'Ayurvedic hotels, Kerala hotels, serene sanctuary, coastal harmony, mountain haven, wellness hotels',
      ogImage: 'images/hotel-1.jpg'
    }
  },
  {
    path: '/resorts',
    name: 'Resorts',
    component: ResortsView,
    meta: {
      title: 'Our Resorts - Comprehensive Ayurvedic Experiences',
      description: 'Discover the flagship Cedarwood Resort, offering comprehensive Ayurvedic experiences including personalized treatments, yoga, and meditation sessions in a tranquil setting.',
      keywords: 'Ayurvedic resort, Kerala resort, wellness retreat, yoga, meditation, holistic healing',
      ogImage: 'images/resort-1.jpg'
    }
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact Us - Cedarwood Collectives for Bookings & Inquiries',
      description: 'Get in touch with Cedarwood Collectives for bookings, inquiries, or more information about our exquisite Ayurvedic hotels and resorts in Kerala.',
      keywords: 'contact, booking, inquiry, Cedarwood Collectives, Kerala Ayurveda',
      ogImage: 'images/contact-hero.jpg' // Assuming a contact hero image
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    // We'll create a simple placeholder for now.
    // In a real app, this would be its own view.
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Blog - Cedarwood Collectives Insights',
      description: 'Read our latest articles on Ayurveda, wellness, travel to Kerala, and updates from Cedarwood Collectives.',
      keywords: 'Ayurveda blog, wellness articles, Kerala travel blog, holistic living',
      ogImage: 'images/blog-hero.jpg' // Assuming a blog hero image
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

// Global navigation guard for SEO optimization
router.afterEach((to) => {
  updateSeoMeta(to.meta);
});

export default router;