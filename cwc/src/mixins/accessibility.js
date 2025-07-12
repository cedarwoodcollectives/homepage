// src/mixins/accessibility.js

import { ref, onMounted, onUnmounted } from 'vue';

const prefersReducedMotion = ref(false);
const isHighContrast = ref(false);

export default {
  setup() {
    // Check for user's preferred reduced motion setting
    const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = () => {
      prefersReducedMotion.value = mediaQueryReducedMotion.matches;
    };

    onMounted(() => {
      // Add event listener for reduced motion preference
      mediaQueryReducedMotion.addEventListener('change', updateReducedMotion);
      updateReducedMotion(); // Initial check

      // Initialize high contrast from localStorage
      if (localStorage.getItem('accessibility:high-contrast') === 'true') {
        isHighContrast.value = true;
        document.body.classList.add('high-contrast');
      }
    });

    onUnmounted(() => {
      // Clean up event listeners
      mediaQueryReducedMotion.removeEventListener('change', updateReducedMotion);
    });

    const toggleHighContrast = () => {
      isHighContrast.value = !isHighContrast.value;
      if (isHighContrast.value) {
        document.body.classList.add('high-contrast');
        localStorage.setItem('accessibility:high-contrast', 'true');
        // Announce change for screen readers
        setTimeout(() => {
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.style.position = 'absolute';
            announcement.style.clip = 'rect(1px, 1px, 1px, 1px)';
            announcement.style.overflow = 'hidden';
            announcement.style.height = '1px';
            announcement.style.width = '1px';
            announcement.style.margin = '-1px';
            announcement.style.padding = '0';
            announcement.style.border = '0';
            document.body.appendChild(announcement);
            announcement.textContent = 'High contrast mode enabled.';
            setTimeout(() => announcement.remove(), 1000); // Remove after a short delay
        }, 0);
      } else {
        document.body.classList.remove('high-contrast');
        localStorage.removeItem('accessibility:high-contrast');
         setTimeout(() => {
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.style.position = 'absolute';
            announcement.style.clip = 'rect(1px, 1px, 1px, 1px)';
            announcement.style.overflow = 'hidden';
            announcement.style.height = '1px';
            announcement.style.width = '1px';
            announcement.style.margin = '-1px';
            announcement.style.padding = '0';
            announcement.style.border = '0';
            document.body.appendChild(announcement);
            announcement.textContent = 'High contrast mode disabled.';
            setTimeout(() => announcement.remove(), 1000); // Remove after a short delay
        }, 0);
      }
    };

    return {
      prefersReducedMotion,
      isHighContrast,
      toggleHighContrast,
    };
  },
};