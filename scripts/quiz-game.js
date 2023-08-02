const prompt = require("prompt-sync")();

console.log("Welcome to The Game of Thrones Quiz Game!");

let correctAnswers = 0;
const totalQuestions = 3; //Will need to change the value of this variable when eventually we will add more questions in the future.

//First question

const answer1 = prompt("What is the sigil of House Targaryen?");
const correctAnswer1 = "THREE HEADED DRAGON";

if (answer1.toUpperCase() === correctAnswer1) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

//Second question

const answer2 = prompt("What is the name of the order which protects and guards the Wall?");
const correctAnswer2 = "NIGHT'S WATCH";

if (answer2.toUpperCase() === correctAnswer2) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

//Third question

const answer3 = prompt("What is the name of the native people who lived on the Westeros before being driven up to the north by the Andals?");
const correctAnswer3 = "THE FIRST MEN";

if (answer3.toUpperCase() === correctAnswer3) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!");
console.log("You scored", percent, "percent!");

/*To play the game -
1. Install node.js from the browser(if you don't have already).
2. In the quiz-game.js file, open up the terminal (you can open it by dragging it up from the bottom with the mouse cursor, or hit Ctrl + ~).
3.You're good to go. To start the game, just type (node quiz-game.js).
*/