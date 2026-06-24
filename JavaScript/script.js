const containerMain = document.querySelector('main');

const jogadores= [
    {
        id: '1',
        nome: 'Jogador 1',
        pontos: 0,
        vitoria: 0
    },
    {
        id: '2',
        nome: 'Jogador 2',
        pontos: 0,
        vitoria: 0
    }
]

const botoes =[
    {bolinha: 'vermelha',
     pontos: 1
    },
    {bolinha: 'amarela',
     pontos: 2
    },
    {bolinha: 'verde',
     pontos: 3
    },
    {bolinha: 'marrom',
     pontos: 4
    },
    {bolinha: 'azul',
     pontos: 5
    },
    {bolinha: 'rosa',
     pontos: 6
    },
    {bolinha: 'preta',
     pontos: 7
    }
]

// function geraBotoes(){
//     let containerBotoes = document.querySelectorAll('.container-botoes-bolinhas');
//     containerBotoes.forEach(container => {
//         const operacao = container.dataset.valor;
//         const jogador = container.dataset.jogador;
//         botoes.forEach(botao => {
//             const valorTexto = botao.pontos * operacao
//             const criaDivBotao = document.createElement('div');
//             criaDivBotao.className = `seq-bolinhas cor-${botao.bolinha}`;
//             criaDivBotao.dataset.pontos = valorTexto;
//             criaDivBotao.dataset.jogador = jogador;
//             criaDivBotao.textContent = valorTexto;
//             container.appendChild(criaDivBotao);
//         });
//     });
// };

function renderizaCabecalho() {
   
    const cabecalho = 
        `<section id=cabecalho-main>
            <img id="img-finalizar" class="finalizar" src="./imagens/fechar.png" alt="botão de finalizar o jogo e mostrar resumo das partidas">
            <h3><span id="id-partida">1</span>° Partida</h3>
            <img id="img-reinicio" class="reinicar" src="./imagens/reinicio.png" alt="botão usado para reiniciar partidas e somar pontos ao jogador ganhador">
        </section>`
    
    containerMain.innerHTML += cabecalho
    return containerMain
}


function renderizaPlacares(){
    jogadores.forEach(jogador =>{
        const containerJogador = 
            `<section id=jogador-${jogador.id} class=jogador>
                <div id=cabecalho-jogador-${jogador.id}>    
                    <h3 id=descricao-jogador-${jogador.id}>${jogador.nome}</h3>
                    <span id="editar-jogador-1" class="edit-jogador" data-jogador="1"> <img id="lapis-1" class="edit-jogador" data-jogador="${jogador.id}" src="./imagens/lapis.png" alt="alterar nome jogador 1"></span>
                </div>
                <div id=container-placar-${jogador.id} class="placar">
                    <h2 id="conteudo-placar-${jogador.id}" class="conteudo-placar" data-jogador="${jogador.id}">${jogador.pontos}</h2>
                </div>    
            </section>`
        containerMain.innerHTML += containerJogador
    })
    return containerMain
}

function iniciar(){ 
    containerMain.textContent = '';
    renderizaCabecalho()
    renderizaPlacares()
}

iniciar()