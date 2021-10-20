import './styles/main.scss';

const { apiSearch } = require('../api');

const state = {
  inputValue: null,
  searchResults: [],
  resultPage: 1,
};

// Create DOM elements

const header = document.createElement('header');
header.className = 'page-header';
header.innerHTML = '<nav class="page-header__navbar"><h1 class="navbar__title">LOGO</h1></nav>';

const footer = document.createElement('footer');
footer.className = 'page-footer';
footer.innerHTML = '<a href="https://www.github.com" class="page-footer__github-link">GitHub</a>';

const searchBar = document.createElement('div');
searchBar.className = 'search-bar';
searchBar.innerHTML = '<form><input type="text" placeholder="SEARCH" class="search-bar__search-input" list="history-list"><button type="submit" class="submitBtn">Search</button></form>';

const imageContainer = document.createElement('section');
imageContainer.className = 'image-container';
imageContainer.innerHTML = '<div class="image"></div><div class="buttons"><button class="prevBtn hidden">Previous</button><button class="nextBtn hidden">Next</button></div>';

const dropDown = document.createElement('datalist');
dropDown.className = 'list-group';
dropDown.setAttribute('id', 'history-list');

// Append elements to DOM

const app = document.querySelector('#root');
app.append(header);
app.append(searchBar);
app.append(dropDown);
app.append(imageContainer);
app.append(footer);

// Local Storage logic

const datalist = document.querySelector('.list-group');
let recentSearches;

if (localStorage.recentSearches && localStorage.recentSearches !== '') {
  recentSearches = JSON.parse(localStorage.recentSearches);
} else {
  recentSearches = [];
}

const isDuplicateValue = (arr, text) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === text) {
      return true;
    }
  }
  return false;
};

const makeListItem = (text, parent) => {
  const listItem = document.createElement('option');
  listItem.value = text;
  listItem.className = 'list-group-item';
  parent.appendChild(listItem);
};

recentSearches.forEach(element => {
  makeListItem(element, datalist);
});

// Do logic in the DOM

document.querySelector('.submitBtn').addEventListener('click', e => {
  e.preventDefault();
  state.inputValue = document.querySelector('.search-bar__search-input').value;
  state.resultPage = 1;

  apiSearch(state);
  if (
    state.inputValue === ''
    || isDuplicateValue(recentSearches, state.inputValue)
  ) {
    return;
  }
  recentSearches.push(state.inputValue);
  makeListItem(state.inputValue, datalist);
  localStorage.recentSearches = JSON.stringify(recentSearches);
  state.inputValue = '';
});

document.querySelector('.nextBtn').addEventListener('click', e => {
  e.preventDefault();
  state.inputValue = document.querySelector('.search-bar__search-input').value;
  state.resultPage += 1;
  apiSearch(state);
});

document.querySelector('.prevBtn').addEventListener('click', e => {
  e.preventDefault();
  state.inputValue = document.querySelector('.search-bar__search-input').value;
  state.resultPage -= 1;
  apiSearch(state);
});
