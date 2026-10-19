//energia, vida, defesa, ataque, nome
//classe
class Personagem{
    constructor(
        public nome : string ,
        public energia: number ,
        public vida : number ,
        public ataque : number ,
        public defesa : number ,
    ){}
}

//objetos
let sansa : Personagem;
sansa = new Personagem("Sansa", 10 ,90 ,20, 70);
console.log("Personagem: ", sansa);