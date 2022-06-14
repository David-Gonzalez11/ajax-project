
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://random.dog/woof.json');
// var randomImageUrl = xhr.response.url;
var imageContainer = document.querySelector('.image-container');

var button = document.querySelector('BUTTON');
button.addEventListener('click', handleClick);
var icon = document.querySelector('I');
icon.addEventListener('click', iconClick);
var favorites = document.querySelector('.favorites');
favorites.addEventListener('click', viewFavorites);

var img = document.querySelector('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJGo_BDmE1BQXej-UemTXxZG6RkDsA95ZnA&usqp=CAU%27');

function handleClick(event) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://random.dog/woof.json');
  xhr.responseType = ('json');
  xhr.addEventListener('load', function () {
    data.view = 'home-page';
    img.setAttribute('src', xhr.response.url);
  });
  xhr.send();
}

function iconClick(event) {
  icon.classList.toggle('clicked');
  xhr.addEventListener('load', function () {

    var favoriteObject = {
      photoUrl: xhr.response.url,
      id: data.nextEntryId
    };
    console.log(favoriteObject);

    data.nextEntryId++;
    data.favorites.unshift(favoriteObject);
  }

  );

}

function viewFavorites(event) {
  data.view = 'favorites';
  imageContainer.classList.add('hidden');
  button.classList.add('hidden');
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

// function renderImages(favorites) {
//   favoritesContainer.setAttribute('data-entry-id', favorites.id);
//   var thirdDiv = document.createElement('div');
//   thirdDiv.setAttribute('class', 'column');
//   var image = document.createElement('img');
//   image.setAttribute('src', favorites);
//   image.className = 'dom-images';
// imgElement.setAttribute('alt', 'dog');

//   thirdDiv.appendChild(favoritesContainer);
//   thirdDiv.appendChild(image);
//   return favoritesContainer;
// }
