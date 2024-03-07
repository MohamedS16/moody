/* Navbar toggler */

var toggler = document.querySelector('.toggler')
var navlinks = document.querySelector('.nav-links')

toggler.addEventListener('click', function () {
    navlinks.classList.toggle('circle-toggle')
})

/* Dropdown List */

var categories = document.querySelector('.categories')
var dropdown = document.querySelector('.dropdown-list')

categories.addEventListener('click', function () {
    dropdown.classList.toggle('hide')
})

/* Navbar-Scroll Behavior */




var allPage = document.querySelector('.all-page')
var dark = document.querySelectorAll('.dark-light')
var sun = document.querySelector('.fa-sun')
var moon = document.querySelector('.fa-moon')

dark.forEach(function(dark) {

    dark.addEventListener('click', function () {
    
    allPage.classList.toggle('light')
    allPage.classList.toggle('dark')

    sun.classList.toggle('hide')
    moon.classList.toggle('hide')
    
    })
    
})




