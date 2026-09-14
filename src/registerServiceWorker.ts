export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = new URL('service-worker.js', document.baseURI).href;
      navigator.serviceWorker
        .register(swUrl, { scope: './' })
        .then((reg) => console.log('service worker registered', reg.scope))
        .catch((err) => console.error('service worker registration failed', err));
    });
  }
}
