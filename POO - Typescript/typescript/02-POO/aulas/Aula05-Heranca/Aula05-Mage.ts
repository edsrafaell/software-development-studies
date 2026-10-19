import { Personagem05 } from "./Aula05-Personagem";
import { Util } from "./Aula05-Util";

export class Mage extends Personagem05{
    private _intelecto : number;
    private _velocidade : number;

    constructor(nome: string){
        super(nome);
        this._armadura = Util.randomizar(100, 1_0000);
        this._vidaMaxima = Util.randomizar(100, 1_000);
        this._intelecto = Util.randomizar(100,1_000);
        this._velocidade = Util.randomizar(100, 1_000);
    }
}