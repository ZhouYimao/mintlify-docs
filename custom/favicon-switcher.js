// Dynamic favicon switcher based on OS color scheme
(function() {
  function setFavicon() {
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/svg+xml';
    favicon.rel = 'icon';
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      favicon.href = '/favicon-white.svg';
    } else {
      favicon.href = '/favicon-black.svg';
    }
    
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }
  
  // Set initial favicon
  setFavicon();
  
  // Listen for changes in color scheme
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
  }
})();