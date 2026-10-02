const readline = require("readline-sync");

console.log("*****MENU*****\n")
console.log("[1] Cachorro - Quente: 2,20$");
console.log("[1]  Hamburguer: 2,20$");
console.log("[1] Cheeseburguer 2,30$");
console.log("[1] Refrigerante: 2,00$");

let opcao = Number(readline.question("Qual opcao: "));
let qtde = Number(readline.question("Quantidade: "));

switch (opcao) {
    case 1:
        console.log(`${qtde} Cachorro-Quente \nTOTAL: ${qtde * 2.20} R$`)
        break;

    case 2:
        console.log(`${qtde} Hamburque \nTOTAL: ${qtde * 2.20} R$`)
        break;

    case 3:
        console.log(`${qtde} Cheeseburguer \nTOTAL: ${qtde * 2.30} R$`)
        break;

    case 4:
        console.log(`${qtde} Refrigerante \nTOTAL: ${qtde * 2.00} R$`)
        break;
    
    default: 
        console.log("Opcao incorreta!")
        break
}