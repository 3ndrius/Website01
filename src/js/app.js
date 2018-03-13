var button = document.querySelector('.menu-hamburger');
var page = document.querySelector('.full-container');
var menu = document.querySelector('.menu');

button.addEventListener('blur', function() {

    if(menu.style.display == 'none') {
        menu.style.display="block";
    }
    else {
        menu.style.display="none";
    }
});
  
button.addEventListener('focus', function() {

    if(menu.style.display == 'block') {
        menu.style.display="none";
    }
    else {
        menu.style.display="block";
    }
});



