/*
9. Gestão de Equipamentos Eletrônicos
Crie uma classe chamada Equipamento contendo:
· a) Um atributo booleano chamado ligado.
· b) Os métodos liga() e desliga(). O método liga altera o atributo para true e o
desliga para false.
· c) Um método chamado inverte(), que inverte o status atual (se ligado, desliga;
se desligado, liga).
· d) Valide os métodos liga e desliga para que não executem ações redundantes
caso o equipamento já esteja no estado desejado.
 */


class Eletronicos {
    constructor(ligado){
        // ligado : false;
        this.ligado = false;

    }

    ligar(){
        if (this.ligado == false) {
            this.ligado = true;
            console.log("ligado!");            
        } else{
        console.log("Ja esta ligado");
        }
    }

    desligar(){
        if (this.ligado == true) {
            this.ligado = false;
            console.log("desligado!");            
        } else {
        console.log("Ja esta desligado");
        }
    }

    // inverter(){
    //     if (this.ligado == true) {
    //         this.ligado = false;
    //         console.log("Está desligado!");
    //     }else{
    //         this.ligado = true;
    //         console.log("Está ligado");
    //     }
    // }

    inverter(){
        this.ligado = !this.ligado;
        console.log(`Esta ligado: ${this.ligado}`)
    }

}
const Eletronicos1 = new Eletronicos();
Eletronicos1.desligar();
Eletronicos1.ligar();
Eletronicos1.desligar();
Eletronicos1.inverter();
