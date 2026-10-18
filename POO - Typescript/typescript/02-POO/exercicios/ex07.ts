class Estudante{
    private _nome: string;
    private _nota1: number;
    private _nota2: number;

    constructor(nome : string, nota1 : number, nota2 : number){
        this._nome = nome;
        this._nota1 = nota1,
        this._nota2 = nota2
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get nota1(): number {
        return this._nota1;
    }

    public set nota1(value: number) {
        if (value < 0 || value > 10){
            "Nota invalida : 0 a 10"
        } else {
            this._nota1 = value;
        }
    }

    public get nota2(): number {
            return this._nota2;
    }

    public set nota2(value: number) {
        if (value < 0 || value > 10){
            "Nota invalida : 0 a 10"
        } else {
            this._nota2 = value;
        }
    }

    mediaAritmetica(): number{
        let media = (this.nota1 + this.nota2) / 2;
        return media;
    }

    aprovacao(){
        if (this.mediaAritmetica() >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

let Estudante1 = new Estudante("Fael", 10, 2);
console.log(Estudante1.mediaAritmetica());
console.log(Estudante1.aprovacao());