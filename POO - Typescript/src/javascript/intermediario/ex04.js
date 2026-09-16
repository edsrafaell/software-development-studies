const readline = require("readline-sync");

let pessoa = {
    nome: readline.question("Nome: "),
    idade: Number(readline.question("Idade: ")),
    cidade: readline.question("Cidade: "),
    profissao: readline.question("Profissao: "),
}

console.log("\n*******DADOS DO CLIENTE*******\n")
console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Cidade: ${pessoa.cidade}`);
console.log(`Profissao: ${pessoa.profissao}`);