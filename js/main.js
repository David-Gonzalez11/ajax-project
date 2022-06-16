
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
var favoritesViewText = document.querySelector('.favorites-view-text');
// var notes = document.querySelector('textarea');
var currentImage;
function handleClick(event) {
  data.view = 'home-page';
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
  data.view = 'home-page';
  icon.classList.toggle('clicked');

  favoriteObject = {
    id: data.nextEntryId,
    photoUrl: currentImage
  };
  data.nextEntryId++;
  data.favorites.unshift(favoriteObject);
}

function viewHomePage() {
  data.view = 'home-page';
  // stayOnSamePageAfterRefresh();

}

function stayOnSamePageAfterRefresh() {
  if (data.view === 'favorites') {
    viewFavorites();
  }
  viewHomePage();
}
function renderImages(favorites) {
  var saveBtn = document.createElement('button');
  saveBtn.className = ('save-btn');
  saveBtn.textContent = 'SAVE';

  var colHalfdiv = document.createElement('div');
  colHalfdiv.setAttribute('class', 'column');
  var image = document.createElement('img');
  image.className = 'dom-image';
  image.setAttribute('src', data.favorites[1].photoUrl);
  var h6 = document.createElement('h2');
  h6.textContent = 'Notes:';
  var textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'notes');
  textarea.textContent = data.favorites[0].notes;
  colHalfdiv.appendChild(image);
  colHalfdiv.appendChild(h6);
  colHalfdiv.appendChild(textarea);

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
var saveBtn = document.querySelector('.save-btn');
function viewFavorites(event) {
  data.view = 'favorites';
  imageContainer.classList.add('hidden');
  button.classList.add('hidden');
  button.textContent = 'Favorites';
  saveBtn.classList.remove('hidden');

  favorites.classList.remove('hidden');
  favoritesViewText.classList.remove('hidden');
  favorites.prepend(renderImages(favoriteObject));

}
stayOnSamePageAfterRefresh();

// function saveBttn(event) {
//   data.view = 'favorites';
//   var favoritesList = event.target.closest('column-half');
//   var Id = favoritesList.getAttribute('data-favorites-id');
//   var entry = data.favorites.find(entry => favorites.id == (id));
//   if (event.target === saveBtn) {
//     var notes = document.querySelector('#notes');
//     notes.value = data.favorites.notes
//   }

// }
var saveInput = document.querySelector('input');
saveInput.addEventListener('click', saveInputButton);
function saveInputButton(event) {

}
