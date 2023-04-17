// 1. Observed pin solution

function getPINs(observed) {
  // TODO: This is your job, detective!
  const combination = [];
  const neighbors = {
    0: ['8'],
    1: ['2', '4'],
    2: ['1', '3', '5'],
    3: ['2', '6'],
    4: ['1', '5', '7'],
    5: ['2', '4', '6', '8'],
    6: ['3', '5', '9'],
    7: ['4', '8'],
    8: ['5', '7', '9', '0'],
    9: ['6', '8'],
  };
  function getCombination(digits, index, currentCombination) {
    const currentDigit = digits[index];
    const candidates = new Set(neighbors[currentDigit]);
    candidates.add(currentDigit);

    candidates.forEach(index == digits.length - 1 ? reachedEnd : goDeeper);
    function reachedEnd(candidate) {
      combination.push(currentCombination + candidate);
    }
    function goDeeper(candidate) {
      getCombination(digits, index + 1, currentCombination + candidate);
    }
  }
  const stringifyDigits = observed.toString().split('');
  getCombination(stringifyDigits, 0, '');
  return combination;
}

// 2. Find the odd int solution
function findOdd(A) {
  //happy coding!
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result ^= A[i];
  }
  return result;
}

// 3. Sort the odd solution
function sortArray(array) {
  const oddArray = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b);
  return array.map((item) => (item % 2 !== 0 ? oddArray.shift() : item));
}
