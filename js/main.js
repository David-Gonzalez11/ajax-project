
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://random.dog/woof.json');

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
  var imageContainer = document.querySelector('.image-container');
  imageContainer.classList.add('hidden');
  button.classList.add('hidden');

}
