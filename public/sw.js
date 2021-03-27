
self.addEventListener('install', function(event) {
  /* Executes before SW is registered */
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  /* Should work without this : But ensures that the SW is registerd corretly */
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ....', event);
  /* Fetch can be used as proxy for calls
     And can be used for both request and response
  */
  event.respondWith(fetch(event.request));
});