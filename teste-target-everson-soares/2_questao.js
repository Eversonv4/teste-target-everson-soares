function sequenciaFibonacci(numero) {
  if (numero < 0)
    return "Número inválido";

  let a = 0;
  let b = 1;

  if (numero === a || numero === b) {
    return `O número ${numero} pertence a sequecia de fibonacci`;
  }

  let proximo = a + b;
  while (proximo <= numero) {
    if(proximo === numero) {
      return `O número ${numero} pertence a sequecia de fibonacci`
    }

    a = b;
    b = proximo;
    proximo = a + b;
  }

  return `O número ${numero} não pertence a sequecia de fibonacci`;
}

let NUMERO = 21;
console.log(sequenciaFibonacci(NUMERO));