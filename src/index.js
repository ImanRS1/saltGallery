import './styles/main.scss';

const apiFetch = require('../api');

// Create heading node
const header = document.createElement('header');
header.className = 'page-header';
header.innerHTML = '<nav class="page-header__navbar"><h1 class="navbar__title">LOGO</h1></nav>';

const footer = document.createElement('footer');
footer.className = 'page-footer';
footer.innerHTML = '<a href="https://www.github.com" class="page-footer__github-link">GitHub logo temp</a>';

const searchBar = document.createElement('div');
searchBar.className = 'search-bar';
searchBar.innerHTML = '<input type="text" placeholder="SEARCH" class="search-bar__search-input">';

const imageContainer = document.createElement('section');
imageContainer.className = 'image-container';
imageContainer.innerHTML = '<div class="image"></div>';

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(header);
app.append(searchBar);
app.append(imageContainer);
app.append(footer);
