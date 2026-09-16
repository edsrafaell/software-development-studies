const readline = require("readline-sync");

let nomeAluno = readline.question("Digite seu nome: ");
let nota1 = readline.question("Digite sua primeira nota: ");
let nota2 = readline.question("Digite sua segunda nota: ");
let nota3 = readline.question("Digite sua terceira nota: ");
let nota4 = readline.question("Digite sua quarta nota: ");
let frequencia = readline.question("Digite sua porcentagem de frequencia: ");
let media = (nota1 + nota2 + nota3 + nota4) / 4;
let maiorNota;
let menorNota;

if (frequencia < 75) {
    console.log("Reprovado por falta!");
} else{
    if (media >= 7) {
        console.log("PARABENS!!! Aprovado!");
    } else if (media >= 5 && media < 7){
        console.log("QUE SORTE!!! Vc tem chance uma nova chance! Recuperação!");
    } else{
        console.log("NÃOOOOOO! Você não atingiu a média! Reprovado");
    }
}

if (nota1 > nota2 > nota3 > nota4){
    maiorNota = nota1;
} else if (nota2 > nota3 > nota4){
    maiorNota = nota2;
} else if (nota3 > nota4){
    maiorNota = nota3;
} else{
    maiorNota = nota4;
}

if (nota1 < nota2 < nota3 < nota4){
    menorNota = nota1;
} else if (nota2 < nota3 < nota4){
    menorNota = nota2;
} else if (nota3 < nota4){
    menorNota = nota3;
} else{
    menorNota = nota4;
}

console.log(`A maior nota foi: ${maiorNota}`);
console.log(`A menor nota foi: ${menorNota}`);