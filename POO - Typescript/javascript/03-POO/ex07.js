class Livro{
    constructor(titulo, pages, isbn){
        this.titulo = titulo;
        this.pages = pages;
        this.isbn = isbn;
    }
    printISBN(){
        console.log(this.isbn);
    }
}
    const livro1 = new Livro(
    "Dom Casmurro",
    256,
    "978-85-12345-67-8"
        );

    livro1.printISBN();

