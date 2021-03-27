
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);

  /* Need to use waitUntil to make it synchronous to avoid trying to fetch from cache before its setup */
  event.waitUntil(
      /* opens a cahce and return a promise */
      caches.open('static').then((cache) => {
        console.log('[Service Worker] Precaching app shell');
        /* add : fires req,gets response and stores it */
        cache.add('/index.html')
        cache.add('/src/js/app.js')
        /* THINK IN TERMS OF REQ!!! - as thse are the keys that will be stored in the cache */
        cache.add('/')
      })
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      /* will match the key here(req object) */
      caches.match(event.request)
      .then((response) => {
        if(response){return response;}
        else{ return fetch(event.request)}
      })
      /* Always use only then because : if not present will recieve null */
      
  );
});