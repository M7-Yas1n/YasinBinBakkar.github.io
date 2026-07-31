/*
Name: Yasin Bin Bakkar
File: main.js
Date: 31 July 2026
Builds a random silly story from arrays of words and user input.
*/

const storyText =
  "It was 94 fahrenheit outside, so :insertx: and Bob went for a walk to :inserty:. " +
  "When they arrived, they stared in amazement at :insertz:, which weighed exactly 300lb. " +
  "Bob could not believe his eyes and decided to tell everyone he knew.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["exploding tacos", "giant snowballs", "sushi burritos"];

const customName = document.getElementById("customname");
const randomize = document.querySelector("#generate");
const story = document.querySelector("#story");

randomize.addEventListener("click", result);

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function result(e) {
  e.preventDefault();

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

  if (document.getElementById("uk").checked) {
    const weightNumber = 300;
    const weightMetric = Math.round(weightNumber / 14) + " stone";
    newStory = newStory.replace("300lb", weightMetric);

    const tempNumber = 94;
    const tempMetric = Math.round(((tempNumber - 32) * 5) / 9);
    newStory = newStory.replace("94 fahrenheit", tempMetric + " centigrade");
  }

  story.textContent = newStory;
}
