
class CalculadoraCientifica extends CalculadoraFluente {

    potencia(expoente: number): this {
        this.valor = Math.pow(this.valor, expoente);
        return this;
    }
}

const cientifica = new CalculadoraCientifica(2);

console.log(
    cientifica
        .somar(3)
        .potencia(2)
        .resultado()
); 
