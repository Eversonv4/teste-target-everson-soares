const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentualFaturamento(faturamento) {
  const valorTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] = ((faturamento[estado] / valorTotal) * 100).toFixed(2);
  }

  return { percentuais, valorTotal: valorTotal.toFixed(2) };
}

const resultado = calcularPercentualFaturamento(faturamentoMensal);

console.log("Percentual de cada estado:");

for (const estado in resultado.percentuais) {
  console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}

console.log("Valor total mensal da distribuidora: R$", resultado.valorTotal);