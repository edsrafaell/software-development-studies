import Cabecalho from "./components/Cabecalho";
import CartaoLivro from "./components/CartaoLivro";
import type { Livro } from "./Livro";

const livros : Livro[] = [
    {
        id : 1,
        titulo : "Dom Casmurro",
        autor : "Machado de Assis",
        cartegoria : "Romance"
    },
    {
        id : 2,
        titulo : "Pequeno Principe",
        autor : "Antonie de Saint-Exupéry",
        cartegoria : "Fantasia"
    },
    {
        id : 3,
        titulo : "O Cortiço",
        autor : "Machado de Assis",
        cartegoria : "Romance"
    }
]

function App() {
    return (
        <div>
            <Cabecalho/>

            <main>
                <h2>Nosso catálogo</h2>
                {livros.map((livro) =>(
                    <CartaoLivro
                        key={livro.id}
                        livro={livro}
                    />
                ))}
            </main>
        </div>
    );
}

export default App;