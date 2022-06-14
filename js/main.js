// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://random.dog/woof.json');
// var button = document.querySelector('BUTTON');
// button.addEventListener('click', handleClick);
// xhr.responseType = ('json');
// var img = document.querySelector('img');
// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJGo_BDmE1BQXej-UemTXxZG6RkDsA95ZnA&usqp=CAU');
// function handleClick(event) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://random.dog/woof.json');
//   if (event.target === button) {
//     xhr.addEventListener('click', handleClick);
//     img.setAttribute('src', xhr.response.url);
//   }
// }
// xhr.send();

// // function renderImages(images) {
// //   var li = document.createElement('li');
// //   var div = document.createElement('div');
// //   div.setAttribute('class', 'row');
// //   var secondDiv = document.createElement('div');
// //   secondDiv.setAttribute('class', 'column-img');
// //   var img = document.createElement('img');
// //   li.appendChild(div);
// //   div.appendChild(secondDiv);
// //   secondDiv.appendChild(img);
// //   return div;
// // }
// // renderImages();

// function getImage() {
//   img.setAttribute('src', xhr.response.url);
// }

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://random.dog/woof.json');
var button = document.querySelector('BUTTON');
button.addEventListener('click', handleClick);

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
