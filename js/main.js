
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://random.dog/woof.json');
// var randomImageUrl = xhr.response.url;
var imageContainer = document.querySelector('.image-container');
var favoritesLink = document.querySelector('.favorites-link');
favoritesLink.addEventListener('click', viewFavorites);
var button = document.querySelector('BUTTON');
button.addEventListener('click', handleClick);
var icon = document.querySelector('I');
icon.addEventListener('click', iconClick);
var favorites = document.querySelector('.favorites');
favorites.addEventListener('click', viewFavorites);
var ul = document.querySelector('ul');
var currentImage;
function handleClick(event) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://random.dog/woof.json');
  xhr.responseType = ('json');
  xhr.addEventListener('load', function () {
    data.view = 'home-page';
    var img = document.querySelector('img');
    img.setAttribute('src', xhr.response.url);
    currentImage = xhr.response.url;
  });
  xhr.send();
}
var favoriteObject;
function iconClick(event) {
  icon.classList.toggle('clicked');
  console.log('vlaue of current image', currentImage);
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
  favorites.classList.remove('hidden');
  ul.prepend(renderImages(favoriteObject));
}
function viewHomePage() {
  data.view = 'home-page';
}
function stayOnSamePageAfterRefresh() {
  if (data.view === 'home-page') {
    viewHomePage();
  } else {
    viewFavorites();
  }
}

function renderImages(favorites) {
  var list = document.createElement('li');
  var firstDiv = document.createElement('div');
  firstDiv.setAttribute('class', 'row');
  var colHalfdiv = document.createElement('div');
  colHalfdiv.setAttribute('class', 'column-half');
  var image = document.createElement('img');
  image.setAttribute('src', favorites.photoUrl);
  var h6 = document.createElement('h2');
  h6.textContent = 'Notes:';
  var heading = document.createElement('textarea');
  list.appendChild(firstDiv);
  firstDiv.appendChild(colHalfdiv);
  colHalfdiv.appendChild(image);
  colHalfdiv.appendChild(h6);
  colHalfdiv.appendChild(heading);
  return list;

}
