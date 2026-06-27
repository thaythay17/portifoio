function enviarWa(event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');

    const erroNome = document.getElementById('erro-nome');
    const erroMensagem = document.getElementById('erro-mensagem')

    const telefone = '5564992210923';

//limpa mensagem de erro 
    erroNome.textContent = "";
    erroMensagem.textContent = "";

//verificar se o nome foi preenchido
    if (nome.value.trim() === '') {
        erroNome.textContent = '⚠ preencha seu nome.';
        nome.focus();
        return;
    }

//verificar se a mensagem foi preenchida
    if (mensagem.value.trim() === '') {
        erroMensagem.textContent = '⚠ escreva uma mensagem';
        mensagem.focus();
        return;
    }

    const texto = 'Olá, meu nome é ' + nome.value + ', '  + mensagem.value;
    const msformatada = encodeURIComponent(texto);

    const url = 'https://wa.me/' + telefone + '?text=' + msformatada;

    window.open(url, '_blank');
}

const tema = document.getElementById("tema");

tema.addEventListener("change", () => {
    document.body.classList.toggle("tema-escuro");
});