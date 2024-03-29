// 1. Tennis Game Points
function tennisGamePoints(score) {
  //coding and coding..
  let p1 = score.split('-')[0];
  let p2 = score.split('-')[1];
  let helperObject = {
    love: 0,
    15: 1,
    30: 2,
    40: 3,
  };
  p1 = helperObject[p1];
  if (p2 === 'all') {
    p2 = p1;
  } else {
    p2 = helperObject[p2];
  }
  return p1 + p2;
}

// 2. Scaling Squared Strings
function scale(str, k, n) {
  // your code
  if (str === '') {
    return '';
  }
  let arr = str.split('\n');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let word = '';
    for (let j = 0; j < arr[i].length; j++) {
      word += arr[i][j].repeat(k);
    }
    newArr.push(word);
  }
  let newArr2 = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < n; j++) {
      newArr2.push(newArr[i]);
    }
  }
  return newArr2.join('\n');
}

// 3. Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  //Code here
  const sortNum = numbers.sort((a, b) => a - b);
  return sortNum[0] + sortNum[1];
}

// 4. Find Github admins

const findAdmin = (list, lang) =>
  list.filter((x) => x.language === lang && x.githubAdmin === 'yes');

// 5. Get middle char
function getMiddle(s) {
  //Code goes here!
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)];
  }
}
// 6. Sequence solution

function sequence(x) {
  let array = [];
  for (let i = 1; i <= x; i++) array.push(i);
  return array.sort();
}

// 7. List filtering
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((item) => {
    return typeof item == 'number';
  });
}

// 8. Case Swapping
const swap = (str) => {
  return str.replace(/[a-z]/gi, function (x) {
    return x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase();
  });
};

// 9. Vowel Count
function getCount(str) {
  let vowelsCount = 0;

  // enter your magic here
  for (let i = 0; i < str.length; i++) {
    let vowel = 'aeiou';
    if (vowel.includes(str[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

// 10. Find the odd int

function noOdds(values) {
  let sum = [];
  for (let i = 0; i < values.length; i++) {
    sum.push(values[i]);
  }
  return sum;
}

// 11. Don't give me five! solution

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    let str = i.toString();
    if (!/[5]/.test(str)) {
      count++;
    }
  }
  return count;
}

// 12. Min sum of array
function minSum(arr) {
  let newArr = arr.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  let j = newArr.length - 1;
  let sum = 0;
  while (i < j) {
    sum += newArr[i] * newArr[j];
    i++;
    j--;
  }
  return sum;
}

// 13. Narcissistic number
function narcissistic(value) {
  let str = value.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(str[i], str.length);
  }
  return sum === value;
}

// 14. Ghost-busters (whitespace removal)
const ghostBusters = (building) =>
  building.includes(' ')
    ? building.replace(/\s/g, '')
    : "You just wanted my autograph didn't you?";

// 15. Sort by Last Char
function last(x) {
  return x
    .split(' ')
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

// 16. Find the smallest power higher than a given a value

function findNextPower(val, pow_) {
  if (val == 1) {
    return 2 ** pow_;
  }
  for (let i = 0; i <= val; i++) {
    if (i ** pow_ > val) {
      return i ** pow_;
    }
  }
}

// 17. Another card game
function solution(frank, sam, tom) {
  //game on
}

// 18 Jenny the youngest detective
function missingWord(nums, str) {}

class Block {
  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return (
      2 *
      (this.width * this.length +
        this.length * this.height +
        this.height * this.width)
    );
  }
}

// 19. Find the missing letter
function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt() + 1 !== array[i + 1].charCodeAt()) {
      return String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
}
// 20. find the middle char
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

// 21. Valid Parentheses
function validParentheses(parens) {
  let arr = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      arr.push(parens[i]);
    } else if (parens[i] === ')') {
      if (arr.length === 0) {
        return false;
      }
      arr.pop();
    }
  }
  return arr.length === 0;
}

// 22. Dot calculator
function dotCalculator(equation) {
  //your code here
  let arr = equation.split(' ');
  let dotToFill;
  let result = '';
  if (arr[1] === '+') {
    return arr[0] + arr[2];
  } else if (arr[1] === '-') {
    dotToFill = arr[0].length - arr[2].length;
    console.log(dotToFill);
    return (result = dotToFill > 0 ? '.'.repeat(dotToFill) : '');
  } else if (arr[1] === '*') {
    dotToFill = arr[0].length * arr[2].length;
    return (result = dotToFill > 0 ? '.'.repeat(dotToFill) : '');
  } else if (arr[1] === '/') {
    dotToFill = arr[0].length / arr[2].length;
    return (result = dotToFill > 0 ? '.'.repeat(dotToFill) : '');
  } else if (arr[1] === '%') {
    dotToFill = arr[0].length % arr[2].length;
    return (result = dotToFill > 0 ? '.'.repeat(dotToFill) : '');
  }
}
// 23 is power of two
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n % 2 == 0) {
    n /= 2;
  }
  return n == 1;
}

// 24 find caterer fro event
function findCaterer(budget, people) {
  let expense = budget / people;
  if (people < 60) {
    if (expense === 15) {
      return 1;
    } else if (expense === 20) {
      return 2;
    } else if (expense === 30) {
      return 3;
    } else {
      return -1;
    }
  } else if (people >= 60 && people < 100) {
    if (expense === 15) {
      return 1;
    } else if (expense === 20) {
      return 2;
    } else if (expense * 0.2 === 30) {
      return 3;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}
