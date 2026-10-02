/**
 * Crie uma classe chamada Circulo que possua um atributo privado/público raio (do
tipo number). 
Adicione métodos que calculem e retornem a área ($\pi \times
\text{raio}^2$) e o perímetro ($2 \times \pi \times \text{raio}$). Crie uma classe
separada (ou bloco de teste) chamada TestaCirculo que instancia a classe, atribui
um valor ao raio e exibe os resultados.
 */

class Circulo{
    constructor(raio, pi){
//        raio: Number;
        pi = 3.14;
    
        this.raio = raio;
    }

    calcularArea(){
        return Math.PI * this.raio ** 2;
    }

    calcularPerimetro(){
        return 2 * Math.PI * this.raio;
    }
}
const circulo1 = new Circulo(5); 
circulo1.calcularArea();
circulo1.calcularPerimetro();