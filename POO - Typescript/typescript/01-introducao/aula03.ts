let valor : any;
valor = 10;
valor = "Rafael";
valor = true;

//Evite ultilizar ANY

let valores : unknown;
valores = 10;
//Modo certo - Após adicionar ele verifica qual o tipo primitivo

let value : string | undefined;
value = "Rafael";
value = undefined;
//So não pode ser boolean ou number

let vler : string | null = null;
vler = "Rafael";
vler = null;