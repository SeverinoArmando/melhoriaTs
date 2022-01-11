//buscar os id´s do html
const busca =document.getElementById('search');
const matchList =document.getElementById('match-list');
// const matchList =document.querySelector('.autoComplet')

//busca do json com fetch 
const resultadoBusca = async textoEntrada =>{
    const resposta = await fetch('../dados.json');
    //mostrar os dados no formato json
    const estados = await resposta.json();

    //Matche dos valores
    let matches = estados.filter(estado =>{
        //trabalhando com expressoes regulares para fazer pesquisas comparando o primeiro valor
        const rege = new RegExp(`^${textoEntrada}`,'gi');
        return estado.title.toLocaleLowerCase().match(rege)
    });
    //lista vazia caso o valor inserido não exista
    if(textoEntrada.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
    //mostrar as informaçõe no html
     M_html(matches);
};

const M_html = matches =>{
    if(matches.length > 0) {
        const html = matches.map(match=>
            `<div class='match'>
                <h4><strong>${match.title}</strong></h4>
                <th>
                <img src="${match.logo}">
                <div class="span">
                <small><span ><a href="${match.url} target="_blank"><h5>Saiba mais clicando aqui..</h5></a></span></small>
                </div>
                </th>
                
            </div>`
        ).join('');
       
        matchList.innerHTML = html;
    }else{
        matchList.innerHTML = '';
    }
}


//evento do input
busca.addEventListener('input',()=>{
    resultadoBusca(busca.value);
});

