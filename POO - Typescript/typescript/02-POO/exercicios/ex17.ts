
function unir(a: string, b: string): string;
function unir(a: number, b: number): number;

function unir(a: string | number, b: string | number): string | number {

    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }

    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    throw new Error("Os parâmetros devem ser do mesmo tipo.");
}

console.log(unir("Olá ", "Rafael"));
console.log(unir(10, 20)); 
