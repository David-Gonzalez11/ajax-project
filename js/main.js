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
  data.favorites.push(favoriteObject);
  $favorites.prepend(renderImages(favoriteObject));
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
  saveBtn.setAttribute('data-id', favorites.id);
  var paragraph = document.createElement('p');
  paragraph.textContent = 'Date created:' + ' ' + new Date();
  var colHalfdiv = document.createElement('div');
  colHalfdiv.setAttribute('class', 'column');
  colHalfdiv.setAttribute('data-id', favorites.id);
  var image = document.createElement('img');
  image.className = 'dom-image';
  image.setAttribute('src', favorites.photoUrl);
  var h6 = document.createElement('h2');
  h6.textContent = 'Notes:';
  var textarea = document.createElement('textarea');
  textarea.setAttribute('id', `notes-${favorites.id}`);
  textarea.setAttribute('data-id', favorites.id);
  var trashIcon = document.createElement('i');
  trashIcon.className = 'fa-solid fa-trash-can';
  trashIcon.setAttribute('id', `trash-${favorites.id}`);
  trashIcon.setAttribute('data-id', favorites.id);
  trashIcon.addEventListener('click', showModal);
  // pre fill text content
  textarea.textContent = favorites.notes;
  var editIcon = document.createElement('i');
  editIcon.className = 'fas fa-pen';
  colHalfdiv.appendChild(image);
  colHalfdiv.appendChild(h6);
  colHalfdiv.appendChild(textarea);
  colHalfdiv.appendChild(saveBtn);
  colHalfdiv.appendChild(trashIcon);
  colHalfdiv.appendChild(paragraph);
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

function viewFavorites(event) {
  data.view = 'favorites';
  $imageContainer.classList.add('hidden');
  $button.classList.add('hidden');
  $button.textContent = 'Favorites';
  $favorites.classList.remove('hidden');
  $favoritesViewText.classList.remove('hidden');
  // may need but not sure

}
stayOnSamePageAfterRefresh();

var newFavoriteObject;

function handleSubmit(event) {
  event.preventDefault();
  var dataId = event.target.getAttribute('data-id');
  var notes = document.getElementById(`notes-${dataId}`).value;
  var datasetId = Number(document.getElementById(`notes-${dataId}`).dataset.id);

  newFavoriteObject = {
    id: datasetId,
    photoUrl: data.favorites[Number(dataId)].photoUrl,
    notes
  };

  data.nextEntryId++;
  data.favorites[datasetId] = newFavoriteObject;
}

function deleteEntry(event) {
  // console.log(currentEntry);
  // var trash = document.getElementById(`trash-${dataId}`);
  var dataId = event.target.getAttribute('data-id');

  var datasetId = Number(document.getElementById(`trash-${dataId}`));
  var favorites = document.querySelectorAll('.column');
  for (var i = 0; i < data.favorites.length; i++) {

    var favoritesIdValue = favorites[i].getAttribute('data-id');
    var parsedValue = parseInt(favoritesIdValue);
    if (datasetId === parsedValue) {
      data.favorites.splice(i, 1);
      favorites[i].remove();
      viewFavorites();
    }
  }
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

var modal = document.querySelector('#modal');
var overlay = document.querySelector('#overlay');
var confirmModal = document.querySelector('#confirm-modal');
confirmModal.addEventListener('click', deleteEntry);
var cancelBtn = document.querySelector('#close-modal-btn');
cancelBtn.addEventListener('click', removeEntry);
$favorites.addEventListener('click', showModal);

function showModal(event) {
  if (event.target.tagName === 'I') {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
}

function removeEntry(event) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

}

// function dateCreated(event) {
//   document.getElementById('dateText').textContent = new Date();
// }
var homeText = document.querySelector('.home');
homeText.addEventListener('click', clickHome);
function clickHome(event) {
  data.view = 'home-page';
  $favorites.classList.add('hidden');
  $favoritesViewText.classList.add('hidden');
  $imageContainer.classList.remove('hidden');
  $button.classList.remove('hidden');
  $button.textContent = 'Get Random Dog Image';
}
