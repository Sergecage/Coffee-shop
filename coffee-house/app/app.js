import menuItems from './data.js';
const menuButton = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header-menu');
const enjoySection = document.querySelector('.enjoy');
const  menuSection = document.querySelector('.favorite-coffee, .menu');
const selectedItem = document.querySelector('.choosen');
const selectedContent = document.querySelector('.menu-container');
const closeBtn = document.querySelector(".close-btn");
const itemImg = document.querySelector(".item-img");
const itemName = document.querySelector(".h3-heading");
const itemText = document.querySelector(".text");
const itemSizes = document.querySelector(".sizes .item-sizes");
const itemAdditive = document.querySelector(".additives .item-sizes");
const itemPrice = document.querySelector(".price");
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

//click menu item
const chooseItem = (elem) => {
    if (elem.target.closest(".item")) {
        const itemId = elem.target.closest(".item").dataset.id;
        currentItem = items.find((item) => item.id == itemId);
        totalPrice = + currentItem.price;
        selectItem()
    }
}
//menu item selection
const selectItem = () => {
    selectedItem.classList.add('active');
    document.body.style.background = "#403F3DCC";
    document.body.style.overflow = "hidden";
    generateItem();
}

const createItem = (item) => {
    const itemCard = document.createElement('li');
    itemCard.className = "item";
    itemCard.dataset.id = item.id;
    const itmImg = document.createElement("img");
    itmImg.className = "itm-img";
    itmImg.innerHTML = `<img src="../img/pictures/${item.category}-${item.id}.svg alt="coffee-drink">`;
    const itmText = document.createElement("div");
    itmText.className = "item-text";
    const itmName = document.createElement("h3");
    itmName.classList = "h3-heading";
    const itmText2 = document.createElement("p");
    itmText2.classList = "text";
    const itmSubName = document.createElement("h3");
    itmSubName.classList = "h3-heading price";
    itmText.append(itmName, itmText2, itmSubName);
    itemCard.append(itmImg, itmText);
    return itemCard;
}

//generate content for modal
const generateItem = () => {
    itemImg.innerHTML = `<img src="../img/pictures/${currentItem.category}-${currentItem.id}.svg" alt=""`;
    itemName.textContent = currentItem.name;
    itemText.textContent = currentItem.description;
    for (let i = 0; i < itemSizes.children.length; i++) {
        const size = itemSizes.children[i].dataset.size;
        itemSizes.children[i].querySelector(".size-value").textContent = currentItem.sizes[size].size;
    }
    for (let i = 0; i < itemAdditive.children.length; i++) {
        const additive = itemAdditive.children[i].dataset.add;
        itemAdditive.children[i].querySelector(".size-value").textContent = currentItem.additives[additive].name;
    }
    totalPrice = currentItem.price;
    itemPrice.textContent = `$${getPrice()}`;
}

selectedContent.addEventListener('click', chooseItem);
//update price

const getPrice = () => {

}
//close item card
const closeItem = () => {
    selectedItem.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.body.style.background = "#E1D4C9";
}

closeBtn.addEventListener("click", closeItem);


