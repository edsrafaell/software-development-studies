const readline = require("readline-sync");

let venda = {
    nome: readline.question("Qual o produto: "),
    valor: Number(readline.question("Qual o valor do produto: ")),
    quantidade: Number(readline.question("Qual a quantidade de produtos: ")),
}
console.log("\n*******DADOS DA VENDA********\n");
console.log(`Produto: ${venda.nome}`);
console.log(`Valor: ${venda.valor}`);
console.log(`Quantidade: ${venda.quantidade}`);
console.log("\n*******DADOS DA VENDA********\n");
console.log(`TOTAL: ${venda.valor * venda.quantidade}`);