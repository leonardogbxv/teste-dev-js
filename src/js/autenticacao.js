const json = '../json/autenticacao.json';

fetch(json)
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(err => {
  console.error(err);
});
