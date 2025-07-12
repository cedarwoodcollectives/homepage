// src/utils/seo.js

export function updateSeoMeta(meta = {}) {
  const defaultTitle = 'Cedarwood Collectives - Your Ayurvedic Retreat';
  const defaultDescription = 'Discover serene Ayurvedic hotels and resorts in Kerala for ultimate wellness and rejuvenation. Experience traditional treatments and breathtaking natural beauty.';
  const defaultKeywords = 'Kerala, Ayurveda, hotels, resorts, wellness, India travel, tranquil retreat, Cedarwood Collectives';
  const defaultOgImage = '/images/default-og-image.jpg'; // Path to a default Open Graph image in public folder

  const title = meta.title || defaultTitle;
  const description = meta.description || defaultDescription;
  const keywords = meta.keywords || defaultKeywords;
  const ogImage = meta.ogImage || defaultOgImage;
  const currentUrl = window.location.href;

  // Set Title
  document.title = title;

  // Set Meta Description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Set Meta Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords);

  // Set Open Graph Tags (for social media sharing)
  // og:title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);

  // og:description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', description);

  // og:type (usually 'website' for most pages)
  let ogType = document.querySelector('meta[property="og:type"]');
  if (!ogType) {
    ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    document.head.appendChild(ogType);
  }
  ogType.setAttribute('content', 'website'); // Can be 'article', 'product', etc.

  // og:url
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', currentUrl);

  // og:image
  let ogImageTag = document.querySelector('meta[property="og:image"]');
  if (!ogImageTag) {
    ogImageTag = document.createElement('meta');
    ogImageTag.setAttribute('property', 'og:image');
    document.head.appendChild(ogImageTag);
  }
  // Ensure the image URL is absolute for Open Graph by prefixing with origin
  const absoluteOgImageUrl = new URL(ogImage, window.location.origin).href;
  ogImageTag.setAttribute('content', absoluteOgImageUrl);

  // Optional: Twitter Card Tags
  let twitterCard = document.querySelector('meta[name="twitter:card"]');
  if (!twitterCard) {
    twitterCard = document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    document.head.appendChild(twitterCard);
  }
  twitterCard.setAttribute('content', 'summary_large_image'); // or 'summary'

  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute('content', title);

  let twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (!twitterDescription) {
    twitterDescription = document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    document.head.appendChild(twitterDescription);
  }
  twitterDescription.setAttribute('content', description);

  let twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (!twitterImage) {
    twitterImage = document.createElement('meta');
    twitterImage.setAttribute('name', 'twitter:image');
    document.head.appendChild(twitterImage);
  }
  twitterImage.setAttribute('content', absoluteOgImageUrl);

  // Add more meta tags if needed (e.g., author, publisher, robots)
}