/**
 * Catches the install event for the Service Worker and adds files to the cache
 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('restaurant-reviews-static-v1').then(cache => {
      return cache.addAll([
        '/',

        /* CSS */
        '/css/styles.css',
        '/css/medium.css',
        '/node_modules/normalize.css/normalize.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',

        /* JS */
        '/js/dbhelper.js',
        '/js/main.js',
        '/sw_registration.js',

        /* Data */
        '/data/restaurants.json',

        /* HTML */
        '/index.html',
        '/restaurant.html',

        /* Img */
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
      ]).then(err => {
          console.log('All files have been cached!')
        }).catch(err => {
          console.log('All files have NOT been cached!')
        });
    })
  );
});

/**
 * Catches the fetch events and if the requested file is already in the cache,
 * it uses it, otherwise it fetches to the network.
 */
 self.addEventListener('fetch', function(event) {
   event.respondWith(
     caches.match(event.request).then(function(response) {
       return response || fetch(event.request);
     })
   );
 });
