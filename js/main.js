var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://random.dog/woof.json');
var button = document.querySelector('BUTTON');
button.addEventListener('click', handleClick);
xhr.responseType = ('json');
var img = document.querySelector('img');
var ul = document.querySelector('ul');
xhr.addEventListener('load', handleClick);
// function hi() {

//   // console.log(xhr.status);
//   // console.log(xhr.response);

// }

function handleClick(event) {
  // console.log('rfi4f');
  img.setAttribute('src', xhr.response.url);
  img.setAttribute('class', 'column-img');
  img.setAttribute('class', 'img');
  ul.appendChild(img);
  xhr.response.url++;

}
xhr.send();

// function buttonCLick(event) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://random.dog/woof.json');
//   img.setAttribute('src', xhr.response.url);
//   ul.appendChild(img);

// }
