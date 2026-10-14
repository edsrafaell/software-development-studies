class Produto {
    private _nome: string;
    private _preco: number;
    private _quantidade: number;

    constructor(nome: string, preco: number,  quantidade: number) {
        this._nome = nome;
        this._preco = 0;
        this._quantidade = 0;

        this.preco = preco;
        this._quantidade = quantidade;
    }

    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        if (value < 0){
            console.log("Valor invalido!");
        } else {
            this._preco = value;
        }
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    calcularValorTotal(){
        let valorTotal = this._quantidade * this._preco;
        return valorTotal;
    }
}

let Produto1 = new Produto("Folha", 10, 50);
console.log(Produto1.calcularValorTotal());
let Produto2 = new Produto("Lapis", -10, -50);
console.log(Produto2.calcularValorTotal());
