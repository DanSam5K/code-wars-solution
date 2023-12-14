// Palindrome
function palindrome(str) {
  let formatStr = str.toLowerCase();
  return str === formatStr.split('').reverse().join('');
}

//
