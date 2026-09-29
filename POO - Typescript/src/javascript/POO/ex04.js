/**
    4. Manipulação Avançada de Propriedades e Métodos 
    Com base em um objeto literal produto que contenha código, descrição, valor e quantidade, implemente métodos internos utilizando a notação de ponto e de colchetes para:
· a) Reduzir a quantidade disponível (método baixar).
· b) Incrementar a quantidade disponível (método repor).
 */

const produto = {
    codigoBarras : 100,
    descricao: "Coca-Cola",
    valor: 12.00,
    qtdeEstoque : 20,

    repor(){
        this.qtdeEstoque +=1;
        console.log(`Quantidade: ${this.qtdeEstoque}`);
    },

    baixar(){
        this["qtdeEstoque"] -= 1;
        console.log(`Quantidade: ${this.qtdeEstoque}`);
    },

    exibirDados(){
        console.log(`Codigo: ${this.codigoBarras}`);
        console.log(`Quantidade estoque: ${this.qtdeEstoque}`);
        console.log(`Descricao: ${this.descricao}`);
        console.log(`Valor: ${this.valor}`);
    }
}

produto.repor();
produto.exibirDados();
produto.baixar()
produto.exibirDados();
