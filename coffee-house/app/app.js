const menuButton = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header-menu');
const enjoySection = document.querySelector('.enjoy');
const  menuSection = document.querySelector('.favorite-coffee, .menu');
const menuItems = document.querySelector("#coffee-list, #tea-list, #dessert-list");

let card = JSON.parse(localStorage.getItem("data")) || [];

const activeBurger = () => {
    menuButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    enjoySection.classList.toggle('active');
    menuSection.classList.toggle('active');
}
menuButton.addEventListener("click", activeBurger);

let makeItemList = () => {

};
