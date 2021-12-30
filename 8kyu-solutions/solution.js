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
