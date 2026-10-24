import type { Livro } from "../Livro";

interface CartaoLivroProps {
    livro : Livro;
}

function CartaoLivro({livro} : CartaoLivroProps){
    return(
    <article className="cartao-livro">
        <h2>{livro.titulo}</h2>
        <p>{livro.autor}</p>
        <span>{livro.cartegoria}</span>
    </article>
    )
}

export default CartaoLivro;
