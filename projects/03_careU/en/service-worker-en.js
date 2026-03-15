const CACHE_NAME = 'careu-en-v1';
const urlsToCache = [
    './',
    './index.html',
    './app-en.js',
    '../page.css',
    '../assets/daughter.svg',
    '../assets/son.svg'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});
