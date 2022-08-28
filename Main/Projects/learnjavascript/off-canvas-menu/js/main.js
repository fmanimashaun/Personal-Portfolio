// Select element
const button = document.querySelector('button')
const body = document.querySelector('body')

//add event listener to button

button.addEventListener('click', function () { 
    body.classList.toggle('offsite-is-open')
})