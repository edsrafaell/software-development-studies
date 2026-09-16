const readline = require("readline-sync");

let saldoInicial = 2500;

console.log("MENU:")
console.log("[1] SALDO")
console.log("[2] SACAR:")
console.log("[3] DEPOSITO:")
console.log("[4]] ENCERRAR:")

let saldo;
let opcao = readline.question("Digite a opcao que deseja: ")
if (opcao == 1) {
    console.log(`SALDO: ${saldoInicial}`);
} else if (opcao == 2) {
    let valorSaque = Number(readline.question("Digite o valor que voce deseja sacar: "));
    if (valorSaque > saldoInicial) {
        console.log("O valor digitado é maior que o saldo atual!");
    } else {
        saldo = saldoInicial - valorSaque;
        console.log(`Saldo: ${saldo}`);
    }
} else if (opcao == 3){
    let valorDeposito = Number(readline.question("Digite o valor que voce deseja depositar: "));
    saldo = saldoInicial + valorDeposito;
    console.log(`Saldo: ${saldo}`);
} else if (opcao == 4){
    console.log("PROGRAMA CHEGOU AO FIM!");
} else{
    console.log("OPCAO INEXISTENTE!");
}