const { createElement } = require("react");

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

let agrupaContainerBolinhas = document.querySelectorAll('.agrupa-containers-btn');
let containerBolinhas = document.querySelectorAll('.container-botoes-bolinhas');
console.log(agrupaContainerBolinhas, containerBolinhas)

agrupaContainerBolinhas.forEach(container => {
    const jogador = Number(container.dataset.jogador)
    
})