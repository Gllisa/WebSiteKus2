"use strict";
let squares = 6;
let i = 1;
const colors = [
  "#93B5C6",
  "#C9CCD5",
  "#E4D8DC",
  "#FFE3E3",
  "#68B0AB",
  "#8FC0A9",
  "#C8D5B9",
  "#FAF3DD",
  "#655D8A",
  "#7897AB",
  "#D885A3",
  "#FDCEB9",
];

let square1 = document.querySelector(".item-1");

square1.addEventListener("mouseover", () => {
  setColorToElement(square1);
});
square1.addEventListener("mouseout", () => {
  removeColorToEl(square1);
});

let square2 = document.querySelector(".item-2");

square2.addEventListener("mouseover", () => {
  setColorToElement(square2);
});
square2.addEventListener("mouseout", () => {
  removeColorToEl(square2);
});

let square3 = document.querySelector(".item-3");

square3.addEventListener("mouseover", () => {
  setColorToElement(square3);
});
square3.addEventListener("mouseout", () => {
  removeColorToEl(square3);
});

let square4 = document.querySelector(".item-4");

square4.addEventListener("mouseover", () => {
  setColorToElement(square4);
});
square4.addEventListener("mouseout", () => {
  removeColorToEl(square4);
});

let square5 = document.querySelector(".item-5");

square5.addEventListener("mouseover", () => {
  setColorToElement(square5);
});
square5.addEventListener("mouseout", () => {
  removeColorToEl(square5);
});

let square6 = document.querySelector(".item-6");

square6.addEventListener("mouseover", () => {
  setColorToElement(square6);
});
square6.addEventListener("mouseout", () => {
  removeColorToEl(square6);
});

function setColorToElement(elemet) {
  const color = getRandomColor();
  elemet.style.background = color;
}

function removeColorToEl(element) {
  element.style.background = "#ffffff";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
