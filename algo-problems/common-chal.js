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

// find vowels solutions
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

function fibonacci(num) {
  const memo = {};
  if (memo[num] !== undefined) {
    return num;
  }
  if (num < 2) {
    return num;
  }
  memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return memo[num];
}

console.log(fibonacci(9));

// 2nd solution
function fibonacci2(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  return result[num];
}
