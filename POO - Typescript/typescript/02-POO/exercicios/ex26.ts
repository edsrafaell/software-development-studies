
class PessoaRegistro02 {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class AlunoIFPI1 extends PessoaRegistro02 {
    matricula: string;
    curso: string;
    matriculado: boolean;

    constructor(
        nome: string,
        idade: number,
        matricula: string,
        curso: string,
        matriculado: boolean
    ) {
        super(nome, idade);

        this.matricula = matricula;
        this.curso = curso;
        this.matriculado = matriculado;
    }
}


const pessoa01: PessoaRegistro02[] = [
    new PessoaRegistro02("Maria", 30),
    new AlunoIFPI("João", 19, "001", "ADS", true),
    new AlunoIFPI("Pedro", 20, "002", "Sistemas", false),
    new AlunoIFPI("Ana", 18, "003", "ADS", true)
];


for (const pessoa of pessoa01) {

    if (pessoa instanceof AlunoIFPI1) {

        if (pessoa.matriculado) {
            console.log("Nome:", pessoa.nome);
            console.log("Matrícula:", pessoa.matricula);
            console.log("Curso:", pessoa.curso);
        }
    }
}
