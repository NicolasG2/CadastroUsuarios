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
//deve-se trabalhar com essa lista e converte-la para objetos.
const usuariosJSON = JSON.stringify(usuarios);

/* JSON.parse()*/
const listaUsuarios = JSON.parse(usuariosJSON);

let form = document.querySelector("form");
let botaoLogar = document.querySelector("#form-botao");

const objObrigatorio = `
<div class="campo-obrigatorio">
  <img src="../img/erro.png">
  <small> * Campo obrigatório  </small>
</div>`;

const chechInputs = (email, senha) => {
  let control = true;

  if (email.value.trim() == "") {
    email.classList.add("erro");
    control = false;

    email.parentElement.innerHTML += objObrigatorio;
  }

  if (senha.value.trim() == "") {
    senha.classList.add("erro");
    control = false;

    senha.parentElement.innerHTML += objObrigatorio;
  }

  return control;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let id = listaUsuarios.id;
  let nome = listaUsuarios.name;
  let usuario = document.querySelector("#email");
  let senha = document.querySelector("#senha");

  if (!chechInputs(usuario, senha)) {
    event.preventDefault();
  } else {
    listaUsuarios.forEach(function (itemUsuario) {
      if (itemUsuario.email.trim().toUpperCase() === usuario.toUpperCase() && itemUsuario.senha.trim().toUpperCase() === senha.toUpperCase()) {
        //* aqui insere no session store. */

        const cadastro = {
          id: sessionStorage.getItem("id"),
          nome: sessionStorage.getItem("nome"),
          usuario: sessionStorage.getItem("usuario"),
        }
    
      } else {
        event.preventDefault();
      }
    });
  }
});

window.onload = () => {

  listaUsuarios.forEach((id) => {

  });
};

//// ATIVIDADE

/// Passo a passo:

// 1) Quando a pessoa faz o login, deve-se validar login e senha não estão nulos. ok

// 2) Se não estiverem, deve-se verificar se estão na lista dos dados.

// 3) Se estiver correta deve ser armazenado as informações do usuário (guardar um json do usuário (Não pode armazenar senha)) no localStorage.

// 4) Deve-se redirecionar  para uma nova página em que haverá um mensagem de "Bem-vind@ Fulano" e um botao de inserir.

// 5) Sempre que a página for recarrega (onload), deve-se validar a informação do usuário (verificar se existe um usuário na sessão).

// 6) Caso o usuário clique em sair, deve ser redirecionado para a página de login e removido do localStorage.
