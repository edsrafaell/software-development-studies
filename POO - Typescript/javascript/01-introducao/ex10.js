let pontos = 0;
const MULTIPLICADOR = 2;
console.log("Derrotou um inimigo! Ganhou 10 pontos");
pontos +=10;
console.log("Coletou um item! Ganhou 1 ponto");
pontos++;
console.log("Foi penalizado! Perde 5 pontos");
pontos -= 5;
console.log("Ativou um poder especial! Dobrou a pontuação");
pontos *= MULTIPLICADOR
console.log(`Total de pontos: ${pontos}`);