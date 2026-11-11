
interface Tributavel {
    calculaTributos(): number;
}

class ContaCorrente02 implements Tributavel {
    saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    calculaTributos(): number {
        return this.saldo * 0.01;
    }
}

class SeguroDeVida implements Tributavel {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    calculaTributos(): number {
        return this.valor * 0.02;
    }
}

class AuditoriaInterna {
    calcularTotal(itens: Tributavel[]): number {
        let total = 0;

        for (const item of itens) {
            total += item.calculaTributos();
        }

        return total;
    }
}

const conta1 = new ContaCorrente02(10000);
const seguro = new SeguroDeVida(5000);

const auditoria = new AuditoriaInterna();

console.log(
    auditoria.calcularTotal([conta1, seguro])
);
