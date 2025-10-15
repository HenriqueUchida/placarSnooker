let qtdePartidas = document.querySelector('#id-partida');
let conteudoPlacar1 = document.querySelector('#conteudo-placar-1');
let conteudoPlacar2 = document.querySelector('#conteudo-placar-2');
function criaEventos(){
    const containerMain = document.querySelector('#placar-da-partida');
    containerMain.addEventListener('click', (event) => {
        if (event.target.matches('.seq-bolinhas')) { // evento para os elementos da classe "seq-bolinhas"
            const botaoClicado = event.target;
            const valorBotao = Number(botaoClicado.textContent);
            const jogador = Number(botaoClicado.dataset.jogador);
            // console.log(jogador, valorBotao);
            atualizaPlacar(jogador, valorBotao);
        } else if (event.target.matches('.reinicar')) {
            const numConteudoPlacar1 = Number(conteudoPlacar1.textContent)
            const numConteudoPlacar2 = Number(conteudoPlacar2.textContent)
            // console.log(numConteudoPlacar1, numConteudoPlacar2)
            reiniciaPartida(numConteudoPlacar1, numConteudoPlacar2);
        } else if (event.target.matches('.finalizar')){
            const numConteudoPlacar1 = Number(conteudoPlacar1.textContent)
            const numConteudoPlacar2 = Number(conteudoPlacar2.textContent)
            finalizarJogo(numConteudoPlacar1, numConteudoPlacar2);
        } else if (event.target.matches('.edit-jogador')){
            const jogadorEdit = event.target;
            const jogador = jogadorEdit.dataset.jogador;
            editarJogador(jogador)
            // console.log(jogadorEdit, jogador);
        }
        // console.log(event.target)
    });
};

function atualizaPlacar(jogador, valorBolinha){
    let conteudoPlacarGenerico = document.getElementById(`conteudo-placar-${jogador}`);
    let numPlacarGenerico = Number(conteudoPlacarGenerico.textContent);
    // console.log(conteudoPlacarGenerico, jogador, valorBolinha);
    if (valorBolinha < 0 && numPlacarGenerico < (valorBolinha*-1)) {
        return
    } else {
        conteudoPlacarGenerico.textContent = numPlacarGenerico + valorBolinha;
    }
};

function reiniciaPartida(numConteudoPlacar1, numConteudoPlacar2){

};

function finalizarJogo(numConteudoPlacar1, numConteudoPlacar2){

};

function editarJogador(jogador){
    
}

document.addEventListener('DOMContentLoaded', criaEventos());