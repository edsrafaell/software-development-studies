
class CalculadoraFluente {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    somar(numero: number): this {
        this.valor += numero;
        return this;
    }

    subtrair(numero: number): this {
        this.valor -= numero;
        return this;
    }

    multiplicar(numero: number): this {
        this.valor *= numero;
        return this;
    }

    dividir(numero: number): this {
        if (numero === 0) {
            throw new Error("Não é possível dividir por zero");
        }

        this.valor /= numero;
        return this;
    }

    resultado(): number {
        return this.valor;
    }
}

const calculadora = new CalculadoraFluente(10);

console.log(
    calculadora
        .somar(5)
        .multiplicar(2)
        .subtrair(10)
        .resultado()
); 