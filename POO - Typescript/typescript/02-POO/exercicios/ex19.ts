
for (const figura of figuras) {

    if (figura instanceof Circulo) {
        console.log("É um círculo");
        console.log("Raio:", figura.raio);
        console.log("Área:", figura.calcularArea());

    } else if (figura instanceof Retangulo) {
        console.log("É um retângulo");
        console.log("Largura:", figura.largura);
        console.log("Altura:", figura.altura);
        console.log("Área:", figura.calcularArea());
    }
}
