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

const contact = {
  h1: { class: "nameplate", text: "Contact" },
  img: { id: "location-img", src: "./img/misc/location.jpg", alt: "A map of the location." },
  p: { monToFri: "Monday to Friday:", sat: "Saturday:", sun: "Sunday:" },
  li: { monToFri: "12:00 PM to 10:00 PM", sat: "10:00 AM to 11:00 PM", sun: "11:00 AM to 9:00 PM" },
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

// Draw the Home page on page load
drawHome();

// Draw the Home page
function drawHome() {
  content.innerHTML = "";

  const nameplate = content.appendChild(document.createElement("h1"));
  nameplate.className = home.h1.class;
  nameplate.textContent = home.h1.text;

  const homeWrapper = content.appendChild(document.createElement("div"));
  homeWrapper.id = "home-wrapper";

  const promoImage = homeWrapper.appendChild(document.createElement("img"));
  promoImage.id = home.img.id;
  promoImage.src = home.img.src;
  promoImage.alt = home.img.alt;

  const description = homeWrapper.appendChild(document.createElement("p"));
  description.id = home.p.id;
  description.textContent = home.p.text;
}

// Draw the Menu page
function drawMenu() {
  content.innerHTML = "";

  const namePlate = content.appendChild(document.createElement("h1"));
  namePlate.className = menu.h1.class;
  namePlate.textContent = menu.h1.text;

  const menuWrapper = content.appendChild(document.createElement("div"));
  menuWrapper.id = "menu-wrapper";

  for (let i = 0; i < menu.menuItems.length; i++) {
    drawMenuItems(i);
  }
}

// Draw the individual menu items
function drawMenuItems(i) {
  const menuWrapper = document.querySelector("#menu-wrapper");

  const menuItemWrapper = menuWrapper.appendChild(document.createElement("div"));
  menuItemWrapper.className = "menu-item-wrapper";

  const imageAndDescWrapper = menuItemWrapper.appendChild(document.createElement("div"));
  imageAndDescWrapper.className = "image-and-desc-wrapper";

  const menuIcon = imageAndDescWrapper.appendChild(document.createElement("img"));
  menuIcon.className = "food-icon";
  menuIcon.src = menu.menuItems[i].img.src;
  menuIcon.alt = menu.menuItems[i].img.alt;

  const itemDescWrapper = imageAndDescWrapper.appendChild(document.createElement("div"));

  const itemName = itemDescWrapper.appendChild(document.createElement("h3"));
  itemName.className = "item-name";
  itemName.textContent = menu.menuItems[i].name;

  const itemDesc = itemDescWrapper.appendChild(document.createElement("p"));
  itemDesc.className = "item-desc";
  itemDesc.textContent = menu.menuItems[i].desc;

  const priceWrapper = menuItemWrapper.appendChild(document.createElement("div"));
  priceWrapper.className = "price-wrapper";

  const rupeeIcon = priceWrapper.appendChild(document.createElement("img"));
  rupeeIcon.className = "rupee";
  rupeeIcon.src = "./img/misc/rupee.png";
  rupeeIcon.alt = "Rupees.";

  const price = priceWrapper.appendChild(document.createElement("p"));
  price.textContent = menu.menuItems[i].price;
}

// Draw the Contact page
function drawContact() {
  content.innerHTML = "";

  const nameplate = content.appendChild(document.createElement("h1"));
  nameplate.classList = contact.h1.class;
  nameplate.textContent = contact.h1.text;

  const openingHoursWrapper = content.appendChild(document.createElement("div"));
  openingHoursWrapper.id = "opening-hours";

  const locationImage = openingHoursWrapper.appendChild(document.createElement("img"));
  locationImage.id = contact.img.id;
  locationImage.src = contact.img.src;
  locationImage.alt = contact.img.alt;

  const hoursList = openingHoursWrapper.appendChild(document.createElement("ul"));

  const p1 = hoursList.appendChild(document.createElement("p"));
  p1.textContent = contact.p.monToFri;
  const li1 = hoursList.appendChild(document.createElement("li"));
  li1.textContent = contact.li.monToFri;

  const p2 = hoursList.appendChild(document.createElement("p"));
  p2.textContent = contact.p.sat;
  const li2 = hoursList.appendChild(document.createElement("li"));
  li2.textContent = contact.li.sat;

  const p3 = hoursList.appendChild(document.createElement("p"));
  p3.textContent = contact.p.sun;
  const li3 = hoursList.appendChild(document.createElement("li"));
  li3.textContent = contact.li.sun;
}
