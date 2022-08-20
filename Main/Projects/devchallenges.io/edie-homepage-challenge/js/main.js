//Toggle search bar for mobile

//create variables
const menuButton = document.querySelector('.nav__menu');
const closeButton = document.querySelector('.close__icon');
const mobileMenu = document.querySelector('.mobile__menu');
const serviceCard = document.querySelector('.service');
const bodyWidth = window.innerWidth;


//add event listener for menu button 
menuButton.addEventListener('click', function () {
    if (bodyWidth < 768) {
        mobileMenu.style.display = 'block';
    }
});


//add event listener for close button
closeButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
});


/*
//restore the menu when the window is resized
window.addEventListener("resize", function() {
    if(bodyWidth < 820){
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});
*/