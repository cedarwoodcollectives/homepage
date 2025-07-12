// src/utils/assets.js

/**
 * Gets the correct public URL for an asset.
 * In Vite, assets in the public directory are served at the root.
 *
 * @param {string} path - The relative path to the asset from the public directory (e.g., 'images/hero-banner.jpg').
 * @returns {string} The full public URL for the asset.
 */
export function getAssetUrl(path) {
  // Vite serves public assets directly from the root.
  // For example, public/images/foo.jpg becomes /images/foo.jpg
  return `/${path}`;
}