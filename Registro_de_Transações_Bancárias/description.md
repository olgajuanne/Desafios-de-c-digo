# Registro de Transações Bancárias

## Desafio

Crie um programa em JavaScript que permita ao usuário realizar uma única operação a partir de um menu com quatro opções: Depósito, Saque, Saldo e Sair. Após a escolha de uma dessas opções, o programa deve executar a operação correspondente e exibir as informações atualizadas do saldo. Após a execução da operação, o programa encerrará automaticamente.

## Entrada:

  -  O programa inicia com uma conta bancária fictícia, com as seguintes informações:
      *  Nome do Cliente: João
      *  Saldo Inicial: R$ 1,000.00

  -  O usuário interage com o programa por meio de um menu com as seguintes opções:
      1.  Depósito: O usuário insere o valor do depósito, que é adicionado ao saldo da conta.
      2.  Saque: O usuário insere o valor do saque, que é deduzido do saldo, desde que haja saldo suficiente.
      3.  Saldo: O programa exibe o saldo atual da conta de João.
      4.  Sair: O usuário pode encerrar o programa.

## Saída:

O programa deverá executar uma das 4 opçoes do menu (Depósito/Saque/Saldo/Sair) e exibir as informações atualizadas do saldo. 
Caso digite a opção 4, deverá retornar a mensagem "Encerrando programa".

## Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada 	    | Saída         |
| ------------- | ------------- |
| 1 300.00      | Operação de depósito concluída. Saldo atual: R$ 1300.00 |
| 2 900.00      | Operação de saque concluída. Saldo atual: R$ 100.00 |
| 3 	        | Saldo atual: R$ 1000.00 |