const config = require('./config');

const apiFetch = fetch(`https://api.unsplash.com/photos/?client_id=${config.key}`)
  .then(img => img.json())
  .then(img => img[0])
  .then(img => img.urls)
  .then(img => img.raw)
  .then(img => {
    const target = document.querySelector('.image');
    target.innerHTML = `<img src="${img}" class="target-img">`;
  });

module.exports = apiFetch;
