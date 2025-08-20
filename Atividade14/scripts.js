function validarFormulario() {
    // Acessando o formulário pelo nome
    const form = document.forms.formPrincipal;

    // return false - evita o envio do forms
    //

    // Nome - mínimo 10 caracteres
    if (form.nome.value.length < 10) {
        alert("O campo 'Nome' deve ter no mínimo 10 caracteres.");
        form.nome.focus(); // Coloca o foco no campo
        return false; // Impede o envio do formulário
    }

    // Validação do Email
    if (form.email.value === "") {
        alert("O campo 'E-mail' é obrigatório.");
        form.email.focus();
        return false;
    }

    //Validação do Comentário - mínimo 20 caracteres
    if (form.comentario.value.length < 20) {
        alert("O campo 'Comentário' deve ter no mínimo 20 caracteres.");
        form.comentario.focus();
        return false;
    }

    //Validação da Pesquisa
    const visita = form.elements['visita'];
    let visitaSelecionada = false;

    for (let i = 0; i < visita.length; i++) {
        if (visita[i].checked) {
            visitaSelecionada = true;
            break;
        }
    }

    if (!visitaSelecionada) {
        alert("A seção 'Pesquisa' é de preenchimento obrigatório. Por favor, preencha-a");
        return false;
    }

    //mensagens pra pesquisa
    if (visita.value === "sim") {
        alert("Volte sempre à esta página!");
    } else {
        alert("A gente sempre busca voltar aos lugares onde foi feliz. Que bom que você voltou!!");
    }
    
    // Se todas as validações passarem, permite o envio
    console.log("Formulário validado com sucesso!");
    return true; 
}