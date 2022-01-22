/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
var list = document.getElementById('navbar__list')
const sections = document.querySelectorAll('[data-nav]')
const viewHeight = document.documentElement.clientHeight
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function addClass(element, className) {
    element.classList.add(className)
}

function removeClass(element, className) {
    element.classList.remove(className)
}

const isInViewport = (element) => {
    const distance = element.getBoundingClientRect()
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= window.innerHeight &&
        distance.right <= window.innerWidth
    )
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// create unordered list
sections.forEach(section => {
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.setAttribute('href', `#${section.id}`)
    a.setAttribute('class', 'menu__link')
    a.appendChild(document.createTextNode(`${section.dataset.nav}`))
    li.appendChild(a)
    list.appendChild(li)
})

/* another way to create unordered list
    for (let i = 1; i <= sections.length; i++) {
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.setAttribute('href', `#section${i}`)
        a.setAttribute('class', 'menu__link')
        a.appendChild(document.createTextNode(`Section ${i}`))
        li.appendChild(a)
        list.appendChild(li)
    }
*/

function mainFunc() {
    // loop through all sections 
    sections.forEach(element => {
        if (isInViewport(element)) {
            addClass(element, 'active')
        } else {
            removeClass(element, 'active')
        }
    })
}
document.addEventListener('scroll', mainFunc)

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


