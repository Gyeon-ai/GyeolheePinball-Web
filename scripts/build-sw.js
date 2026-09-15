import { generateSW } from 'workbox-build';

const { count, size, warnings } = await generateSW({
  swDest: 'dist/service-worker.js',
  globDirectory: 'dist',
  globPatterns: [
    '**/*.{html,js,css,png,svg}',
  ],
  skipWaiting: true,
  clientsClaim: true,
  cleanupOutdatedCaches: true,
});

for (const warning of warnings) {
  console.warn(warning);
}
console.log(`service worker generated (${count} files, ${size} bytes)`);
