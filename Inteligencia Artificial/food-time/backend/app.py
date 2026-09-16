from flask import Flask, jsonify, render_template
import numpy as np

app = Flask(__name__)

# Diz ao Flask onde está a pasta templates
app = Flask(
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static"
)
# =========================
# Página principal
# =========================
@app.route("/")
def home():
    return render_template("index.html")


# Modelo de regressão
@app.route("/modelo")
def modelo():

    # DATASET (40 registros)
    itens = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20]

    tipo = [1,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3]

    cozinheiros = [3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1]

    horario = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1]

    tempo = [10,12,13,16,15,18,18,21,20,24,22,26,24,29,26,31,28,34,30,36,32,39,34,41,36,44,38,46,40,49,42,51,44,54,46,56,48,59,50,61]

    # REGRESSÃO LINEAR SIMPLES

    media_x = np.mean(itens)
    media_y = np.mean(tempo)

    numerador, denominador = 0, 0
    for i in range(len(itens)):
        numerador += (itens[i] - media_x) * (tempo[i] - media_y)
        denominador += (itens[i] - media_x) ** 2

    b1 = numerador / denominador
    b0 = media_y - (b1 * media_x)

    # Comparação com polyfit
    polyfit = np.polyfit(itens, tempo, 1)

    # REGRESSÃO LINEAR MÚLTIPLA

    x = np.column_stack([np.ones(len(itens)),itens,tipo,cozinheiros,horario
    ])

    y = np.array(tempo)

    # Fórmula:
    # B = (XᵀX)⁻¹ XᵀY

    beta = np.linalg.inv(x.T @ x) @ (x.T @ y)

    # Comparação com lstsq
    beta_lstsq, residuos, rank, sv = np.linalg.lstsq(x, y, rcond=None)

    # =========================
    # Retorno JSON
    # =========================

    return jsonify({

        # Manual
        "tempo_base": round(float(beta[0]), 4),
        "peso_itens": round(float(beta[1]), 4),
        "peso_tipo": round(float(beta[2]), 4),
        "peso_cozinheiros": round(float(beta[3]), 4),
        "peso_horario": round(float(beta[4]), 4),

        # lstsq
        "lstsq_b0": round(float(beta_lstsq[0]), 4),
        "lstsq_b1": round(float(beta_lstsq[1]), 4),
        "lstsq_b2": round(float(beta_lstsq[2]), 4),
        "lstsq_b3": round(float(beta_lstsq[3]), 4),
        "lstsq_b4": round(float(beta_lstsq[4]), 4),

        # erro
        "erro": round(float(residuos[0]), 4)
    })


# =========================
# Inicialização do servidor
# =========================
if __name__ == "__main__":
    app.run(debug=True)