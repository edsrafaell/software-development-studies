const readline = require("readline-sync");

let num = Number(readline.question("Digite um numero:"));
if (num % 2 == 0){
    console.log(`O numero ${num} é par!`);
} else (
    console.log(`O numero ${num} é impar`)
)