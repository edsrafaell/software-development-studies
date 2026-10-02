const readline = require("readline-sync");

let tipoCarro = Number(readline.question("Digite o tipo do carro: [1] Popular [2] Luxo [3] Espotivo "));
let valorCarro = Number(readline.question("Digite o preco do carro: "));
let formaPagamento = Number(readline.question("Qual a forma de pagamento [1] A vista [2] A prazo: "));
let descontoTipoCarro;
let valorFinalCarro;

switch (formaPagamento) {
    case 1: //A vista
        switch (tipoCarro) {
            case 1: // Popular
                descontoTipoCarro = valorCarro * 0.10;
                valorFinalCarro = valorCarro - descontoTipoCarro;
                console.log(`Valor Final: ${valorFinalCarro}`);
                break;
        
            case 2: // Luxo
                descontoTipoCarro = valorCarro * 0.15;
                valorFinalCarro = valorCarro - descontoTipoCarro;
                console.log(`Valor Final: ${valorFinalCarro}`);
                break;
            
            case 3: //Esportivos
                descontoTipoCarro = valorCarro * 0.12;
                valorFinalCarro = valorCarro - descontoTipoCarro;
                console.log(`Valor Final: ${valorFinalCarro}`);
                break;
            default:
                break;
        }

        
    break;

    case 2: // A prazo
        switch (tipoCarro) {
            case 1: // Popular
                descontoTipoCarro = valorCarro * 0.05;
                valorFinalCarro = valorCarro - descontoTipoCarro;
                console.log(`Valor Final: ${valorFinalCarro}`);
                break;
        
            case 2: // Luxo
                descontoTipoCarro = valorCarro * 0.08;
                valorFinalCarro = valorCarro - descontoTipoCarro;
                console.log(`Valor Final: ${valorFinalCarro}`);
                break;
            
            case 3: //Esportivos
                descontoTipoCarro = valorCarro * 0.10;
                valorFinalCarro = valorCarro - descontoTipoCarro;
                console.log(`Valor Final: ${valorFinalCarro}`);
                break;
            default:
                break;
        }

    default:
        break;
}