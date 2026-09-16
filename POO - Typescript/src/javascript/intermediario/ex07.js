const readline = require("readline-sync");

let produtos = []

    produtos.push({
        nome: "Arroz",
        preco: 25
    });
    produtos.push({
        nome: "Feijao",
        preco: 6
    });
    produtos.push({
        nome: "Frango",
        preco: 13.50
    });
    produtos.push({
        nome: "Coxao Mole",
        preco: 55
    });

    for (let produto of produtos) {
        if (produto.preco > 50) {
            console.log(`Produto: ${produto.nome} | Preco: ${produto.preco}`);
        }
    }