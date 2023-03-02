function range(start, end) {
  let lista = [];
  for (let run = start; run <= end; run++) {
    lista.push(run);
  }
  return lista;
}

function sum(array) {
  let soma = 0;
  for (item in array){
    soma += array[item]
  }
  return soma
}

console.log(sum(range(1, 10)));
