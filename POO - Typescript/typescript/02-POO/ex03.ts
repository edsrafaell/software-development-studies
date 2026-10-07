import prompt  from "prompt-sync";
let teclado = prompt();

class Aluno{
    nome : string = "";
    cpf : number = 0;
    matricula : string = "";
    dataNascimento : number = 0;

    constructor(){
        this.nome = "";
        this.cpf = 0;
        this.matricula = "";
        this.dataNascimento = 0;
    }
}

class Menu {
    opcao : number = 0;
    constructor(opcao : number) {
        console.log("********MENU********");
        console.log("[1] CADASTRAR ALUNO");
        console.log("[2] SAIR");
        while (opcao == 1) {
            opcao = Number(teclado("Digite uma opcao: "));
        } 
    }
}