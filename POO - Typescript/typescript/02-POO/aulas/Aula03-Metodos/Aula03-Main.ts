import Personagem03 from "./Aula03-Personagem";
import prompt from "prompt-sync";


let person : Personagem03 = new Personagem03("Sansa Strak", 100, 40, 20, 20);

let teclado = prompt();
let option : number = 0;

while ( option != 9 || person.isAlive()){
    console.log("====== MENU ======");
    console.log("|1. Treinar ataque");
    console.log("|2. Treinar defesa");
    console.log("|3. Descansar");
    console.log("|4. Entrar em Combate");
    console.log("|8. Imprimir atributos");
    console.log("|9. Sair");
    console.log("==================");

    option = Number(teclado("Escolha uma opcao: "));

    switch (option) {
        case 1:
            person.treinarAtacar();
            person.status();
            break;
        
        case 2:
            person.treinarDefesa();
            person.status();
            break;
        
        case 3:
            person.descansa();
            person.status();
            break;
        
        case 4:
            person.batalhar();
            person.status();
            break;

        case 8:
            person.status();
    
        default:
            break;
    }
}