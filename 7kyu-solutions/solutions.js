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
function scale(strng, k, n) {
  // your code
  if (strng === '') return '';
  let arr = strng.split('\n');
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
