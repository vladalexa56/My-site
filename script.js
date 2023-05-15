"use strict";
const imgOverlay = document.querySelectorAll(".img");
const cardHover = document.querySelector(".card--hover");
const aboutMe = document.querySelector("#about-me");
const seeScroll = document.querySelector(".see--more-scroll");
const contactMe = document.querySelector("#contact--me");
const letsDoIt = document.querySelector(".button");
const header = document.querySelector(".header");
const nav = document.querySelector(".navbar");
const navHeight = nav.getBoundingClientRect().height;

const hidden = function (e) {
  this.classList.remove("hidden");
};

const add = function (e) {
  this.classList.add("hidden");
};

imgOverlay.forEach((val) => val.addEventListener("mouseenter", hidden));
imgOverlay.forEach((val) => val.addEventListener("mouseleave", add));

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

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
//   console.log(entry);
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, oberver) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  oberver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-link");
    const logo = link.closest(".navbar").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
