let pessoa : [string, number] = ["Rafael", 19];
console.log(pessoa[0]);
console.log(pessoa[1]);

pessoa[0] = "Edson";
pessoa[1] = 23;
console.log(pessoa[0]);
console.log(pessoa[1]);

const people : readonly [string, number] = [
    "Miguel",
    12
]
console.log(people[0]);
console.log(people[1]);
// people[0] = "joao"; //não permitido
console.log(people[0]);