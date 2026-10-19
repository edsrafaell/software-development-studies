import { Personagem05 } from "./Aula06-Personagem";
import { Util } from "./Aula06-Util";

export class Priest extends Personagem05 {
  private _intelecto: number;
  private _velocidade: number;
  
  constructor(nome: string) {
    super(nome);
    this._intelecto = Util.randomizar(100, 1_000);
    this._velocidade = Util.randomizar(100, 1_000);
  }
  
  public atacar(): string {
    return "Ataque do Padre";
  }

  public defender(atacante: Personagem): number {
    throw new Error("Method not implemented.");
  }

  //Para nao implementar todas as funcionalidades, é ela ser abstract tambem
}
