
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
     /* Executes after SW is installed */
      console.log('Service worker registered!');
    });
}