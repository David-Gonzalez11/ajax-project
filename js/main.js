
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://random.dog/woof.json');
// var randomImageUrl = xhr.response.url;
var imageContainer = document.querySelector('.image-container');

var button = document.querySelector('BUTTON');
button.addEventListener('click', handleClick);
var icon = document.querySelector('I');
icon.addEventListener('click', iconClick);
var favorites = document.querySelector('.favorites');
favorites.addEventListener('click', favoriteTag);

var img = document.querySelector('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJGo_BDmE1BQXej-UemTXxZG6RkDsA95ZnA&usqp=CAU%27');

function handleClick(event) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://random.dog/woof.json');
  xhr.responseType = ('json');
  // add event listener here for load
  xhr.addEventListener('load', function () {
    var randomImageUrl = xhr.response.url;
    img.setAttribute('src', randomImageUrl);
  });
  xhr.send();
}

function iconClick(event) {
  if (event.target === icon) {
    icon.classList.toggle('clicked');
  }
}

function favoriteTag(event) {
  data.view = 'favorites';
  imageContainer.classList.add('hidden');
  button.classList.add('hidden');

}
function renderImages(favorites) {
  var favoritesContainer = document.querySelector('.favorites-container');
  favoritesContainer.setAttribute('data-entry-id', data.nextEntryId);
  var thirdDiv = document.createElement('div');
  thirdDiv.setAttribute('class', 'column');
  var image = document.createElement('img');
  image.setAttribute('src', xhr.reponse);
  image.className = 'dom-images';
  thirdDiv.appendChild(favoritesContainer);
  thirdDiv.appendChild(image);
  return favoritesContainer;
}
