const config = require('./config');

const apiSearch = state => {
  fetch(`https://api.unsplash.com/search/photos/?query=${state.inputValue}&page=${state.resultPage}&per_page=9&client_id=${config.key}`)
    .then(imgs => imgs.json())
    .then(imgs => state.searchResults = imgs)
    .then(() => dataHandler(state));
};

const resultValidator = total => {
  if (total === 0) {
    return target.innerHTML = '<p class="no-results">Sorry, there were no results to your search!</p>'
  };
}

const dataHandler = state => {
  const data = state.searchResults;
  const totalPages = data.total_pages;
  const imgArr = data.results;
  const target = document.querySelector('.image');
  resultValidator(data.total);
  let html = '';
  imgArr.forEach(img => {
    html += `<img src="${img.urls.small}" class="target-img">`;
  });
  target.innerHTML = html;
  const page = state.resultPage;
  createButtons(page, totalPages);
}

const createButtons = (page, totalPages) => {
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
}

module.exports = { apiSearch };
