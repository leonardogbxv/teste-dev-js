const usuarioContainer = document.querySelector('.form-div > #usuario');
const senhaContainer = document.querySelector('.form-div > #senha');
const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');

const resetBtn = document.querySelector('button[type="reset"]');
resetBtn.addEventListener('click', limparMensagens);
const submitBtn = document.querySelector('button[type="submit"]');
submitBtn.addEventListener('click', autenticacao);

// Função principal de autenticação
function autenticacao() {
  if(confirm("Confirmar envio do formulário? ✉")) {
    console.log(autenticacaoElementoValue());
  }
  
  return false;
}

// arquivo json
const json = '../json/autenticacao.json';

// Função que busca as informações do arquivo .json para validar usuario e senha
function autenticacaoElementoValue() {  
  fetch(json)
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      if(usuarioInput.value != user.usuario) {
        usuarioContainer.insertAdjacentHTML('afterend', `<p class="mensagem-erro">Usuário incorreto...</p>`);
      } else {
        usuarioContainer.insertAdjacentHTML('afterend', `<p class="mensagem-sucesso">Usuário válido!</p>`);
      }

      if(senhaInput.value != user.senha) {
        senhaContainer.insertAdjacentHTML('afterend', `<p class="mensagem-erro">Senha incorreta...</p>`);
      } else {
        senhaContainer.insertAdjacentHTML('afterend', `<p class="mensagem-sucesso">Senha válida!</p>`);
      }
      console.log('Enviou');
    });
  })
  .catch(err => {
    console.error(err);
  });

  console.log();
}

// "Limpa" todas as mensagens de erro e sucesso
function limparMensagens() {
  let erro = document.querySelectorAll('.mensagem-erro');
  let sucesso = document.querySelectorAll('.mensagem-sucesso');

  for(let i = 0; i < erro.length; i++) {
    console.log(erro[i]);
    erro[i].innerHTML = '';
  }

  for(let i = 0; i < sucesso.length; i++) {
    console.log(sucesso[i]);
    sucesso[i].innerHTML = '';
  }

  return alert('Limpando...🧹');
}