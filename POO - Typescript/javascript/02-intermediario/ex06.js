const readline = require("readline-sync");

let nota = {
    nome : readline.question("Nome: "),
    nota1 : Number(readline.question("Nota 1: ")),
    nota2 : Number(readline.question("Nota 2: ")),
    nota3 : Number(readline.question("Nota 3: ")),

    Media : function (nota1, nota2, nota3){
        console.log(`Media: ${(this.nota1 + this.nota2 + this.nota3)/3}`);
    }
}

console.log("\n********MEDIA ALUNOS********\n");
nota.Media();
