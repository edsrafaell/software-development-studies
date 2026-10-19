import { Mage } from "./Aula06-Mage";
import { Personagem05 } from "./Aula06-Personagem";
import { Priest } from "./Aula06-Priest";
import { Warrior } from "./Aula06-Warrior";

let mage: Personagem05 = new Mage("Rafael Mage");
let warrior: Personagem05 = new Warrior("Rafael Warrior");
let priest: Personagem05 = new Priest("Rafael Priest");

const personagens : Personagem05[] = [];
personagens.push(mage);
personagens.push(priest);

personagens.forEach(p => 
    console.log(p instanceof Mage? p.atacar(): (p as Priest).atacar())
); //forma conceitual

console.log(mage.atacar());
console.log()

personagens.forEach((p) => console.log(p.atacar()));