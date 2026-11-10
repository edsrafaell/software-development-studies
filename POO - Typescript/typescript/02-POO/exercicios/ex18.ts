
abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Retangulo extends FiguraGeometrica {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

const figuras: FiguraGeometrica[] = [
    new Circulo(5),
    new Retangulo(4, 6),
    new Circulo(3)
];

console.log(figuras);
