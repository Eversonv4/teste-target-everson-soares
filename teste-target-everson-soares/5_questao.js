function inverterString(texto) {
  let invertida = "";
  let i = texto.length - 1;

  for (i; i >= 0; i--) {
    invertida += texto[i];
  }

  return invertida;
}

const mensagem = "Target sistemas";
console.log(inverterString(mensagem));