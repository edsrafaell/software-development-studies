//energia, vida, defesa, ataque, nome
//classe
export default class Personagem03 {
    constructor(
        private _nome: string,
        private energia: number,
        private vida: number,
        private ataque: number,
        private defesa: number,
    ) { }

    public get nome() : string{
        return this._nome;
    }

    public set nome(nome : string){
        this._nome = nome;
    }

    public status(): void {
        console.log("Guerreiro: ");
        console.log("Nome: ", this._nome);
        console.log("Energia: ", this.energia.toFixed(1));
        console.log("Ataque: ", this.ataque.toFixed(1));
        console.log("Defesa: ", this.defesa.toFixed(1));
    }

    public treinarAtacar(): void {
        this.ataque += this.randonizar(7);
        this.energia -= this.randonizar(10);

        if (this.ataque > 100) {
            this.defesa = 100;
        }
    }

    public treinarDefesa(): void {
        this.defesa += this.randonizar(5);
        this.energia -= this.randonizar(10);

        if (this.defesa > 100) {
            this.defesa = 100;
        }
    }

    public descansa(hour: number): void {
        this.energia += hour * this.randonizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    }

    public batalhar(): number {
        this.energia -= Math.random() * 100;
        return this.energia;
    }

    public isAlive(): boolean {
        return this.energia < 0;
    } 

    private randonizar(fator: number) : number {
        return (Math.random() + fator);
    }
}
