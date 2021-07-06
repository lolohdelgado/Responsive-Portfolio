// Select DocumentObjectModel Items
const menuBtn = document.querySelector('.menu-btn');
//querySelector grabs only the first one
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
//querySelectorAll grabs all the items of that spice (array)

//Set Initial State of the Menu

let showMenu = false;   //false=close true=open

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(items => items.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(items => items.classList.remove('show'));

        showMenu = false;
    }
}

