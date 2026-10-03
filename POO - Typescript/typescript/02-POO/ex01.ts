import prompt from "prompt-sync";

//classe
class Personagem{
    nome: string  = "";
    energiar: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;

    constructor(nome: string, public apelido : string, public retorno : number) {
        this.energiar = 50;
        this.ataque = 50;
        this.nome = nome;
    }

}

//atributo
let teclado = prompt();
let name : string = teclado("Qual o nome: ");
let Person1 : Personagem;
Person1 = new Personagem("Goham", "Gohem", 90);
Person1.nome = "Goham"; //Nome definido na inicialização
Person1.vida = 200;
Person1.ataque = 20;
Person1.energiar = 200;
Person1.defesa = 30;
console.log('Personagem: ', Person1);

let Person2 : Personagem;
Person2 = new Personagem("Goku", "Saiadin", 200);
Person2.nome = "Goku"; //Nome definido na inicialização
Person2.vida = 200;
Person2.ataque = 80;
Person2.energiar = 200;
Person2.defesa = 10;
console.log('Personagem: ', Person2);