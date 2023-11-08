const letter = "abcdefghijklmnopqrstuvwxyz";
let letterArray = Array.from(letter);
let cont=document.querySelector(".container")
letterArray.forEach((letter) => {
  let span = document.createElement("span");
  let spanTex = document.createTextNode(letter);
  span.appendChild(spanTex);
  let letterContainer = document.querySelector(".letters");
  letterContainer.appendChild(span);
  span.className = "letter-box";
});
let words = {
  programming: [
    "Php",
    "Java",
    "Go",
    "Scala",
    "Fortran",
    "R",
    "Mysql",
    "Python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einsteine",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palastine", "Yemen", "Egypt", "Bahrin", "Qatar"],
};
let spansl = document.querySelectorAll(".letters span");
let allKeys = Object.keys(words);
let randomProNumber = Math.floor(Math.random() * allKeys.length);

let randomProName = allKeys[randomProNumber];

let randomProValue = words[randomProName];

let randomWord =
  randomProValue[[Math.floor(Math.random() * randomProValue.length)]];
document.querySelector(".game-info span").innerHTML = randomProName;
let wordArray = Array.from(randomWord);

let letterGuess = document.querySelector(".letter-guess");
wordArray.forEach((letter) => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "space";
  }
  letterGuess.appendChild(emptySpan);
});
let spans = document.querySelectorAll(".letter-guess span");
console.log(spans);
let divs = document.querySelectorAll(".hangman-draw div");
console.log(divs);
let wrongAttemp = 0;

document.addEventListener("click", (e) => {
  let status = "false";

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();
    let chosenWord = Array.from(randomWord.toLowerCase());
    chosenWord.forEach((e, index) => {
      if (clickedLetter === e) {
        console.log(index);
        spans[index].innerHTML = e;
        status = "true";
      }
    });
    if (status != "true") {
      wrongAttemp++;
      if (wrongAttemp === 8) {
        end();
        spansl.forEach((e) => {
          e.className = "finish"
         
        });
      }
    }
    console.log(status);
    console.log(wrongAttemp);
    divs[wrongAttemp - 1].style.display = "block";
  }
});
let con = document.querySelector(".row");

function end() {cont.style.display="none"

  let screen = document.createElement("div");
  let end = document.createTextNode(`game over the word is ${randomWord}`);
  screen.appendChild(end);
  document.body.appendChild(screen);
  screen.className = "screen";
}

