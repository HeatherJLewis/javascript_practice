function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let capitalLetter = (word.slice(0, 1).toUpperCase());
  let endOfWord = word.slice(1, word.length)
  return (capitalLetter + endOfWord);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  let firstInitial = firstName.slice(0, 1);
  let lastInitial = lastName.slice(0, 1);
  return (`${firstInitial}.${lastInitial}`)
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let multiplier = (vatRate + 100) / 100;
  let salePrice = originalPrice * multiplier;
  return +salePrice.toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let multiplier = (100 - reduction) / 100;
  return (+(originalPrice * multiplier).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 1) {
    let slicePositionStart = (Math.floor((str.length) / 2));
    let slicePositionEnd = slicePositionStart + 1;
    let middleCharacter = str.slice(slicePositionStart, slicePositionEnd);
    return middleCharacter;
  }
  else {
    let slicePositionStart = ((str.length) / 2) - 1;
    let slicePositionEnd = slicePositionStart + 2;
    let middleCharacter = str.slice(slicePositionStart, slicePositionEnd);
    return middleCharacter;
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  let reversedWords = words.map(word => {
    let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
});
return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  const numOfLinuxUsers = users.filter(linuxUser => linuxUser.type === "Linux");
  return numOfLinuxUsers.length;
}

let scores = [8, 9, 7];

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = scores.reduce((acc, val) => {
    return acc + val;
  });
  meanScore = sum/(scores.length);
  return +meanScore.toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
 if (n%3 == 0 && n%5 ==0) {
  return "fizzbuzz";
 } else if (n%5 == 0) {
   return "buzz";
 } else if (n%3 == 0) {
  return "fizz";
 } 
 else {
   return n
}};

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
