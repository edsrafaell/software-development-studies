import prompt  from "prompt-sync"; 

class Estudante{
        nome: string; 
        matricula: string; 
        dataNascimento: number;
        cpf: number;
    constructor(){
        this.nome = "";
        this.matricula = "";
        this.dataNascimento = 0;
        this.cpf = 0;
    }

}
let  teclado = prompt();
const Estudante1 = new Estudante();
Estudante1.nome  = teclado("Digite seu nome: ");
Estudante1.matricula = teclado("Digite sua matricula: ");
Estudante1.cpf = Number(teclado("Digite seu CPF: "));
Estudante1.dataNascimento =  Number(teclado("Digite sua Data de Nascimento: "));


console.log('Estudante: ', Estudante1);