// Test multiply
const multiply = (a, b) => a * b;

// 1. School paper work
const paperwork = (n, m) => {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
};

// 2. Calculate Body Mass Index
const bmi = (weight, height) => {
  let result = weight / Math.pow(height, 2);
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25.0) {
    return "Normal";
  } else if (result <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

// 3. Vowel remover
const shortcut = (string) => string.replace(/[aeiou]/g, "");

// 4. Student's Final Grade
const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
};

// 5. Is He gonna survive

const hero = (bullets, dragons) => {
  let dragonBullets = dragons * 2;
  if (bullets >= dragonBullets) {
    return true;
  }
  return false;
};

// 6. Square(n) Sum

function squareSum(numbers) {
  const squareItem = (item) => item ** 2;
  let newNumbers = numbers.map(squareItem);
  let totalSum = 0;
  for (let i = 0; i < newNumbers.length; i++) {
    totalSum += newNumbers[i];
  }
  return totalSum;
}

// 7. String repeat
const repeatStr = (n, s) => {
  let result = "";
  while (n > 0) {
    result += s;
    n--;
  }
  return result;
};

// 8. Find a reminder
const remainder = (a, b) => (a > b ? a % b : b % a);

function remainderT(a, b) {
  if (a >= b) return a % b;
  else if (a < b) return b % a;
}

//  9. Twice as old
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(sonYearsOld * 2 - dadYearsOld);

// 10. Sheep DNA to RNA conversion
const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

// 11. GrassHoper Check for factor
const checkForFactor = (base, factor) => (base % factor === 0 ? true : false);

// 12. Quarter of the year
const quarterOf = (month) => Math.ceil(month / 3);

// 13. Counting Sheep

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let counts = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) counts += 1;
  }
  return counts;
}
// 14. Duty free

const dutyFree = (normPrice, discount, hol) =>
  Math.floor(hol / ((normPrice * discount) / 100));

// 15. My head is at the wrong end

const fixTheMeerkat = (arr) => arr.reverse();

// 16. Regex Basics

String.prototype.digit = function () {
  return /^[0-9]$/.test(this);
};

// 17. Point of reflection

const symmetricPoint = (p, q) => [2 * q[0] - p[0], 2 * q[1] - p[1]];

// 18. Fake Binary
function fakeBin(x) {
  let chars = {
    0: "0",
    1: "0",
    2: "0",
    3: "0",
    4: "0",
    5: "1",
    6: "1",
    7: "1",
    8: "1",
    9: "1",
  };
  x = x.replace(/[0-9]/g, (m) => chars[m]);
  return x;
}

function fakeBin2(x) {
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}

// 19. Find the first non-consecutive number

function fristNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1] - 1) {
      return arr[i] + 1;
    }
  }
  return null;
}

// 20 Sum numbers
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// 21. Volume fo a cuboid

function findVolume(l, w, h) {
  return l * w * h;
}

// 22. convert string to integer
function stringToInteger(str) {
  return parseInt(str, 10);
}

// 21. Return negative num
function makeNegative(num) {
  return -Math.abs(num);
}

// 22. what is between
function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

// 23. sum of differences in an array
function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0;
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i + 1] - arr[i];
  }
  return Math.abs(sum);
}

// 24. I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  return [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ][(nbPetals - 1) % 6];
}

// 25. How many stairs will Suzuki climb in 20 years?
function stairsIn20(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      sum = s[i][j] * 20;
    }
  }
  return sum;
}

// 26. Is the string upcase ?
String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};
