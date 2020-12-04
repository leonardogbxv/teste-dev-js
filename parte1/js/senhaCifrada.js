/** START! */
const enviarSenhaBtn = document.getElementById('enviarSenha');

enviarSenhaBtn.addEventListener('click', encriptarDecriptar);

function encriptarDecriptar() {
  const criptDiv = document.getElementById('senha-criptada');
  const encripDiv = document.getElementById('senha-decriptada');

  let senha2 = document.getElementById('senha2').value;
  console.log(senha2);

  let senhaEncriptada = window.btoa(senha2);
  console.log(senhaEncriptada);

  let senhaDecriptada = window.atob(senhaEncriptada);
  console.log(senhaDecriptada);

  criptDiv.innerHTML = senhaEncriptada;
  encripDiv.innerHTML = senhaDecriptada;
}

