// 1. AssembleString solution

function assembleString(array) {
  if (array.length === 0) return '';
  const result = Array(array[0].length).fill('#');
  array.forEach((word) => {
    word.split('').map((letter, index) => {
      if (letter !== '*') {
        result[index] = letter;
      }
    });
  });
  return result.join('');
}

// 2. IP address to number solution
function ipToNum(ip) {
  return ip.split('.').reduce((int, v) => int * 256 + +v);
}

function numToIp(num) {
  return (
    (num >>> 24) +
    '.' +
    ((num >> 16) & 255) +
    '.' +
    ((num >> 8) & 255) +
    '.' +
    (num & 255)
  );
}
