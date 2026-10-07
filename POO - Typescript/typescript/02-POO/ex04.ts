class Pessoa{
    constructor(
        private _nome : string,
        private _telefone : number,
        readonly _dataNascimento : number
    ){}

    get nome() : string{
        return this._nome;
    }
    
    set nome(nome : string) {
        this._nome = nome;
    }
    
    get telefone() : number{
        return this._telefone;
    }

    set telefone(telefone : string){
        if (telefone.length == 11) {
            if (isNaN(this.telefone)) {
                this.telefone = telefone;
            } else {
            console.log(`o número está ${telefone} errado!`)
            }
        } else {
            console.log(`o número está ${telefone} errado!`)
        }
    }
}

let Pessoa1 = new Pessoa("Rafael", 8999293939, 161206);
console.log('Pessoa1.nome :>> ', Pessoa1.nome);
console.log('Pessoa1.telefone :>> ', Pessoa1.telefone);
// console.log('Pessoa1.nome :>> ', Pessoa1.nome);