class Pessoa{
    constructor(
        private _nome : string,
        private _telefone : number,
        readonly _dataNascimento : Date
    ){}

    get nome() : string{
        return this.nome;
    }
    
    set nome(nome : string) {
        this._nome = nome;
    }
    
    get telefone() : number{
        return this.telefone;
    }

    set telefone(telefone : number){
        this._telefone = telefone;
    }

    get dataNascimento() : Date {
        return this.dataNascimento;
    }
}