let charPass = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstEl = document.getElementById("first-input");
let secondEl = document.getElementById("second-input");
// let passLengthEl = document.getElementById("pass-length");

function generate() {
  firstEl.value = generateRandomPass();
  secondEl.value = generateRandomPass();
}

function generateRandomPass() {
  let pass = "";
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * charPass.length);
    pass += charPass[randomIndex];
  }

  return pass;
}

function copyPass1() {
  let copy1 = document.getElementById("first-input");
  copy1.select();
  navigator.clipboard.writeText(copy1.value);
  alert("Copied the text: " + copy1.value);
}

function copyPass2() {
  let copy2 = document.getElementById("second-input");
  copy2.select();
  navigator.clipboard.writeText(copy2.value);
  alert("Copied the text: " + copy2.value);
}
