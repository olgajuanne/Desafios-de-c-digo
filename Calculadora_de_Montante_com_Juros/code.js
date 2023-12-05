
const contaBancaria = {
  investimentoInicial: parseFloat(gets()),
  taxaJurosMensal: parseFloat(gets()),
  periodoMeses: parseInt(gets()),
};

// TODO: Calcule a taxa de juros mensal em formato decimal (0 a 1) a partir da taxa percentual fornecida:

let taxaJurosMensalDecimal = contaBancaria.taxaJurosMensal/100;

// TODO: Calcule o montante (valor total após o investimento) usando a fórmula de juros compostos.

let montante = contaBancaria.investimentoInicial * (1 + taxaJurosMensalDecimal) ** contaBancaria.periodoMeses;

// É impresso informações sobre o investimento:
print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
print("Juros: " + contaBancaria.taxaJurosMensal);
print("Período: " + contaBancaria.periodoMeses);
print("Resultado: " + montante.toFixed(2));