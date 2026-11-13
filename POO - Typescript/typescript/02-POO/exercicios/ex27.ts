class RequisicaoHttp {
  enviar(dados: string): void {
    console.log("Enviando requisição:", dados);
  }
}

class RequisicaoSegura extends RequisicaoHttp {
  enviar(dados: string): void {
    const dadosSeguros = dados
      .trim()
      .replace(/[\u0000-\u001F\u007F]/g, "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

    console.log("Aplicando segurança...");

    super.enviar(dadosSeguros);
  }
}

const requisicao = new RequisicaoSegura();

requisicao.enviar("  <script>alert('Olá')</script>  ");
