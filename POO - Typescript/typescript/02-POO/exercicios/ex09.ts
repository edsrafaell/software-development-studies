class Veiculo{
    constructor(
        private _velocidade : number
    ){}
    get velocidade(){
        return this._velocidade;
    }
    set velocidade(_velocidade : number){
        this._velocidade = _velocidade;
    }

    public acelerar(incremento : number):void{
        this.velocidade += incremento;
    }
}

class CarroEsportivo extends Veiculo{
    constructor(velocidade : number){
        super(velocidade);
    }
    public acelerar(incremento : number): void{
        super.velocidade += incremento*2;
    }
}

const carro1 = new Veiculo(10);
console.log(carro1.velocidade);
carro1.acelerar(10);
console.log(carro1.velocidade);

const carro2 = new CarroEsportivo(10);
console.log(carro2.velocidade);
carro2.acelerar(10);
console.log(carro2.velocidade);