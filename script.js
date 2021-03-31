//Toggles our hamburger menu on/off 
function toggleMenu() {
    var hiddenMenu = document.getElementById('burger-nav');
    hiddenMenu.classList.toggle('show');
}
//adds height to the hero-section below the navigation
function addHeight() {
    var addHeight = document.getElementById('content-section');
    addHeight.classList.toggle('content-height-after');
}
//This funtion takes care of the logo transition from LG to SM on scroll
// function scrollFunction() {
//     var navContainer = document.getElementById("nav-container");
//     var logo = document.getElementById("logo");
//     var smallLogo = document.getElementById("small-logo");
//     //If page has been scrolled, make navigations height smaller. 
//     //Hide the large logo and display small logo.
//     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//         navContainer.style.height = '20px';
//         logo.style.transform = "translate(0px, -1000px)";
//         smallLogo.style.transform = "translate(0px, 0px)";
//     }
//     //else make navigations height larger.
//     //Display larger logo and hide smaller logo.
//     else {
//         document.getElementById('nav-container').style.height = '100px';
//         logo.style.transform = "translate(0px, 0px)";
//         smallLogo.style.transform = "translate(0px, -1000px)";
//     }
// }

//event listeners
//listens for the hamburger icon to be cliecked and calls toggleMenu function
document.getElementById('burger').addEventListener('click', toggleMenu);
//listens for the hamburger icon to be cliecked and calls addHeight function
document.getElementById('burger').addEventListener('click', addHeight);
//Listens on the window for a scroll and calls the scrollFunction
window.onscroll = function() { scrollFunction() }