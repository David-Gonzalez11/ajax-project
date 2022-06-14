/* exported data */
var data = {
  view: 'home-page',
  favorites: [],
  nextEntryId: 1
};

var previousTodosJSON = localStorage.getItem('Ajax Project');
if (previousTodosJSON !== null) {
  data = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', handleWindows);
function handleWindows(event) {
  var todosJSON = JSON.stringify(data);
  localStorage.setItem('Ajax Project', todosJSON);
}
