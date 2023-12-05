# DIO Bank II

## Desafio

Agora, expandiremos o desafio anterior relacionado ao saldo bancário. Vamos criar um programa em JavaScript que simule o saldo de uma conta bancária, mas desta vez, o programa incluirá operações de depósitos e saques.

## Entrada

A entrada deve receber os valores que preencherão o objeto JSON `contaBancaria`. Ele deve conter as seguintes propriedades:

### Conta Bancaria:

    - nomeCliente: uma string com o nome do cliente.
    - saldo: um número que representa o saldo inicial da conta.
    - numOperacoes: um número que indica o número de operações a serem realizadas.

### Operações

Para cada operação, o usuário deve informar:

    - tipoOperacao: uma string que pode ser 'depósito' ou 'saque'.
    - valorOperacao: um número que representa o valor da operação.

### Cálculo de Saldo

O saldo da conta deve ser atualizado com base nas operações de depósito e saque realizadas pelo usuário. O saldo inicial da conta é ajustado de acordo com essas operações.

## Saída

Após todas as operações, exiba o nome do cliente e o saldo final da conta.

> `Nome do cliente: ${contaBancaria.cliente}`

> `Saldo Final: R$ ${contaBancaria.saldo.toFixed(2)}`

## Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada       |	Saída       |
| ------------- | ------------- |
|Ana 1000 2 depósito 200 saque 2 200 |	Nome do cliente: Ana Saldo final: R$ 1000.00
| Caio 400 1 saque 300  |	Nome do cliente: Caio Saldo final: R$ 100.00
| Pedro 30 2 depósito 250 depósito 465  |	Nome do cliente: Pedro Saldo final: R$ 745.00