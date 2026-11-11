
class PessoaRegistro {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class AlunoIFPI extends PessoaRegistro {
    matricula: string;
    curso: string;

    constructor(
        nome: string,
        idade: number,
        matricula: string,
        curso: string
    ) {
        super(nome, idade);

        this.matricula = matricula;
        this.curso = curso;
    }
}

const aluno1 = new AlunoIFPI(
    "Rafael",
    19,
    "2026001",
    "ADS"
);

console.log(aluno);
