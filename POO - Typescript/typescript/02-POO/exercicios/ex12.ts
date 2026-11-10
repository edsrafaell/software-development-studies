class Documento {
    imprimir() : void{
        console.log('Imprimindo documento..')
    }
}

class Relatorio extends Documento {
    imprimir(): void {
        console.log("Imprimindo relatório...")
    }
}

class Certificado extends Documento {
    imprimir(): void {
        console.log("Imprimindo certificado...")
    }
}

const relatorio = new Relatorio();
const certificado = new Certificado();

relatorio.imprimir();
certificado.imprimir();
