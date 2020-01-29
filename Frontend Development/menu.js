window.onload=function(){

var button = document.querySelector(".javabutton");

var menu = document.querySelector('.javascript_call');

// var menuZichtbaar = false;

// button.addEventListener('dblclick', toonMenu);

console.log(button)
console.log(menu)

button.addEventListener('click', toggleMenu);

// function toonMenu(){
//   menu.classList.add('show');
// }

function toggleMenu(){
  menu.classList.toggle('show');
}
}
