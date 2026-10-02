const readline = require("readline-sync");

let nota1 = Number(readline.question("Digite sua primeira nota: "));
let nota2 = Number(readline.question("Digite sua segunda nota: "));
let nota3 = Number(readline.question("Digite sua terceira nota: "));
let mediaExercicios = Number(readline.question("Digite sua media de exercicios: "));
let conceito;
let mediaAproveitamento = (2*nota1 + 2*nota2 + 2*nota3 + mediaExercicios) / 7;

if (mediaAproveitamento >= 9) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
    conceito = "B";
} else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
    conceito = "C";
} else if (mediaAproveitamento >= 4 && mediaAproveitamento < 6) {
    conceito = "D";
} else if (mediaAproveitamento < 4) {
    conceito = "E"; 
} else {
    console.log("Notas erradas");
}

switch (conceito) {
    case "A" || "B" || "C":
        console.log("APROVADO");
        break;

    case "D" || "E":
        console.log("REPROVADO");
        break;

    default:
        break;
}