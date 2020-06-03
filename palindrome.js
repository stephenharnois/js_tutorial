module.exports = Phrase;

String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

// Define a Phrse object.
function Phrase(content) {
    this.content = content;
    
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }

    this.louder = function louder() {
        return this.content.toUpperCase();
    }

    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }
}

