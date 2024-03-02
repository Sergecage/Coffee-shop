import menuItems from './data.js';
const menuButton = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header-menu');
const enjoySection = document.querySelector('.enjoy');
const  menuSection = document.querySelector('.favorite-coffee, .menu');
const selectedItem = document.querySelector('.choosen');
const selectedContent = document.querySelector('.coffee-list');
const closeBtn = document.querySelector(".close-btn");
const itemImg = document.querySelector(".item-img");
const itemName = document.querySelector(".choosen-name");
const itemText = document.querySelector(".choosen-text");
const itemSizes = document.querySelector(".sizes .item-sizes");
const itemAdditive = document.querySelector(".additives .item-sizes");
const itemPrice = document.querySelector(".price");
const btnMenu = document.querySelector(".btn-menu");
const loadMoreBtn = document.querySelector(".refresh");
const items = menuItems.map((item, id = 0) => {
    item.id = id++;
    return {...item}
});

let currentItem = null;
let totalPrice = 0;
let sizePrice = 0;
let additivePrice =0;


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
        totalPrice = +currentItem.price;
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

const addMoreCards = () => {
    for ( let i =0; i < selectedContent.children.length; i++) {
        selectedContent.children[i].style.display = 'block';
    }
    hideMoreBtn();
};

const changeCategory = () => {
    if (event.target.classList.contains("btn-menu")) {
        const coffeeTab = event.target;
        if (!coffeeTab.classList.contains('active')) {
            const category = coffeeTab.dataset.category;
            setActiveCat(coffeeTab);
            uploadCards(category);
        }
    }
}

const setActiveCat = (elem) => {
    for (let i = 0;  i < btnMenu.children.length; i++) {
        btnMenu.children[i].classList.remove('active');
    }
    elem.classList.add('active');
}

const uploadCards = (elem) => {
    selectedContent.innerHTML = '';
    const cards = generateItemCard(elem);
    selectedContent.append(...cards);
    if (cards.length <= 4) {
        hideMoreBtn();
    } else {
        loadMoreCardBtn();
    }
}

const createItem = (item) => {
    const itemCard = document.createElement('li');
    itemCard.className = "item";
    itemCard.dataset.id = item.id;
    const itmImg = document.createElement("div");
    itmImg.className = "item-image";
    const itmImg2 = document.createElement("img");
    itmImg2.className = "item-img";
    itmImg2.src = `../img/pictures/${item.category}-${item.id}.svg`;
    itmImg2.alt= "coffee-drink";
    itmImg.append(itmImg2);
    const itmText = document.createElement("div");
    itmText.className = "item-text";
    const itmName = document.createElement("h3");
    itmName.classList = "h3-heading";
    itmName.textContent = item.name;
    const itmText2 = document.createElement("p");
    itmText2.classList = "text";
    itmText2.textContent = item.description;
    const itmSubName = document.createElement("h3");
    itmSubName.classList = "h3-heading price";
    itmSubName.textContent = `$${item.price}`;
    itmText.append(itmName, itmText2, itmSubName);
    itemCard.append(itmImg, itmText);
    return itemCard;
}

const generateItemCard = (el) => {
    let cards = [];
    for ( let i = 0; i < items.length; i++) {
        if (items[i].category == el) {
            cards.push(createItem(items[i]));
        }
    }
    return cards;
}

const hideMoreBtn = () => {
    loadMoreBtn.classList.add("hide");
};

const loadMoreCardBtn = () => {
    loadMoreBtn.classList.remove("hide");
}

//generate content for modal
const generateItem = () => {
    itemImg.src = `../img/pictures/${currentItem.category}-${currentItem.id}.svg`;
    itemImg.alt = "coffee-drink";
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
//update size
const updateSize = (el) => {
    const targetSize = el.target.closest(".item-size");
    if (targetSize) {
        clickSizeBtn(targetSize);
        const size = targetSize.dataset.size;
        const addPrice = currentItem.sizes[size]["add-price"];
        sizePrice = addPrice;
        itemPrice.textContent = `$${getFullPrice()}`;
    }
}

itemSizes.addEventListener('click', updateSize);
//update additive
const updateAdditive = (el) => {
    const targetSize = el.target.closest(".item-size");
    if (targetSize) {
        clickAdditive(targetSize);
        const add = targetSize.dataset.add;
        const addPrice = currentItem.additives[add]["add-price"];
        if (targetSize.classList.contains('active')){
            additivePrice += addPrice;
            itemPrice.textContent = `$${getPrice()}`;
        } else {
            additivePrice -= addPrice;
            itemPrice.textContent = `$${getPrice()}`;
        }
    }
}

btnMenu.addEventListener('click', changeCategory);
itemAdditive.addEventListener('click', updateAdditive);

//click on size or additive
const clickSizeBtn = (ele) => {
    for ( let i = 0; i < itemSizes.children.length; i++) {
        itemSizes.children[i].classList.remove('active');
    }
    ele.classList.add('active');
}

const clickAdditive = (ele) => {
    if(ele) {
        ele.classList.toggle("active");
    }
}

//update price
const getPrice = () => {
    const fullPrice = +totalPrice + +additivePrice + +sizePrice;
    return fullPrice.toFixed(2).toString();
}
//close item card
const closeItem = () => {
    selectedItem.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.body.style.background = "#E1D4C9";
}

const closeNearItem = (el) => {
    if (!el.target.closest(".item")) {
        closeItem();
    }
}

uploadCards("coffee");

closeBtn.addEventListener("click", closeItem);
selectedItem.addEventListener("click", closeNearItem);
loadMoreBtn.addEventListener('click', addMoreCards);


