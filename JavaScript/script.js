let botoes =[
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

function geraBotoes(){
    let containerBotoes = document.querySelectorAll('.container-botoes-bolinhas');
    containerBotoes.forEach(container => {
        const operacao = container.dataset.valor;
        const jogador = container.dataset.jogador;
        botoes.forEach(botao => {
            const valorTexto = botao.pontos * operacao
            const criaDivBotao = document.createElement('div');
            criaDivBotao.className = `seq-bolinhas cor-${botao.bolinha}`;
            criaDivBotao.dataset.pontos = valorTexto;
            criaDivBotao.dataset.jogador = jogador;
            criaDivBotao.textContent = valorTexto;
            container.appendChild(criaDivBotao);
        });
    });
};

document.addEventListener('DOMContentLoaded', geraBotoes());