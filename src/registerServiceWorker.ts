export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = new URL('service-worker.js', document.baseURI).href;
      void navigator.serviceWorker
        .register(swUrl, { scope: './', updateViaCache: 'none' })
        .catch((err) => console.error('service worker registration failed', err));
    });
  }
}
