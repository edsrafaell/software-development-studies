import PromptSync from "prompt-sync";
let teclado = PromptSync();

class Pessoa {
    constructor(
        private _nome: string,
        private _idade: number
    ) {}

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }

    apresentar() {
        console.log(
            `Olá, meu nome é ${this._nome} e tenho ${this._idade} anos.`
        );
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

