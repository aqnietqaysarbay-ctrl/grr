let textInput = document.getElementById("write");

let words = document.getElementById("word");
let sentence = document.getElementById("sentence");
let letter = document.getElementById("letter");

let count = document.getElementById("count");
count.addEventListener("click", function () {
  let text = textInput.value;

  letter.textContent = text.length;

  let wordCount = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " " || text[i] === "  ") {
      wordCount++;
    }
  }

  let sentenceCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == ".") {
      sentenceCount++;
    }
  }
  sentence.textContent = sentenceCount;
  words.textContent = wordCount;
});
