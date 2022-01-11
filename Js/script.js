//Busca dos elementos/

const pesquisa = document.querySelector('.pesquisa');
const input = pesquisa.querySelector('input');
const sugestoes = pesquisa.querySelector('.autoComplet');


//adiciocao de evento quando teclado em qualquer tecla
input.onkeyup = (evento)=>{
    let dados= evento.target.value //dados inseridos

    let listaV = [];

    if(dados){

        //esse sugestao que aparece ai é o nome da variavel que contém a lista das sugestoes, 
        //ele está noutro arquivo js
        listaV = sugestao.filter((dado)=>{

            //filtrando os elementos da lista, mostrando os que existem
            return dado.toLocaleLowerCase().startsWith(dados.toLocaleLowerCase());

        });
        //colocando as sugestos dentro de uma lista caso elas existam
        listaV = listaV.map(function(dado){
            return dado = `<li>${dado}</li>`;
        });
        // console.log(listaV) 

        
        // adicionando uma classe de ativo quando for pesquisar um elemento

        pesquisa.classList.add('active') // ao mesmo tempo mostra as sugestoes
        mostrarSugestoes(listaV );

        let todasSugestoes = sugestoes.querySelectorAll('li')

        for (let i = 0; i < todasSugestoes.length; i++) {
            // adicionando onclick em todas as sugestoes
            todasSugestoes[i].setAttribute('onclick','seleciona(this)')
            
        }
    }
    else{
        pesquisa.classList.remove('active') //esconde as sugestoes
    }
}
// funcao para selecionar elemento individual com o click
function seleciona(elemento){
    let selecionarUsuar = elemento.textContent;
    input.value = selecionarUsuar; // mostrar o item selecionado no input

    // depois de colocar   o dado no input temos que limpar a lista, removendo a classe
    pesquisa.classList.remove('active')
}


// Nesta funcao, faço a condicao de que, se o o valor introduzido exitir mostrarSugestoes, 
//caso não imprimi os valores digitados, enviando para a lista do html
function mostrarSugestoes(lista){
    let listaDados;
    if(!lista.length){
        let valorEncotrado = input.value;
        listaDados = `<li>${valorEncotrado}</li>`;
    }else{
        listaDados =`<strong>${lista.join('')}</strong>`;

    }
    sugestoes.innerHTML = listaDados;
}