const menuButton = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header-menu');
const enjoySection = document.querySelector('.enjoy');
const  menuSection = document.querySelector('.favorite-coffee, .menu');
const menuItems = document.querySelector("#coffee-list #tea-list #dessert-list");
const selectedItem = document.querySelector('.choosen');
const selectedContent = document.querySelector('.item');
const closeBtn = document.querySelector(".close-btn");

let currentPrice = 0;
let totalPrice = 0;
let sizePrice = 0;
let additivePrice =0;

let card = JSON.parse(localStorage.getItem("data")) || [];

//burger animation
const activeBurger = () => {
    menuButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    enjoySection.classList.toggle('active');
    menuSection.classList.toggle('active');
}
menuButton.addEventListener("click", activeBurger);

//menu item selection
const selectItem = () => {
    selectedItem.classList.add('active');
    document.body.style.background = "rgba(64, 63, 61, 0.80))";
}

selectedContent.addEventListener('click', selectItem);

const closeItem = () => {
    selectedItem.classList.remove('active');
}

closeBtn.addEventListener("click", closeItem);
let makeItemList = () => {
    return (menuItems.innerHTML = coffeeItem)
};
