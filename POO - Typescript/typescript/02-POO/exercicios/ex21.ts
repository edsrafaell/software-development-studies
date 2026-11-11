
class VendaCarro {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    calculaVenda(): number {
        return this.valor;
    }
}

class Avista extends VendaCarro {
    calculaVenda(): number {
        return this.valor * 0.90;
    }
}

class Cartao extends VendaCarro {
    calculaVenda(): number {
        return this.valor * 0.95;
    }
}

class Boleto extends VendaCarro {
    calculaVenda(): number {
        return this.valor * 0.98;
    }
}

const venda1 = new Avista(50000);
const venda2 = new Cartao(50000);
const venda3 = new Boleto(50000);

console.log(venda1.calculaVenda()); // 45000
console.log(venda2.calculaVenda()); // 47500
console.log(venda3.calculaVenda()); // 49000
