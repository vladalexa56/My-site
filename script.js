"use strict";
const imgOverlay = document.querySelectorAll(".img");
const cardHover = document.querySelector(".card--hover");
const aboutMe = document.querySelector("#about-me");
const seeScroll = document.querySelector(".see--more-scroll");
const contactMe = document.querySelector("#contact--me");
const letsDoIt = document.querySelector(".button");

console.log(imgOverlay);
const hidden = function (e) {
  this.classList.remove("hidden");
};

const add = function (e) {
  console.log("salut");
  this.classList.add("hidden");
};

imgOverlay.forEach((val) => val.addEventListener("mouseenter", hidden));
imgOverlay.forEach((val) => val.addEventListener("mouseleave", add));
console.log();

seeScroll.addEventListener("click", function (e) {
  e.preventDefault();
  const s1coords = aboutMe.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

letsDoIt.addEventListener("click", function (e) {
  e.preventDefault;
  const s1coords = contactMe.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});
