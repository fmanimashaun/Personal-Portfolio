//Select all the accordion elements
const accordions = Array.from(document.querySelectorAll('.faq-accordion'))

accordions.forEach(accordion => {
    // Find the accordion header
    const accordionHeader = accordion.querySelector('.faq-accordion-header')

    // Add event listener to the accordion header
    accordionHeader.addEventListener('click', function() {
        // Toggle the is-open class
        accordion.classList.toggle('is-open')
    })
})