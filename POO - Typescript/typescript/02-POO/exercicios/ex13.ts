function formatarDado(dado: string) : string;
function formatarDado(dado: number) : string;

function formatarDado(dado: string | number) : string{
    if (typeof dado === "string") {
        return dado.toUpperCase();
    } else {
        return dado.toFixed(2);
    }
}

console.log(formatarDado("rafael"));
console.log(formatarDado(25.5));