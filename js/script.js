"use strict";

let productsCard = document.querySelectorAll(".directions__item");

if (productsCard.length) {
  productsCard.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.remove("directions__item_end-animation");
      card.classList.add("directions__item_start-animation");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("directions__item_start-animation");
      card.classList.add("directions__item_end-animation");
    });
  });
}


