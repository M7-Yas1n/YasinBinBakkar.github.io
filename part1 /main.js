/*
Name: Yasin Bin Bakkar
File: main.js
Date: 31 July 2026
Fills in a story template with randomly chosen words, an optional custom
name, and converts US units to UK units when the UK locale is selected.
*/

// Story template. "Bob" is the default character name, and 300lb / 94
// degrees fahrenheit are the US units that get converted for the UK locale.
const storyText =
  "Bob was walking to the shop on a hot day. The temperature was a" +
  " scorching 94 degrees fahrenheit, and Bob could feel the heat" +
  " radiating off the pavement. Along the way, Bob spotted a :insertx:" +
  " sitting outside a house, which made them smile. A little further on," +
  " they passed a :inserty: that reminded them of home. Bob felt as heavy" +
  " as a 300lb boulder from the shopping bags, but pushed on anyway." +
  " Finally, tired and thirsty, they reached the shop and treated" +
  " themselves to an ice-cold :insertz: to cool down.";

const insertX = ["fluffy cat", "old bicycle", "garden gnome"];
const insertY = ["red mailbox", "wooden bench", "bright mural"];
const insertZ = ["lemonade", "milkshake", "soda"];

const customName = document.querySelector("#custom-name");
const randomize = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if (document.querySelector("#uk").checked) {
    const weightInLb = 300;
    const weightInStone = Math.round((weightInLb / 14) * 10) / 10;
    newStory = newStory.replaceAll("300lb", `${weightInStone} stone`);

    const fahrenheit = 94;
    const celsius = Math.round(((fahrenheit - 32) * 5) / 9);
    newStory = newStory.replaceAll(
      "94 degrees fahrenheit",
      `${celsius} degrees celsius`,
    );
  }

  story.textContent = newStory;
}

randomize.addEventListener("click", result);
