import menuItems from './data.js';
const menuButton = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header-menu');
const enjoySection = document.querySelector('.enjoy');
const  menuSection = document.querySelector('.favorite-coffee, .menu');
const selectedItem = document.querySelector('.choosen');
const selectedContent = document.querySelector('.item');
const closeBtn = document.querySelector(".close-btn");
const itemImg = document.querySelector(".item-img");
const items = menuItems.map((item, id = 0) => {
    item.id = id++;
    return {...item}
});

let currentItem = null;
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
    document.body.style.background = "#403F3DCC";
    document.body.style.overflow = "hidden";
}

const generateItem = () => {
    itemImg.innerHTML = `<img src="../img/pictures/${currentItem.category}-${currentItem.id}.jpg" alt="item"`;
}

selectedContent.addEventListener('click', selectItem);

const closeItem = () => {
    selectedItem.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.body.style.background = "#E1D4C9";
}

closeBtn.addEventListener("click", closeItem);



let makeItemList = () => {
    return (menuItems.innerHTML = coffeeItem)
};
