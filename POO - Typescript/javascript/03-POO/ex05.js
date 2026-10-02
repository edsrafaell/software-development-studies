function livro(titulo, autor, editor, ano){
    this.titulo = titulo;
    this.autor = autor;
    this.editor = editor;
    this.ano = ano;
}

const livro1 = new livro(
    "Dom Camusrro",
    "Machado de Assis",
    "Editora x",
    1899
)

const livro2 = new livro(
    "Dagrao Ball",
    "Um caba la",
    "Editor Y",
    1950
)

console.log(livro1);
console.log(livro2);