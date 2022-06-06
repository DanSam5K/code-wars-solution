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

// 6. Does my number look big in this? solution

function narcissistic(value) {
  return value.toString().split('').reduce((sum, n) => sum + Math.pow(n, value.toString().length), 0) === value;
}

// 7. Find missing letter solution
function findMissingLetter(array) {
  let firstLetter = array[0].charCodeAt(0);
  for(let i = 0; i < array.length; i++) {
    if(array[i].charCodeAt(0) !== firstLetter + i) {
      return String.fromCharCode(firstLetter + i);
    }
  }
}

// 8. IP validation solution
function isValidIP (str) {
  return str.split('.').length === 4 && str.split('.').every(v => v.length === 1 && v >= 0 && v <= 255);
}

//8. IP Validation Version 2

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

// 9. Two Joggers solution

var nbrOfLaps = function (x,y) {
  let newVal = x;
  while(newVal % y !== 0) {
    newVal += x;
  }
  return [newVal / x, newVal / y];
} 

//. 10. Mad Max: Recursion road solution
function max(array) {
  if(array.length === 0) {
    return -Infinity;
  }
  let max = array[0]
  for(let i=0; i<array.length; i++){
    if(array[i] > max){
      max = array[i]
    }
  }
  return max
}

//. 10b. Mad Max: Recursion road solution

function max(array) {
  if(array.length === 0 ){
    return -Infinity;
  }
  else if(array.length === 1){
    return array[0];
  }
  else if(array.length >= 2){
    if(array[0] <= array[1]){
      array.splice(0,1);
      return max(array);
    }
    else{
      array.splice(1,1);
      return max(array);
    }
  }
}