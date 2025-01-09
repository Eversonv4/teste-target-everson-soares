const faturamentoMensal = [
  { dia: 1, valor: 221.34 },
  { dia: 3, valor: 0 },
  { dia: 2, valor: 320.56 },
  { dia: 4, valor: 450.10 },
  { dia: 6, valor: 199.99 },
  { dia: 5, valor: 0 },
  { dia: 7, valor: 350.50 },
];

function calcularFaturamento(faturamento) {
  const diasComFaturamento = faturamento.filter((faturamento) => faturamento.valor > 0);
  const valores = diasComFaturamento.map((faturamento) => faturamento.valor);

  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);

  const somaFaturamento = valores.reduce((total, valor) => total + valor, 0);
  const mediaMensal = somaFaturamento / valores.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (faturamento) => faturamento.valor > mediaMensal
  ).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
    mediaMensal: mediaMensal.toFixed(2),
  };
}

const resultado = calcularFaturamento(faturamentoMensal);
console.log("Menor valor de faturamento: ", resultado.menorValor);
console.log("Maior valor de faturamento: ", resultado.maiorValor);
console.log("Dias com faturamento acima da média: ", resultado.diasAcimaDaMedia);
console.log("Média mensal de faturamento: ", resultado.mediaMensal);