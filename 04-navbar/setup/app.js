// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//select my nav-toggle button

const toggle = document.querySelector('.nav-toggle');

const links = document.querySelector('.links');

/* console.log(links.classList); */

toggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
});