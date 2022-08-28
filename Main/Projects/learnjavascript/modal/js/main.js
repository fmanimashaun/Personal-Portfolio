// Start writing JavaScript here!
const body = document.querySelector('body')
const modalOpenBtn = document.querySelector('.jsModalButton')
const modalCloseBtn = document.querySelector('.jsModalClose')

//add event listener to open modal

modalOpenBtn.addEventListener('click', function () {
    body.classList.add("modal-is-open")
})

//add event listener to close modal

modalCloseBtn.addEventListener('click', function () {
    body.classList.remove("modal-is-open")
   
})