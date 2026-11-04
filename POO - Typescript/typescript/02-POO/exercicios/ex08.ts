

class Funcionarios{
    constructor(
        protected nome: string,
        protected salarioBase : number
    ){}

    public calcularSalario() : number{
        return this.salarioBase;
    }

}

class Gerente extends Funcionarios{
    constructor(
        nome : string,
        salarioBase : number,
        private bonus : number
    ){
        super(nome, salarioBase);
    }

    public calcularSalario(): number {
        return this.salarioBase + this.bonus;
    }
}

const g = new Gerente("Fael", 1000, 200);
console.log(g.calcularSalario());