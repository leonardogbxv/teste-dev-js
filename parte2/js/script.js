let produtos = [
  {
    "nome": "Produto 3",
    "descricao": "Descrição do produto 3",
    "valor": 100,
    "opcionais": [
      "Opcional 1",
      "Opcional 2"
    ]
  },
  {
    "nome": "Produto 7",
    "descricao": "Descrição do produto 7",
    "valor": 200,
    "opcionais": [
      "Opcional 1",
      "Opcional 2",
      "Opcional 3",
      "Opcional 4"
    ]
  },
  {
    "nome": "Produto 5",
    "descricao": "Descrição do produto 5",
    "valor": 150,
    "opcionais": [
      "Opcional 1"
    ]
  },
  {
    "nome": "Produto 2",
    "descricao": "Descrição do produto 2",
    "valor": 75,
    "opcionais": [
      "Opcional 1",
      "Opcional 2",
      "Opcional 3",
      "Opcional 4"
    ]
  },
  {
    "nome": "Produto 6",
    "descricao": "Descrição do produto 6",
    "valor": 175,
    "opcionais": [
      "Opcional 1",
      "Opcional 2",
    ]
  },
  {
    "nome": "Produto 4",
    "descricao": "Descrição do produto 4",
    "valor": 125,
    "opcionais": [
      "Opcional 1",
      "Opcional 2",
      "Opcional 3"
    ]
  },
  {
    "nome": "Produto 1",
    "descricao": "Descrição do produto 1",
    "valor": 50,
    "opcionais": [
      "Opcional 1",
      "Opcional 2",
      "Opcional 3"
    ]
  }
];

const listaProdutos = document.getElementById('listaProdutos');

// Faz ordenação dos produtos pelo nome ("Produto 1", "Produto 2", ...)
produtos.sort(ordenarProdutos);

// Lista todos os produtos na tabela
function listarProdutos() {   
  produtos.forEach(produto => {
    let tr = document.createElement('tr');
    listaProdutos.appendChild(tr);

    // Adiciona as celulas da tabela sempre após o ultimo filho do elemento (<tr></tr>)
    tr.insertAdjacentHTML('beforeend', `<td>${produto.nome}</td>`);
    tr.insertAdjacentHTML('beforeend', `<td>${produto.descricao}</td>`);
    tr.insertAdjacentHTML('beforeend', `<td>${produto.valor}</td>`);
    
    let listaOpcionais = [];
    
    for(let i = 0; i < produto.opcionais.length; i++) {
      listaOpcionais.push(`<li>${produto.opcionais[i]}</li>`);
    }
    tr.insertAdjacentHTML('beforeend', `<td><li>${listaOpcionais.join("")}</li></td>`);
  });
}

// Função para ordenar os produtos pelo nome
function ordenarProdutos(a, b) {
  return regex(a.nome) - regex(b.nome);
}

// Função que usa regex para poder subtituir tudo que não for numérico no nome do produto
// "\D" pega todos os caracteres não númericos
// "/g" expressão global, foi colocada no final para pegar todos os caracteres
function regex(nomeProd) {
  return nomeProd.replace(/\D/g, "");
}

listarProdutos();