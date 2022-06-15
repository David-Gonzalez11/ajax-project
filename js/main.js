
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://random.dog/woof.json');
// var randomImageUrl = xhr.response.url;
var imageContainer = document.querySelector('.image-container');
var favoritesLink = document.querySelector('.favorites-link');
favoritesLink.addEventListener('click', viewFavorites);
var button = document.querySelector('BUTTON');
button.addEventListener('click', handleClick);
var icon = document.querySelector('.icon');
icon.addEventListener('click', iconClick);
var favorites = document.querySelector('.favorites');
favorites.addEventListener('click', viewFavorites);
var favoritesViewText = document.querySelector('.favorites-view-text');
var saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', iconClick);
var currentImage;
function handleClick(event) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://random.dog/woof.json');
  xhr.responseType = ('json');
  xhr.addEventListener('load', function () {
    data.view = 'home-page';
    var img = document.querySelector('.image');
    img.setAttribute('src', xhr.response.url);
    currentImage = xhr.response.url;
  });
  xhr.send();
}
var favoriteObject;
function iconClick(event) {

  icon.classList.toggle('clicked');

  favoriteObject = {
    id: data.nextEntryId,
    photoUrl: currentImage
  };
  data.nextEntryId++;
  data.favorites.unshift(favoriteObject);

}

function viewFavorites(event) {
  data.view = 'favorites';

  imageContainer.classList.add('hidden');
  button.classList.add('hidden');

  button.textContent = 'Favorites';
  favorites.classList.remove('hidden');
  favoritesViewText.classList.remove('hidden');
  saveBtn.classList.remove('hidden');
  favorites.prepend(renderImages(favoriteObject));
  stayOnSamePageAfterRefresh();

}

function viewHomePage() {
  data.view = 'home-page';
  stayOnSamePageAfterRefresh();
}

function stayOnSamePageAfterRefresh() {
  if (data.view === 'home-page') {
    viewHomePage();
  } else if (data.view === 'favorites') {
    viewFavorites();
  }
}

function renderImages(favorites) {
  var saveBtn = document.createElement('button');
  saveBtn.className = ('save');
  saveBtn.textContent = 'SAVE';

  var colHalfdiv = document.createElement('div');
  colHalfdiv.setAttribute('class', 'column');
  var image = document.createElement('img');
  image.className = 'dom-image';
  image.setAttribute('src', favorites.photoUrl);
  var h6 = document.createElement('h2');
  h6.textContent = 'Notes:';
  var heading = document.createElement('textarea');
  heading.setAttribute('id', 'notes');
  heading.classList.add('notes');
  colHalfdiv.appendChild(image);
  colHalfdiv.appendChild(h6);
  colHalfdiv.appendChild(heading);

  return colHalfdiv;

}
window.addEventListener('DOMContentLoaded', domContentLoaded);
function domContentLoaded(event) {
  for (var i = 0; i < data.favorites.length; i++) {

    if (data.favorites[i] !== null) {
      var entry = renderImages(data.favorites[i]);
      favorites.appendChild(entry);
    }
  }
}
