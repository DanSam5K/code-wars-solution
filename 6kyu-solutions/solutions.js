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

// 3. Partial Keys solution
let handler =
{
  get: function(target, name)
  {
    let keys = Object.keys(target).filter(key => key.startsWith(name)).sort();
    if(keys.length > 0)
    {
      return target[keys[0]];
    }
  }
}

const partialKeys = obj => new Proxy(obj, handler);

// 4. Consonant value solution
function solve(s) {
  return s.split(/[aeiou]+/).reduce((s,n) => Math.max(s, n.split('').reduce((a,b) => a + b.charCodeAt(0) - 96, 0)), 0);
};

// 5. Stop Spinning my words solution

function spinWords(str) {
  return str.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
}

// 6. Sum of positive solution
function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
}