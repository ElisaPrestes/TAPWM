function transformarTexto() {
    const textoInput = document.getElementById('textoInput');
    const paraMaiusculas = document.getElementById('maiusculas').checked;

    if (paraMaiusculas) {
        textoInput.value = textoInput.value.toUpperCase();
    } else {
        textoInput.value = textoInput.value.toLowerCase();
    }
}


const radioMaiusculas = document.getElementById('maiusculas');
const radioMinusculas = document.getElementById('minusculas');


radioMaiusculas.addEventListener('click', transformarTexto);
radioMinusculas.addEventListener('click', transformarTexto);