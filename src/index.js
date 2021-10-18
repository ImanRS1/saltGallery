import './styles/main.scss';

// Create heading node
const header = document.createElement('header');
header.className = 'page-header';
header.innerHTML = '<nav class="page-header__navbar"><h1 class="navbar__title">LOGO</h1></nav>';

const footer = document.createElement('footer');
footer.className = 'page-footer';
footer.innerHTML = '<a href="https://www.github.com" class="page-footer__github-link">GitHub logo temp</a>';

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(header);
app.append(footer);
