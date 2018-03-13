var button = document.querySelector('.menu-hamburger');
var page = document.querySelector('.full-container');
var menu = document.querySelector('.menu');


button.addEventListener('blur', function() {


    if(menu.style.display == 'block') {
        menu.style.display="none";


        
    }
   
});
  
button.addEventListener('click', function() {

    
    if(menu.style.display == 'block') {
       
        menu.style.display="none";
        button.blur();
        
    }
    else {
        menu.style.display="block";
        
    }

});



//
//test// button.addEventListener('click', function() {

//     if(menu.style.display == 'block') {
//         menu.style.display="none";
//         btn.classList.remove('change');
       
        
      
//     }
//     else {
//         menu.style.display="block";
//         btn.classList.add('change');
        
//     }



    
// });