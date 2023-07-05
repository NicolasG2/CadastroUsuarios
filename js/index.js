const usuarios = [
  {
    id: 1,
    name: "Taynara Dutra",
    email: "taynara@ifpr.edu.br",
    senha: "12345",
  },
  {
    id: 2,
    name: "Fulano Silva",
    email: "fulano@gmail.com",
    senha: "12345",
  },
  {
    id: 3,
    name: "Fabiano Meira",
    email: "fabiano.meira@gmail.com",
    senha: "12345",
  },
];

const usuariosJSON = JSON.stringify(usuarios);
const listaUsuarios = JSON.parse(usuariosJSON);

let form = document.querySelector("form");
let botaoLogar = document.querySelector("#form-botao");

const objObrigatorio = `
<div class="campo-obrigatorio">
  <img src="../img/erro.png">
  <small> * Campo obrigatório  </small>
</div>`;

const checkInputs = (email, senha) => {
  let control = true;

  if (email.value.trim() === "") {
    email.classList.add("erro");
    control = false;

    email.parentElement.innerHTML += objObrigatorio;
  }

  if (senha.value.trim() === "") {
    senha.classList.add("erro");
    control = false;

    senha.parentElement.innerHTML += objObrigatorio;
  }

  return control;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let usuario = document.querySelector("#email");
  let senha = document.querySelector("#senha");

  if (!checkInputs(usuario, senha)) {
    event.preventDefault();
  } else {
    let usuarioValue = usuario.value;
    let senhaValue = senha.value;

    let usuarioEncontrado = listaUsuarios.find(
      (itemUsuario) =>
        itemUsuario.email.trim().toUpperCase() === usuarioValue.toUpperCase() &&
        itemUsuario.senha.trim().toUpperCase() === senhaValue.toUpperCase()
    );

    if (usuarioEncontrado) {
      const cadastro = {
        id: usuarioEncontrado.id,
        nome: usuarioEncontrado.name,
        email: usuarioEncontrado.email,
      };

      localStorage.setItem("cadastro", JSON.stringify(cadastro));

      const mensagemBoasVindas = `Bem-vind@ ${usuarioEncontrado.name}`;
      const mensagemBoasVindasElement = document.querySelector("#mensagem-boas-vindas");
      mensagemBoasVindasElement.textContent = mensagemBoasVindas;

      // Redirecionar para a página de boas-vindas
      window.location.href = "./welcome.html?mensagem=" + encodeURIComponent(mensagemBoasVindas);
    } else {
      event.preventDefault();
    }
  }
});

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
