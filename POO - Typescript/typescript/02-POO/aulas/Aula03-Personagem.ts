//energia, vida, defesa, ataque, nome
//classe
export default class Personagem03 {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
    ) { }

    status(): void {
        console.log("Guerreiro: ");
        console.log("Nome: ", this.nome);
        console.log("Energia: ", this.energia.toFixed(1));
        console.log("Ataque: ", this.ataque.toFixed(1));
        console.log("Defesa: ", this.defesa.toFixed(1));
    }

    treinarAtacar(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;

        if (this.ataque > 100) {
            this.defesa = 100;
        }
    }

    treinarDefesa(): void {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;

        if (this.defesa > 100) {
            this.defesa = 100;
        }
    }

    descansa(): void {
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
    }

    batalhar(): number {
        this.energia -= Math.random() * 100;
        return this.energia;
    }

    isAlive(): boolean {
        if (this.energia < 0) {
            console.log("Ops! Voce morreu!");
            return true;
        } else {
            return false;
        }
    }
}
