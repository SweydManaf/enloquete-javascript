function range(start, end, increment = 1) {
  let lista = [];
  if (start < end) {
    for (let run = start; run <= end; run += increment) {
      lista.push(run);
    }
  } else {
    if (start > end) {
      for (let run = start; run >= end; run += increment) {
        lista.push(run);
      }
    }
  }
  return lista;
}

function sum(array) {
  let soma = 0;
  for (item in array) {
    soma += array[item];
  }
  return soma;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)))
