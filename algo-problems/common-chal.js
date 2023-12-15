// Palindrome
function palindrome(str) {
  let formatStr = str.toLowerCase();
  return str === formatStr.split('').reverse().join('');
}

//FizzBuzz Challenge

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

//  anagram
function objectCharWord(word) {
  const charObject = {};
  for (let char of word.replace(/[^\w]/g, '').toLowerCase()) {
    charObject[char] = charObject[char] + 1 || 1;
  }
  console.log(charObject);
  return charObject;
}

function anagram(word1, word2) {
  const firstWord = objectCharWord(word1);
  const secondWord = objectCharWord(word2);
  if (Object.keys(firstWord).length !== Object.keys(secondWord).length) {
    return false;
  }
  for (let char in firstWord) {
    if (firstWord[char] !== secondWord[char]) {
      return false;
    }
  }
  return true;
}

function findVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', '0', 'u'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function findVowels2() {
  const matched = str.match(/[aeiou]/gi);
  return matched ? matches.length : 0;
}
