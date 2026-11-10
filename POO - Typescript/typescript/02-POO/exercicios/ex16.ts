
class Repositorio {

    buscar(id: number): string;
    buscar(termo: string): string[];

    buscar(valor: number | string): string | string[] {

        if (typeof valor === "number") {
            return `Registro encontrado com ID: ${valor}`;
        } else {
            return [
                `Resultado 1 para: ${valor}`,
                `Resultado 2 para: ${valor}`
            ];
        }
    }
}

const repositorio = new Repositorio();

console.log(repositorio.buscar(10));
console.log(repositorio.buscar("Java"));
