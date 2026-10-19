import { Util } from "./Aula06-Util";

export abstract class Personagem05 { // nao pode ser instanciado
  protected _nome: string;
  protected _armadura: number;
  protected _vidaMaxima: number;
  protected _vidaAtual: number;

  constructor(nome: string) {
    this._nome = nome;
    this._armadura = Util.randomizar(100, 1_000);
    this._vidaMaxima = Util.randomizar(100, 1_000);
    this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
  }


  public abstract atacar(): string; //classe obrigatoriamente tem que ser abstract

  public abstract defender(atacante: Personagem): number;

}
