"use strict";

//let productsCard = document.querySelectorAll(".directions__item");

//if (productsCard.length) {
// productsCard.forEach((card) => {
// card.addEventListener("mouseenter", () => {
//   card.classList.remove("directions__item_end-animation");
//   card.classList.add("directions__item_start-animation");
//  });
//  card.addEventListener("mouseleave", () => {
//    card.classList.remove("directions__item_start-animation");
//   card.classList.add("directions__item_end-animation");
//  });
//  });
//}

let button = document.getElementById("header__link-button-company");
let navigation1 = document.getElementById("navigation-menu");

button.addEventListener("click", function () {
  navigation1.classList.toggle("header__item_start-animation");
});

let buttonCompany = document.getElementById("header__link-button-company");
let navigation = document.getElementById("navigation-menu");
let littleLoophole = document.querySelectorAll(".little-loophole");
//let place = document.getElementById("header-place");
buttonCompany.addEventListener("mouseenter", () => {
  navigation.classList.remove("header__item_end-animation");
  navigation.classList.add("header__item_start-animation");
});
//place.addEventListener("mouseenter", () => {
//  navigation.classList.remove("header__item_end-animation");
//  navigation.classList.add("header__item_start-animation");
//});
navigation.addEventListener("mouseleave", () => {
  navigation.classList.remove("header__item_start-animation");
  navigation.classList.add("header__item_end-animation");
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}
