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
function partialKeys(obj) {
  const newObj = {};
  Object.keys(obj).sort().reversed().forEach((key) => {
    const value = obj[key];
    for(let i=0; i<key.length; i++) {
      const newKey = key.substring(0, i) + '*' + key.substring(i+1);
      newObj[newKey] = value;
    }
  });
  return newObj;
}

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
