import PromptSync from "prompt-sync";
let teclado = PromptSync();

class Pessoa {
    constructor(
        private nome : string,
        private idade : number,
    ){}

    get _nome(){
        return this.nome;
    }

    set _nome(nome : string){
        nome = this._nome;
    }

    get _idade(){
        return this.idade;
    }

    set _idade(idade : number){
        idade = this._idade;
    }

    apresentar(){
        console.log('Nome: ', this.nome);
        console.log('Idade: ', this.idade);
        
    }
}

let nome1 = teclado("Digite seu nome: ");
let idade1 = Number(teclado("Digite sua idade: "));
let Pessoa1 = new Pessoa(nome1, idade1 );
Pessoa1.apresentar();

let nome2 = teclado("Digite seu nome: ");
let idade2= Number(teclado("Digite sua idade: "));
let Pessoa2 = new Pessoa(nome2, idade2);
Pessoa2.apresentar();