const STATES = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

// Return a URL freindly version of a string.
// Convert to lower case and multi word add hyphen

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative Version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(element => urls.push(urlify(element)));
    return urls;
}
//console.log(imperativeUrls(STATES));

// urls: Functional Version
function functionalUrls(elements) {
    return elements.map(element => `https://example.com/${urlify(element)}`);
}
//console.log(functionalUrls(STATES));

// singles: Imperative Version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(element => {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    })
    return singles;
}
//console.log(imperativeSingles(STATES));

//singles: Functional Version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
//onsole.log(functionalSingles(STATES));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: Imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach( n => total += n);
    return total;
}
//console.log(imperativeSum(numbers));

//sum: Functional Version
function functionalSums(elements) {
    return elements.reduce((total, n) => {return total += n}, 0);
}
//console.log(functionalSums(numbers));

//products: Functional Version
function functionalProducts(elements) {
    return elements.reduce((total, number) => {return total *= number}, 1);
}
console.log(functionalProducts(numbers));

// lengths: Imperative Solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(element => lengths[element] = element.length);
    return lengths;
}
//console.log(imperativeLengths(STATES));

// lengths: Functional Solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => { 
        lengths[element] = element.length
        return lengths
    }, {});
}
//console.log(functionalLengths(STATES));