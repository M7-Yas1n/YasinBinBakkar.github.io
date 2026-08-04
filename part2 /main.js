/*
Name: Yasin Bin Bakkar
File: main.js
Date: 31 July 2026
Builds a clickable thumbnail bar from an array of image file names and
handles the darken/lighten button.
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Build the array of image file names — files are named pic1.jpg through
// pic5.jpg, so the loop starts at 1 to match the file names, not 0.
const images = [];
for (let i = 1; i <= 5; i++) {
  images.push(`pic${i}.jpg`);
}

images.forEach((image) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${image}`);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", (e) => {
    displayedImage.setAttribute("src", e.target.getAttribute("src"));
  });
});

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});
