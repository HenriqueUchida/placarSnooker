let qtdePartidas = document.querySelector('#id-partida');
let conteudoPlacar1 = document.querySelector('#conteudo-placar-1');
let conteudoPlacar2 = document.querySelector('#conteudo-placar-2');
let empates = 0;
let vitoriasJogador1 = document.querySelector('#qtde-vitorias-1');
let vitoriasJogador2 = document.querySelector('#qtde-vitorias-2');
let partidasJogadadas = []
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
        }
        // console.log(event.target)
    });
};

function atualizaPlacar(jogador, valorBolinha){
    let conteudoPlacarGenerico = document.getElementById(`conteudo-placar-${jogador}`);
    let numPlacarGenerico = Number(conteudoPlacarGenerico.textContent);
    if (valorBolinha < 0 && numPlacarGenerico < (valorBolinha*-1)) {
        return
    } else {
        conteudoPlacarGenerico.textContent = numPlacarGenerico + valorBolinha;
    }
};

function reiniciaPartida(numConteudoPlacar1, numConteudoPlacar2){
    console.log(partidasJogadadas);
    if (numConteudoPlacar1 == 0 && numConteudoPlacar2 == 0){
        return
    }
    if (numConteudoPlacar1 == numConteudoPlacar2) {
        partidasJogadadas.push({partida: `${qtdePartidas.textContent}`, pontuacaoJogador1: `${numConteudoPlacar1}`, pontuacaoJogador2: `${numConteudoPlacar2}`});
        console.log(numConteudoPlacar1, numConteudoPlacar2);
        empates += 1;
        qtdePartidas.textContent = Number(qtdePartidas.textContent) + 1;
        console.log('empatou');
        conteudoPlacar1.textContent = 0;
        conteudoPlacar2.textContent = 0;
    } else if (numConteudoPlacar1 > numConteudoPlacar2) {
        partidasJogadadas.push({partida: `${qtdePartidas.textContent}`, pontuacaoJogador1: `${numConteudoPlacar1}`, pontuacaoJogador2: `${numConteudoPlacar2}`});
        console.log(numConteudoPlacar1, numConteudoPlacar2);
        qtdePartidas.textContent = Number(qtdePartidas.textContent) + 1;
        vitoriasJogador1.textContent = Number(vitoriasJogador1.textContent) + 1;
        console.log(`jogador 1 ganhou`);
        conteudoPlacar1.textContent = 0;
        conteudoPlacar2.textContent = 0;

    } else if (numConteudoPlacar1 < numConteudoPlacar2){
        partidasJogadadas.push({partida: `${qtdePartidas.textContent}`, pontuacaoJogador1: `${numConteudoPlacar1}`, pontuacaoJogador2: `${numConteudoPlacar2}`});
        console.log(numConteudoPlacar1, numConteudoPlacar2);
        qtdePartidas.textContent = Number(qtdePartidas.textContent) + 1;
        vitoriasJogador2.textContent = Number(vitoriasJogador2.textContent) + 1;
        console.log(`jogador 2 ganhou`);
        conteudoPlacar1.textContent = 0;
        conteudoPlacar2.textContent = 0;
    }
    console.log('após reinicio');
    console.log(partidasJogadadas);
};

function finalizarJogo(numConteudoPlacar1, numConteudoPlacar2){
    if (numConteudoPlacar1 == 0 && numConteudoPlacar1 == 0){
        const ultimaPartida = partidasJogadadas.at(-1).partida;
        // console.log(ultimaPartida);
        return
    }
    if (numConteudoPlacar1 == numConteudoPlacar2 && numConteudoPlacar1 !=0 || numConteudoPlacar2 !=0) {
        // partidasJogadadas.push({partida: `${qtdePartidas.textContent}`, pontuacaoJogador1: `${numConteudoPlacar1}`, pontuacaoJogador2: `${numConteudoPlacar2}`});
        // empates += 1;
        // conteudoPlacar1.textContent = 0;
        // conteudoPlacar2.textContent = 0;
    } else if (numConteudoPlacar1 > numConteudoPlacar2) {
        // partidasJogadadas.push({partida: `${qtdePartidas.textContent}`, pontuacaoJogador1: `${numConteudoPlacar1}`, pontuacaoJogador2: `${numConteudoPlacar2}`});
        // qtdePartidas.textContent = Number(qtdePartidas.textContent) + 1;
        // vitoriasJogador1.textContent = Number(vitoriasJogador1.textContent) + 1;
        // console.log(`jogador 1 ganhou`);
        // conteudoPlacar1.textContent = 0;
        // conteudoPlacar2.textContent = 0;

    } else if (numConteudoPlacar1 < numConteudoPlacar2){
        // partidasJogadadas.push({partida: `${qtdePartidas.textContent}`, pontuacaoJogador1: `${numConteudoPlacar1}`, pontuacaoJogador2: `${numConteudoPlacar2}`});
        // qtdePartidas.textContent = Number(qtdePartidas.textContent) + 1;
        // vitoriasJogador2.textContent = Number(vitoriasJogador2.textContent) + 1;
        // console.log(`jogador 2 ganhou`);
        // conteudoPlacar1.textContent = 0;
        // conteudoPlacar2.textContent = 0;
    }
};

function editarJogador(jogador){
    
}

document.addEventListener('DOMContentLoaded', criaEventos());