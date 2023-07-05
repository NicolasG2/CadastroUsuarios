window.addEventListener("load", () => {
    const cadastroArmazenado = localStorage.getItem("cadastro");

    if (cadastroArmazenado) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const mensagem = urlParams.get("mensagem");

        const mensagemBoasVindasElement = document.querySelector("#mensagem-boas-vindas");
        mensagemBoasVindasElement.textContent = mensagem;
    }
    
});

const botaoSair = document.querySelector("#botao-sair");

botaoSair.addEventListener("click", () => {
    localStorage.removeItem("cadastro");
    window.location.href = "./index.html";
});