function Retangulo(x, y) {
  this.base = x;
  this.altura = y;

  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function executarCalculo() {
  let baseDigitada = document.getElementById("base").value;
  let alturaDigitada = document.getElementById("altura").value;

  let baseNumerica = parseFloat(baseDigitada);
  let alturaNumerica = parseFloat(alturaDigitada);

  let elementoResultado = document.getElementById("resultado");

  let meuRetangulo = new Retangulo(baseNumerica, alturaNumerica);

  let areaCalculada = meuRetangulo.calcularArea();

  elementoResultado.textContent =
    "A base: " +
    meuRetangulo.base +
    ", e a altura: " +
    meuRetangulo.altura +
    ", retornam a área: " +
    areaCalculada;
  elementoResultado.style.color = "green";

  console.log("Objeto Retângulo criado:", meuRetangulo);
  console.log("Área calculada:", areaCalculada);
}
