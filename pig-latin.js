// Prompt the user for input
let userInput = prompt("Enter a sentence to translate to Pig Latin:");

// Check if the input is not empty or a single-letter word
if (userInput && userInput.trim().length > 1) {
  // Split the sentence into an array of words
  let words = userInput.trim().split(" ");

  // Function to check if a character is a vowel
  function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
  }

  // Function to translate a single word to Pig Latin
  function translateWord(word) {
    let firstLetter = word[0];
    let pigLatinWord = "";

    if (isVowel(firstLetter)) {
      pigLatinWord = word + "way";
    } else {
      let secondLetter = word[1];
      if (!isVowel(secondLetter)) {
        pigLatinWord = word.slice(2) + firstLetter + secondLetter + "ay";
      } else {
        pigLatinWord = word.slice(1) + firstLetter + "ay";
      }
    }

    return pigLatinWord;
  }

  // Translate each word in the sentence and create a new array
  let translatedWords = words.map(translateWord);

  // Join the translated words back into a sentence
  let translatedSentence = translatedWords.join(" ");

  // Print the translated sentence
  console.log("Pig Latin Translation:", translatedSentence);
} else {
  console.log("Input cannot be translated.");
}

