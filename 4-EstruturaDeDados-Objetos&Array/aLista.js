function arrayToList(array) {
  let list = {};
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(item, list) {
  // console.log(item, list)
  let lista = {};
  lista = { value: item, rest: list };
  return lista;
}

function nth(list, index) {
  let counter = 0;
  for (let node = list; node; node = node.rest) {
    if (counter == index){
      return node.value
    }
    counter++
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
