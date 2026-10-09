import PromptSync from "prompt-sync";
let teclado = PromptSync();

class Produto {
    constructor(
        private nome : string,
        private preco : number,
        private quantidade : number
    ){}
    get _nome(){
        return this.nome;
    }

    set _nome(nome : string){
        nome = this._nome;
    }
}