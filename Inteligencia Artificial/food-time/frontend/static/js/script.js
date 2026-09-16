
let modelo = null;

async function carregarModelo(){

    try{

        const resposta = await fetch("/modelo");

        modelo = await resposta.json();

        document.getElementById("statusModelo").innerHTML =
            "✅ Modelo carregado";

    }catch(e){

        document.getElementById("statusModelo").innerHTML =
            "❌ Erro ao carregar modelo";
    }
}

function calcular(){

    const itens = parseFloat(document.getElementById("itens").value);
    const tipo = parseFloat(document.getElementById("tipo").value);
    const cozinheiros = parseFloat(document.getElementById("cozinheiros").value);
    const horario = parseFloat(document.getElementById("horario").value);

    const tempo =
        modelo.tempo_base +
        modelo.peso_itens * itens +
        modelo.peso_tipo * tipo +
        modelo.peso_cozinheiros * cozinheiros +
        modelo.peso_horario * horario;

    document.getElementById("resultado").innerHTML =
        "⏱️ " + tempo.toFixed(2) + " minutos";
}

function calcularLstsq() {

    const box = document.getElementById("resultadoLstsq");
    const residualBox = document.getElementById("residualBox");

    if (!modelo) {
        box.innerHTML = '<span class="placeholder">⏳ Aguarde...</span>';
        return;
    }

    const itens = parseFloat(document.getElementById("c_itens").value);
    const tipo = parseFloat(document.getElementById("c_tipo").value);
    const cozinheiros = parseFloat(document.getElementById("c_cozinheiros").value);
    const horario = parseFloat(document.getElementById("c_horario").value);

    if ([itens, tipo, cozinheiros, horario].some(isNaN)) {
        box.innerHTML = '<span class="placeholder">⚠️ Preencha todos os campos</span>';
        return;
    }

    const tempo =
        modelo.lstsq_b0 +
        modelo.lstsq_b1 * itens +
        modelo.lstsq_b2 * tipo +
        modelo.lstsq_b3 * cozinheiros +
        modelo.lstsq_b4 * horario;

    box.className = "result-box has-result-pink";

    box.innerText = "⏱️ " + tempo.toFixed(2) + " minutos";

    residualBox.style.display = "block";

    residualBox.innerText =
        "📉 Erro quadrático total (residual): " + modelo.erro;
}
carregarModelo();
