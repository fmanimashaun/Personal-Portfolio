// get all needed variables

const countDisplay = document.querySelector(".count")
const incrementBtn = document.querySelector(".counter")
const saveBtn = document.querySelector(".save")
const savePrevious = document.querySelector(".previous")

let count = 0
console.log(countDisplay)
console.log(incrementBtn)
console.log(saveBtn)

// add event listeners for Increment button
incrementBtn.addEventListener("click", () => {
    count++
    countDisplay.textContent = count
})


// add event listeners for save button
saveBtn.addEventListener("click", () => {
    let countString = ` ${count} - `
    savePrevious.innerText += countString
    count = 0
    countDisplay.innerText = count
})
