//Objetos
const aluno: {
    nome: string;
    idade: number;
} = {
    nome: "Carlos",
    idade: 18
};

//Acima o codigo fica muito grande, por isso usamos INTERFACE
interface Aluno{
    nome : string;
    idade : number;
}

const Aluno : Aluno = {
    nome : "Rafael",
    idade: 19
};


//Funções
function somar(a: number , b: number): number {
    return a+b;
}