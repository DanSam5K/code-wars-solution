// 1. anagrams functions
function anagrams(word, words) {
  let result = [];
  for (let element of words) {
    if (element.length === word.length) {
      let newElement = element.split('').sort().join('');
      let newWord = word.split('').sort().join('');
      if (newElement === newWord) {
        result.push(element);
      }
    }
  }
  return result;
}

// 2. spaghetti code - #1 easy
//let plate = [
//   [
//     'A', 'A', 'A', 'A',
//     'A', 'A', 'A', 'A',
//     '_', '_', '_', '_'
//   ],
//   [
//     '_', '_', '_', '_',
//     '_', '_', '_', '_',
//     '_', '_', '_', '_'
//   ],
//   [
//     'B', 'B', 'B', 'B',
//     'B', 'B', 'B', 'B',
//     'B', 'B', 'B', '_'
//   ],
//   [
//     '_', '_', '_', '_',
//     '_', '_', '_', '_',
//     '_', '_', '_', '_'
//   ],
//   [
//     'C', 'C', 'C', 'C',
//     'C', 'C', '_', '_',
//     '_', '_', '_', '_'
//   ]
// ]
var spaghetti = function (plate) {
  // find the longest character
  let longest = {};
  for (let i = 0; i < plate.length; i++) {
    let count = 0;
    for (let j = 0; j < plate[i].length; j++) {
      if (plate[i][j] !== '_') {
        count++;
      }
    }
    longest[i] = count;
  }
  let longestKey = Object.keys(longest).reduce((a, b) =>
    longest[a] > longest[b] ? a : b
  );
  let longestValue = longest[longestKey];
  // find the longest character
  let result = [];
  for (let i = 0; i < longestValue; i++) {
    let temp = [];
    for (let j = 0; j < plate.length; j++) {
      temp.push(plate[j][i]);
    }
    result.push(temp);
  }
  return result;
};
