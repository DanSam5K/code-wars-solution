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
