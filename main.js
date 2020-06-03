const Phrase = require("./palindrome.js")


function palindromeTester(event) {
    event.preventDefault();
    
    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult")

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
    } else {
        palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#palindromeTester");
    button.addEventListener("submit", () => palindromeTester(event));
})

