function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
      section.innerHTML = "<h1>Nada<br>foi<br>encontrado</h1>"    
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let marca = "";
    let descricao = "";
    let modelo = "";
  
    // Itera sobre cada instrumento no array de dados
    for (let dado of dados) {
      marca = dado.marca.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      modelo = dado.modelo.toLowerCase()
      // Se titulo includes campoPesquisa
      if (marca.includes(campoPesquisa) || (descricao.includes(campoPesquisa)) || (modelo.includes(campoPesquisa))){
        // Cria uma nova div para cada instrumento e adiciona as informações relevantes
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">Marca: ${dado.marca}</a>
          </h2>
          <h3>Modelo: ${dado.modelo}</h3>
          <p class="descricao-meta"><strong>Publico alvo:</strong> ${dado.publicoAlvo}</p>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <p class="curiosidades">
            <strong>Materiais:</strong> ${dado.materiais}
          </p>
          <p class="curiosidades">
            <strong>Curiosidades:</strong> ${dado.curiosidades}
          </p>
        </div>
      `;
    
    }
  }

  if (!resultados){
    resultados = "<h1>Nada<br>foi<br>encontrado</h1>"
  }
  // Atribui a string com os resultados ao conteúdo HTML da seção
  section.innerHTML = resultados;
}


    

