const content = document.querySelector("#content");

// prettier-ignore
const home = {
  h1: { class: "nameplate", text: "Hateno Haven" },
  img: { id: "promo-main", src: "./img/promo-main.jpg", alt: "An image of Hateno Village" },
  p: {id : "description", text: "Indulge in a culinary adventure like no other at the Hateno Haven, a hidden gem nestled in the heart of Hateno City in the Kingdom of Hyrule. Our enchanting restaurant invites you to savor exquisite Hylian cuisine amidst a tranquil ambiance, all while celebrating the resilience of a community that endured the hardships of the devastating war against Calamity Ganon."}
};

const menu = {
  h1: { class: "nameplate", text: "Menu" },
  menuItems: [
    {
      img: { src: "./img/food/prime-meat-stew.png", alt: "A picture of Meat-Stuffed Pumpkin." },
      name: "Prime Meat Stew",
      desc: "Letting the large portions of choice cuts of meat simmer brings out their savoriness.",
      price: 390,
    },
    {
      img: { src: "./img/food/seafood-curry.png", alt: "A picture of Meat-Stuffed Pumpkin." },
      name: "Seafood Curry",
      desc: "This dish brims with treasures from the sea. Its spice packs a kick, so it's not for kids.",
      price: 340,
    },
    {
      img: { src: "./img/food/honeyed-apple.png", alt: "A picture of Meat-Stuffed Pumpkin." },
      name: "Honeyed Apple",
      desc: "A juicy sweet-and-sour dish combining newly ripened apples with honey.",
      price: 290,
    },
    {
      img: { src: "./img/food/wildberry-crepe.png", alt: "A picture of Meat-Stuffed Pumpkin." },
      name: "Wildberry Crepe",
      desc: "Sweet, tart wildberries are folded into thin, springy dough to make this dessert.",
      price: 280,
    },
  ],
};

// Functionality for clicking the nav buttons
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => {
  drawHome();
});

menuBtn.addEventListener("click", () => {
  drawMenu();
});

contactBtn.addEventListener("click", () => {
  drawContact();
});

// Draw the Home page
function drawHome() {
  content.innerHTML = "";

  const nameplate = content.appendChild(document.createElement("h1"));
  nameplate.className = home.h1.class;
  nameplate.textContent = home.h1.text;

  const promoImage = content.appendChild(document.createElement("img"));
  promoImage.id = home.img.id;
  promoImage.src = home.img.src;
  promoImage.alt = home.img.alt;

  const description = content.appendChild(document.createElement("p"));
  description.id = home.p.id;
  description.textContent = home.p.text;
}

// Draw the Menu page
function drawMenu() {
  content.innerHTML = "";

  let namePlate = content.appendChild(document.createElement("h1"));
  namePlate.className = menu.h1.class;
  namePlate.textContent = menu.h1.text;

  let menuWrapper = content.appendChild(document.createElement("div"));
  menuWrapper.id = "menu-wrapper";

  for (let i = 0; i < menu.menuItems.length; i++) {
    drawMenuItems(i);
  }
}

// Draw the individual menu items
function drawMenuItems(i) {
  let menuWrapper = document.querySelector("#menu-wrapper");

  let menuItemWrapper = menuWrapper.appendChild(document.createElement("div"));
  menuItemWrapper.className = "menu-item-wrapper";

  let imageAndDescWrapper = menuItemWrapper.appendChild(document.createElement("div"));
  imageAndDescWrapper.className = "image-and-desc-wrapper";

  let menuIcon = imageAndDescWrapper.appendChild(document.createElement("img"));
  menuIcon.className = "food-icon";
  menuIcon.src = menu.menuItems[i].img.src;
  menuIcon.alt = menu.menuItems[i].img.alt;

  let itemDescWrapper = imageAndDescWrapper.appendChild(document.createElement("div"));

  let itemName = itemDescWrapper.appendChild(document.createElement("h3"));
  itemName.className = "item-name";
  itemName.textContent = menu.menuItems[i].name;

  let itemDesc = itemDescWrapper.appendChild(document.createElement("p"));
  itemDesc.className = "item-desc";
  itemDesc.textContent = menu.menuItems[i].desc;

  let priceWrapper = menuItemWrapper.appendChild(document.createElement("div"));
  priceWrapper.className = "price-wrapper";

  let rupeeIcon = priceWrapper.appendChild(document.createElement("img"));
  rupeeIcon.className = "rupee";
  rupeeIcon.src = "./img/misc/rupee.png";
  rupeeIcon.alt = "Rupees.";

  let price = priceWrapper.appendChild(document.createElement("p"));
  price.textContent = menu.menuItems[i].price;
}
