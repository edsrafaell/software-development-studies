/**
 * 3. Criando e Manipulando um Objeto Literal
    Crie um objeto literal em JavaScript chamado carro utilizando chaves {}. Adicione as    propriedades: nome (ex: 'Fusca'), cor (ex: 'Azul'), marca (ex: 'VW') e ano (ex: 1970).
    Em seguida, adicione um método chamado mostrarDados que utilize a palavra-chave this para exibir no console todas as propriedades formatadas em uma única frase.
 */

const carro = {
    nome: "Fusca",
    cor: "Azul",
    marca: "VW",
    ano: 1970,

    
    exibirCarro(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Ano: ${this.ano}`);
}
}
carro.exibirCarro();
