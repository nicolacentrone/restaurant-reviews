if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/sw.js').then(function() {
    console.log('Service worker registration worked');
  }).catch(function(error){
    console.log('Service worker registration failed:' + error);
  });
}
