function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // let firstLetterOfWord = word.slice(0,1);
  // capitalLetter = firstLetterOfWord.toUpperCase();
  let capitalLetter = (word.slice(0,1).toUpperCase());
  let endOfWord = word.slice(1, word.length)
  return (capitalLetter+endOfWord);
}
console.log(capitalize("the quick fox."));

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  let firstInitial = firstName.slice(0,1);
  let lastInitial = lastName.slice(0,1);
return (`${firstInitial}.${lastInitial}`)
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let multiplier = (vatRate+100)/100;
  let salePrice = originalPrice * multiplier;
  return +salePrice.toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let multiplier = (100-reduction)/100;
  console.log(multiplier);
  return (+(originalPrice * multiplier).toFixed(2));
}
 console.log(getSalePrice(50, 0));

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
