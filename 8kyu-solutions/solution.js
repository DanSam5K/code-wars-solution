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
    return 'Underweight';
  } else if (result <= 25.0) {
    return 'Normal';
  } else if (result <= 30.0) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
};

// 3. Vowel remover
const shortcut = (string) => string.replace(/[aeiou]/g, '');

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
  let result = '';
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
const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');

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
