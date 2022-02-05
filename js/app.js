
/**
 * Define Global Variables
 * 
*/
let list = document.getElementById('navbar__list')
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
    const rect = element.getBoundingClientRect()
    return rect.top >= -70 && rect.top < 200
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// create unordered list and add scroll behavior using js 
sections.forEach(section => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.setAttribute('href', `#${section.id}`)
    a.setAttribute('class', 'menu__link')
    a.appendChild(document.createTextNode(`${section.dataset.nav}`))
    li.appendChild(a)
    list.appendChild(li)
    li.addEventListener('click', function (e) {
        e.preventDefault()
        let link = a.getAttribute('href')
        document.querySelector(link).scrollIntoView({
            behavior: 'smooth',
            block: "end",
            inline: "nearest"
        })
    })
})


function mainFunc() {
    sections.forEach(element => {
        if (isInViewport(element)) {
            addClass(element, 'active')
        } else {
            removeClass(element, 'active')
        }
    })
}
document.addEventListener('scroll', mainFunc)

/**
 * End Main Functions
 *
*/



