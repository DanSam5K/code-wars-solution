// 1. AssembleString solution

function assembleString(array){
  if(array.length === 0) return '';
  const result = Array(array[0].length).fill('#');
  array.forEach(word => {
    word.split('').map((letter, index)=> {
      if(letter !== '*'){
        result[index] = letter;
      }
    })
  })
  return result.join('');
}