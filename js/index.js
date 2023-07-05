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
  {
    id: 4,
    name: "Manoel Gomes",
    email: "manoel.gomes@gmail.com",
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
      const urlNovaPagina = `./welcome.html?mensagem=${encodeURIComponent(mensagemBoasVindas)}`;

      window.location.href = urlNovaPagina;
    }
  }
});

//// ATIVIDADE

/// Passo a passo:

// 1) Quando a pessoa faz o login, deve-se validar login e senha não estão nulos. 

// 2) Se não estiverem, deve-se verificar se estão na lista dos dados.

// 3) Se estiver correta deve ser armazenado as informações do usuário (guardar um json do usuário (Não pode armazenar senha)) no localStorage.

// 4) Deve-se redirecionar  para uma nova página em que haverá um mensagem de "Bem-vind@ Fulano" e um botao de inserir.

// 5) Sempre que a página for recarrega (onload), deve-se validar a informação do usuário (verificar se existe um usuário na sessão).

// 6) Caso o usuário clique em sair, deve ser redirecionado para a página de login e removido do localStorage.