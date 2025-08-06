const cacheName = 'zombie-cache-v1';
const assets = [
  './',
  'index.html',
  'zombie.png',
  'axe.png',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
