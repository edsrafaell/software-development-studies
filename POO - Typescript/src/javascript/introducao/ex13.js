const readline = require("readline-sync");

let idade = Number(readline.question("Idade: "))
if (idade >0 && idade < 2){
    console.log("BEBE!");
} else if (idade >= 2 && idade <+ 12){
    console.log("CRIANCA!");
} else if (idade > 12 && idade <= 22){
    console.log("ADOLESCENTE!");
} else if (idade > 22 && idade <= 69){
    console.log("ADULTO!");
} else if (idade > 70){
    console.log("IDOSO!");
} else {
    console.log("Valor digitado incorreto!");
}