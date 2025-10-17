let qtdePartidas = document.querySelector('#id-partida');
let conteudoPlacar1 = document.querySelector('#conteudo-placar-1');
let conteudoPlacar2 = document.querySelector('#conteudo-placar-2');
let empates = 0;
let vitoriasJogador1 = document.querySelector('#qtde-vitorias-1');
let vitoriasJogador2 = document.querySelector('#qtde-vitorias-2');
let partidasJogadadas = [];
let nomejogador1 = document.querySelector('#descricao-jogador-1');
let nomejogador2 = document.querySelector('#descricao-jogador-2');
let overlay = document.getElementById('overlay');
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
            const numConteudoPlacar1 = Number(conteudoPlacar1.textContent);
            const numConteudoPlacar2 = Number(conteudoPlacar2.textContent);
            // console.log(numConteudoPlacar1, numConteudoPlacar2)
            verficaGanhador(numConteudoPlacar1, numConteudoPlacar2);
            reiniciaPartida();
        } else if (event.target.matches('.finalizar')){
            const numConteudoPlacar1 = Number(conteudoPlacar1.textContent);
            const numConteudoPlacar2 = Number(conteudoPlacar2.textContent);
            verficaGanhador(numConteudoPlacar1, numConteudoPlacar2);
            finalizarJogo();
        } else if (event.target.matches('.edit-jogador')){
            const jogadorEdit = event.target;
            const jogador = Number(jogadorEdit.dataset.jogador);
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

function reiniciaPartida(){
    conteudoPlacar1.textContent = 0;
    conteudoPlacar2.textContent = 0;
};

function finalizarJogo(){
     if(partidasJogadadas.length > 0){
        // const body = document.querySelector('body');
        const containerMain = document.querySelector('#placar-da-partida');
        /*Exemplo para pegar o ultimo elemento do array*/
        // const ultimaPartida = historicoPartidas[historicoPartidas.length - 1];    
        // // 3. Pega o valor da propriedade 'id_partida' desse objeto
        // const totalPartidas = ultimaPartida.id_partida;
        
        const partidas = partidasJogadadas[partidasJogadadas.length - 1];
        const ultimaPartida = partidas.partida;
        const janelaResumo = document.createElement('div');
        const cabecalhoResumo = document.createElement('div');
        const conteudoResumo = document.createElement('div');
        const mensagemResumo = document.createElement('div');
        const btnFechaResumo = document.createElement('div');
        janelaResumo.className = 'resumo';
        cabecalhoResumo.className = 'cabecalho-resumo';
        conteudoResumo.className = 'conteudo-resumo';
        mensagemResumo.className = 'mensagem-resumo';
        btnFechaResumo.className = 'container-fechar-resumo'
        cabecalhoResumo.innerHTML = '<h3>Resumo do Jogo</h3>';
        conteudoResumo.innerHTML += `<p>Foram jogadas: ${ultimaPartida} partidas</p>`;
        conteudoResumo.innerHTML += `<p>${nomejogador1.textContent} venceu: ${vitoriasJogador1.textContent} partidas</p>`;
        conteudoResumo.innerHTML += `<p>${nomejogador2.textContent} venceu: ${vitoriasJogador2.textContent} partidas</p>`;
        conteudoResumo.innerHTML += `<p>Empates: ${empates}</p>`;
        mensagemResumo.innerHTML = `<div><p>Tire seu print! &#128512;</p><div>`;
        btnFechaResumo.innerHTML = `<button id="fechar-resumo">Continuar</button>`;
        janelaResumo.appendChild(cabecalhoResumo,conteudoResumo,mensagemResumo,btnFechaResumo);
        overlay.style.display = 'block'
        containerMain.appendChild(janelaResumo);
        const fecharResumo = document.getElementById('fechar-resumo');
        fecharResumo.addEventListener('click', () => {
            window.location.reload();
        })
     } else {
        alert('Nenhuma partida foi jogada!');
     }
};

function verficaGanhador(placarJogador1, placarJogador2){
    if (placarJogador1 == 0 && placarJogador2 == 0){
        console.log('Jogo não iniciado');
        return
    }
    partidasJogadadas.push({partida: `${qtdePartidas.textContent}`, nomeJogador1: `${nomejogador1.textContent}`, pontuacaoJogador1: `${placarJogador1}`, nomeJogador2: `${nomejogador1.textContent}`, pontuacaoJogador2: `${placarJogador2}`});
    if (placarJogador1 == placarJogador2) {
        empates += 1;
        qtdePartidas.textContent = Number(qtdePartidas.textContent) + 1;

    } else if (placarJogador1 > placarJogador2) {
        qtdePartidas.textContent = Number(qtdePartidas.textContent) + 1;
        vitoriasJogador1.textContent = Number(vitoriasJogador1.textContent) + 1;

    } else if (placarJogador1 < placarJogador2){
        qtdePartidas.textContent = Number(qtdePartidas.textContent) + 1;
        vitoriasJogador2.textContent = Number(vitoriasJogador2.textContent) + 1;
    }
}

function editarJogador(jogador){
    //let nomejogador1 = document.querySelector('#descricao-jogador-1'); colinha pra não voltar no inicio do codigo
    //let nomejogador2 = document.querySelector('#descricao-jogador-2');
    const containerMain = document.querySelector('#placar-da-partida');
    const containerEdicao = document.createElement('div');
    const digitarNome = document.createElement('input'); //type="text" name="" id="">')
    const containerComandos = document.createElement('div');
    const cancelaEdicao = document.createElement('button');
    const aplicaEdicao = document.createElement('button');
    let novoNome = nomeJogador`${jogador}`.textContent
    containerEdicao.className = 'edicao-de-nomes';
    cancelaEdicao.textContent = 'Cancelar';
    aplicaEdicao.textContent = 'Aplicar';
    containerComandos.appendChild(cancelaEdicao, aplicaEdicao);
    containerEdicao.appendChild(containerComandos);
    digitarNome.type = 'text';
    digitarNome.placeholder = 'digite o nome desejado';
    if (jogador == 1){

    }
}

document.addEventListener('DOMContentLoaded', criaEventos());