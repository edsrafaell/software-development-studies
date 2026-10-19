import { Mage } from "./Aula05-Mage";
import { Personagem05 } from "./Aula05-Personagem";
import { Priest} from "./Aula05-Priest";
import { Warrior } from "./Aula05-Warrior";

let mage : Personagem05 = new Mage("Rafael Mage");
let warrior : Personagem05 = new Warrior("Rafael Warrior");
let priest : Personagem05 = new Priest("Rafael Priest");

console.log("Mage: ", mage);
console.log("Priest: ", priest);
console.log("Warrior: ", warrior);