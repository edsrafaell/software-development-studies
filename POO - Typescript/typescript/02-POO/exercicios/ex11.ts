class ContaBancaria {
    saldo : number;

    constructor(saldo : number){
        this.saldo = saldo;
    }

    sacar(valor : number ) : boolean{
        if ( valor > this.saldo || valor <= 0){
            return false;
        }

        this.saldo -= valor;
        return true;
    }
}
class ContaCorrente extends ContaBancaria {
    taxa : number = 2;

    sacar(valor: number): boolean {
        return super.sacar(valor + this.taxa);
    }
}

const conta = new ContaCorrente(100);
console.log(conta.sacar(20));
console.log(conta.saldo);