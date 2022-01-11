let noiteDia = document.querySelector('.noiteDia');
let menu = document.querySelector('.menu');
let navegacao = document.querySelector('.navegacao')
// buscando o body para efetuar as mudançca nele
let body = document.querySelector('body');

// adicionando class ao clicar no icone com o metodo toggle
noiteDia.onclick = ()=>{
    body.classList.toggle('preto')
    noiteDia.classList.toggle('active')
}

// configuraçaõ do menu/

menu.onclick = ()=>{
    menu.classList.toggle('active')
    navegacao.classList.toggle('active')
    
}

