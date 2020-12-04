// Referência elementos da DOM
const usuarioContainer = document.querySelector('.form-div > #usuario');
const senhaContainer = document.querySelector('.form-div > #senha');
const descricaoContainer = document.querySelector('.form-div > #descricao');
const selectContainer = document.querySelector('.form-div > #select');
const radioContainer = document.querySelector('.form-div-radio');
const checkboxContainer = document.querySelector('.form-div-checkbox');

const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const descricaoInput = document.getElementById('descricao');
const selectInput = document.getElementById('select');
const radioInput = document.querySelectorAll('input[type="radio"]');
const checkboxInput = document.getElementById('checkbox');

// evento que dispara a função "limparErros()" caso o botao seja clicado
const resetBtn = document.querySelector('button[type="reset"]');
resetBtn.addEventListener('click', limparErros);
// evento que dispara a função "validacao()" caso o botao seja clicado
const submitBtn = document.querySelector('button[type="submit"]');
submitBtn.addEventListener('click', validacao);

// Função principal de validação
function validacao() {
  if(confirm("Confirmar envio do formulário? ✉")) {
    validacaoElementoValue(usuarioInput, usuarioContainer);
    validacaoElementoValue(senhaInput, senhaContainer);
    validacaoElementoValue(descricaoInput, descricaoContainer);
    validacaoElementoValue(selectInput, selectContainer);
    validacaoElementoRadio(radioContainer);
    validacaoElementoCheckbox(checkboxInput, checkboxContainer);
  } else {
    return false;
  }
}

// Validação de campos onde o atributo "value" retorna vazio caso não seja inserido nada
function validacaoElementoValue(elemento, container) {  
  if(elemento.value === '') {
    // Adiciona a mensagem de erro sempre após o ultimo filho do elemento 
    // (container: ".form-div" que contém o id do campo em questão)
    container.insertAdjacentHTML('afterend', `<p class="mensagem-erro">Este campo é obrigatório!</p>`);

    return false;
  }

  return true;
}

// Validação do campo tipo "checkbox" caso ele não seja preenchido
function validacaoElementoCheckbox(elemento, container) {
  if(elemento.checked === false) {
    container.insertAdjacentHTML('afterend', `<p class="mensagem-erro">Necessário preencher o campo!</p>`);

    return false;
  }

  return true;
}

// Validação do campo tipo "radio" caso ele não seja preenchido
function validacaoElementoRadio(container) {
  if(radioCheck() === false) {
    container.insertAdjacentHTML('afterend', `<p class="mensagem-erro">Necessário preencher o campo!</p>`);

    return false;
  }

  return true;
}

// O campo tipo "radio" retorna um array, então usamos essa função para varre-lo e ver o status do atributo "checked"
function radioCheck() {
  for (let i = 0; i < radioInput.length; i++) {
    if(radioInput[i].checked) {
      return true;
    }
  }

  return false;
}

// "Limpa" todas as mensagens de erro, da validação, na tela
function limparErros() {
  let mensagens = document.querySelectorAll('.mensagem-erro');
  
  // if(mensagens.length === 0) {
  //   return alert('Não há nada para limpar...')
  // }

  for(let i = 0; i < mensagens.length; i++) {
    console.log(mensagens[i]);
    mensagens[i].innerHTML = '';
  }

  return alert('Limpando...🧹');
}