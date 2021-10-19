const config = require('./config');

const apiSearch = (query, page=1) => {
  fetch(`https://api.unsplash.com/search/photos/?query=${query}&page=${page}&per_page=9&client_id=${config.key}`)
    .then(imgs => imgs.json())
    .then(imgs => {
      const totalPages = imgs.total_pages;
      const imgArr = imgs.results;
      const target = document.querySelector('.image');
      if (imgs.total === 0) {
        return target.innerHTML = '<p class="no-results">Sorry, there were no results to your search!</p>'
      };
      let html = '';
      imgArr.forEach(img => {
        html += `<img src="${img.urls.small}" class="target-img">`;
      });
      target.innerHTML = html;
      if (page < totalPages) {
        document.querySelector(".nextBtn").classList.remove("hidden");
      };
      if (page > 1) {
        document.querySelector(".prevBtn").classList.remove("hidden");
      };
      if (page === 1) {
        document.querySelector(".prevBtn").classList.add("hidden");
      }
      if (page === totalPages) {
        document.querySelector(".nextBtn").classList.add("hidden");
      }
    })
};

module.exports = { apiSearch };
