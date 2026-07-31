/*
Name: Yasin Bin Bakkar
File: main.js
Date: 31 July 2026
Builds a clickable thumbnail bar and handles the darken/lighten button.
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".full-img button");

const baseUrl = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

const imageNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const altTexts = {
  "pic1.jpg": "Closeup of a human eye",
  "pic2.jpg": "An abstract pattern painting",
  "pic3.jpg": "Purple and white flowers",
  "pic4.jpg": "An Egyptian painting on a wall",
  "pic5.jpg": "A yellow butterfly on a leaf",
};

for (let i = 1; i <= imageNames.length; i++) {
  const fileName = imageNames[i - 1];
  const newImage = document.createElement("img");
  newImage.setAttribute("src", baseUrl + fileName);
  newImage.setAttribute("alt", altTexts[fileName]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", (e) => {
    displayedImage.setAttribute("src", e.target.getAttribute("src"));
    displayedImage.setAttribute("alt", e.target.getAttribute("alt"));
  });
}

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.opacity = 0.5;
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.opacity = 0;
  }
});
