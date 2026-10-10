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


class ContaBancaria{
    constructor(
        private _numeroConta: number,
        private _saldo: number
    ){}
    
    public get saldo(): number {
        return this._saldo;
    }
    public set saldo(value: number) {
        this._saldo = value;
    }
    public get numeroConta(): number {
        return this._numeroConta;
    }
    public set numeroConta(value: number) {
        this._numeroConta = value;
    }

    depositar(valor : number){
        this.saldo =+ valor;
    }

    sacar(valor : number){
        this.saldo =- valor;
    }

    exibirSaldo(){
        console.log(`o saldo da conta ${this.numeroConta} é de ${this.saldo}`)
    }

}
let conta1 = Number(teclado("Qual conta: "));
let saldo1 = Number(teclado("Digite o saldo: "));

let Conta1 = new ContaBancaria(conta1, saldo1);
let valor = Number(teclado("Digite o valor: "));
Conta1.depositar(valor);
Conta1.exibirSaldo();
Conta1.sacar(2*valor);
Conta1.exibirSaldo();