class Person {
    nome : string;
    idade?: number;

    constructor(nome: string);
    constructor(nome: string, idade: number);

    constructor(nome: string, idade?: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Person("Rafael");
const pessoa2 = new Person("Joao", 20);

console.log(pessoa1);
console.log(pessoa2);