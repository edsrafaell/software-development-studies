abstract class Animal {
    constructor(protected nome: string) { }

    abstract falar(): string;
}

class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    public override falar(): string {
        return "AU AU";
    }
}

class Gato extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    public override falar(): string {
        return "MIAU";
    }
}

const Cachorro1 = new Cachorro("Fael");
console.log(Cachorro1.falar());
const Gato1 = new Gato("Mel");
console.log(Gato1.falar());
