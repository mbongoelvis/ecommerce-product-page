// popup section and its code
const showpop = document.querySelectorAll(".showpopup");
const popup = document.querySelector(".popup");
const items = document.querySelector(".items-cart");
const chekout = document.querySelector(".checkout");
const emptyitem = document.querySelector(".empty-cart");
const cartnum = document.querySelector(".cartnum");
const priceval = document.querySelector(".value");
const priceval2 = document.querySelector(".value2");
const priceval3 = document.querySelector(".value3");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const card = document.querySelector(".card");
const price = document.querySelector(".price");
const menu = document.querySelector(".menutoggle");


showpop.forEach((items) => {
  items.addEventListener("click", (e) => {
    if (popup.classList.contains("hide")) {
      popup.classList.remove("hide");
    }
  });
});
// close popup
const closepop = () => {
  if (!popup.classList.contains("hide")) {
    popup.classList.add("hide");
  }
};

// add and reduce for the items
const cartpop = () => {
  if (cartnum.classList.contains("hide") || card.classList.contains("hide")) {
    cartnum.classList.remove("hide");
    card.classList.remove("hide");
  } else {
    cartnum.classList.add("hide");
    card.classList.add("hide");
  }
};

// adding value
let count = 0;
increment.addEventListener("click", (e) => {
  if (cartnum.classList.contains("hide") || card.classList.contains("hide")) {
    cartnum.classList.remove("hide");
  }
  card.classList.remove("hide");
  priceval.textContent = count + 1;
  priceval2.textContent = count + 1;
  priceval3.textContent = count + 1;
  price.textContent = "$" + count * 125.0;
  count++;
});
decrement.addEventListener("click", (e) => {
  if (cartnum.classList.contains("hide") || card.classList.contains("hide")) {
    cartnum.classList.remove("hide");
    card.classList.remove("hide");
  }
  if (count === 0) {
    count = count;
    price.textContent = count;
    cartnum.classList.add("hide");
    card.classList.add("hide");
  } else {
    price.textContent = count * 125.0;
    priceval.textContent = count - 1;
    priceval2.textContent = count - 1;
    priceval3.textContent = count - 1;
    count--;
  }
});

// delete the item from the cart
const Deleteitem = () => {
  items.style.display = "none";
  chekout.style.display = "none";
  priceval.textContent = 0;
  priceval2.textContent = 0
  if (emptyitem.classList.contains("hide")) {
    emptyitem.classList.remove("hide");
  }
};



// meanu toggler
const menuopen = () => {
  if (menu.classList.contains("hidden")) { 
    menu.classList.remove("hidden");
  }
}
const menuclose = () => { 
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
}