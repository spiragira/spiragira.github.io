var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/coding.jpeg') {
      myImage.setAttribute ('src','images/nabrosok.png');
    } else {
      myImage.setAttribute ('src','images/coding.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Пожалуйста, введите своё имя');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Привет, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Привет, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}