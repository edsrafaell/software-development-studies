const readline = require("readline-sync");

console.log("JOGO DE PONTUACAO");
let vidas = 3;
let pontos = 0;

function matouInimigo(){
    pontos += 100;
    console.log("Parabens! Voce matou o inimigo\n+100 pontos");
}

function pegouItem(){
    pontos += 50;
    console.log("Parabens! Voce pegou um item\n+50 pontos");
}

function perdeuVida(){
    pontos -= 200;
    vidas -= 1;
    console.log(`OPS! Voce perdeu uma vida. Ainda restam ${vidas}\n -200 pontos`);
    if (pontos < 0){
        pontos = 0;
    }
    if (vidas == 0){
        console.log("GAME OVER!");
        pontos = 0;
    }
}

function matouChefao(){
    pontos += 1000;
    console.log("PARABENS! VOCE MATOU O CHEFAO \n+1000 pontos");
}

function processarEventos(evento){
    switch (evento){
        case "MATOU_INIMIGO":
            matouInimigo();
            break;
        
        case "DERROTOU_CHEFAO":
            matouChefao();
            break;
        
        case "PEGOU_ITEM":
            pegouItem();
            break;
        
        case "PERDEU_VIDA":
            perdeuVida();
            break;
        
        default:
            console.log("Evento tinválido!");
    }
}

processarEventos("MATOU_INIMIGO");
processarEventos("PEGOU_ITEM");
processarEventos("PERDEU_VIDA");

console.log(`PONTOS: ${pontos}`);
console.log(`VIDAS: ${vidas}`);