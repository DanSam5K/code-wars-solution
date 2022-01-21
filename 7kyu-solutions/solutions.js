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
