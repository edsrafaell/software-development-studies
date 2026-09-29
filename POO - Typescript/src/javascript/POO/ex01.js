class Comanda{
    constructor(valorTotal, qtdePessoas){
        this.valorTotal = valorTotal;
        this.qtdePessoas = qtdePessoas;
    }

    dividirConta(){
        return this.valorTotal / this.qtdePessoas;
    }

}
    const comanda = new Comanda(200, 4);
    console.log(comanda.dividirConta()); 