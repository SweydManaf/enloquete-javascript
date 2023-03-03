function reverseArray(array) {
  let reversedArray = [];
  for (item in array) {
    reversedArray.unshift(array[item]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  for (let j = 0; j < Math.floor(array.length / 2); j++) {
    let tempS = array[j];
    let tempE = array[array.length - 1 - j];
    
    array[array.length - 1 - j] = array[j];
    array[j] = tempE;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
