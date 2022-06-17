
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://random.dog/woof.json');
// var randomImageUrl = xhr.response.url;
var $imageContainer = document.querySelector('.image-container');
var $favoritesLink = document.querySelector('.favorites-link');
$favoritesLink.addEventListener('click', viewFavorites);
var $button = document.querySelector('BUTTON');
$button.addEventListener('click', handleClick);
var $icon = document.querySelector('.icon');
$icon.addEventListener('click', iconClick);
var $favorites = document.querySelector('.favorites');
var $favoritesViewText = document.querySelector('.favorites-view-text');
var notes = document.createElement('textarea');
notes.setAttribute('id', 'notes');
notes.textContent = notes.value;
var editing = document.querySelector('editing');
var textId = document.querySelector('#notes');
var form = document.querySelector('form');
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
  $icon.classList.toggle('clicked');
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
  saveBtn.addEventListener('click', handleSubmit);
  saveBtn.className = ('save-btn');
  saveBtn.textContent = 'SAVE';
  var colHalfdiv = document.createElement('div');
  colHalfdiv.setAttribute('class', 'column');
  colHalfdiv.setAttribute('data-id', data.favorites.id);

  var image = document.createElement('img');
  image.className = 'dom-image';
  image.setAttribute('src', favorites.photoUrl);
  var h6 = document.createElement('h2');
  h6.textContent = 'Notes:';
  var textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'notes');
  // textarea.textContent = favorites.notes;
  var editIcon = document.createElement('i');
  editIcon.className = 'fas fa-pen';
  var AddIcon = document.createElement('i');
  AddIcon.className = 'fa-solid fa-plus';

  colHalfdiv.appendChild(image);
  colHalfdiv.appendChild(h6);
  colHalfdiv.appendChild(textarea);
  colHalfdiv.appendChild(saveBtn);

  return colHalfdiv;
}
window.addEventListener('DOMContentLoaded', domContentLoaded);
function domContentLoaded(event) {
  for (var i = 0; i < data.favorites.length; i++) {
    if (data.favorites[i] !== null) {
      var entry = renderImages(data.favorites[i]);
      $favorites.appendChild(entry);
    }
  }
}
var saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', handleSubmit);
function viewFavorites(event) {
  data.view = 'favorites';
  $imageContainer.classList.add('hidden');
  $button.classList.add('hidden');
  $button.textContent = 'Favorites';
  // saveBtn.classList.remove('hidden');
  $favorites.classList.remove('hidden');
  $favoritesViewText.classList.remove('hidden');
  $favorites.prepend(renderImages(favoriteObject));
}
// stayOnSamePageAfterRefresh();

function saveInputButton(event) {
  console.log(' i was clicked');
  var newFavoriteObject = {
    id: data.nextEntryId,
    photoUrl: currentImage,
    notes
  };
}
var saveInput = document.querySelector('input');
saveInput.addEventListener('click', handleSubmit);
var newFavoriteObject;

console.log('data.favorites', data.favorites);
function handleSubmit(event) {
  event.preventDefault();
  newFavoriteObject = {
    id: data.nextEntryId,
    photoUrl: currentImage,
    notes
  };
  // data.favorites.prepend(renderImages(newFavoriteObject));
  var indexToUpdate = data.favorites.findIndex(favorites => (Number(data.favorites.id) === Number(data.nextEntryId)));
  data.favorites[indexToUpdate] = newFavoriteObject;

  replaceExistingEntry(newFavoriteObject);
}

function replaceExistingEntry(favorites) {
  for (var i = 0; i < data.favorites.length; i++) {
    var entryId = data.favorites[i].id;
  }
  var updatedNode = renderImages(newFavoriteObject);
  console.log('value of updated Node', updatedNode);
  var entryAttribute = '[data-id="' + data.favorites[entryId] + '"]';
  console.log('value of entryAttribute:', entryAttribute);
  var oldListItem = document.querySelector(entryAttribute);
  console.log('value of oldListItem', oldListItem);
  oldListItem.replaceWith(updatedNode);
}

// function editClick(event) {
//   data.view = 'editingFavorites';
//   var toEdit = event.target.closest('column-half');
//   if (event.target === 'I') {
//     $favorites.classList.add('hidden');
//     $imageContainer.classList.add('hidden');
//     var $notes = document.querySelector('#textarea');
//     var $phooto = document.querySelector('#photo');
//     $notes.value = data.editing.notes;
//     $phooto.value = data.editing.photoUrl;
//   }
// }
