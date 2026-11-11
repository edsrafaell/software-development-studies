
class AnimalBase {
    especie: string;

    constructor(especie: string) {
        this.especie = especie;
    }
}

class Bovino extends AnimalBase {
    constructor() {
        super("Bovino");
    }
}

class Peixe extends AnimalBase {
    constructor() {
        super("Peixe");
    }
}

function processarAnimal(animal: AnimalBase): void {
    console.log("Espécie:", animal.especie);
}

const boi = new Bovino();
const peixe = new Peixe();

processarAnimal(boi);
processarAnimal(peixe);
