class CalculadoraSimples {
    somar(a: number, b : number) : number;
    somar(a: number, b: number, c: number) : number;
    somar(numeros: number[]) : number;

    somar(a:number | number[], b?:number, c?: number) : number {
        if (Array.isArray(a)){
            return a.reduce((total, numero) => total + numero, 0);
        }
        return a + (b??0) + (c ?? 0);
    }    
}

const calc = new CalculadoraSimples();

console.log(calc.somar(10, 20));
console.log(calc.somar(10, 20, 30));
console.log(calc.somar([10, 20, 30, 40]));