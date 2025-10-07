document.addEventListener('DOMContentLoaded', function(){
    alert('[ATENÇÃO!] Só será permitido alterar os nomes dos jogadores na primeira rodada!')
})
let conteudoPlacar1 = document.querySelector('h2#conteudo-placar-1')
let conteudoPlacar2 = document.querySelector('h2#conteudo-placar-2')
let nomeJogador1 = document.getElementById('descricao-jogador-1')
let nomeJogador2 = document.getElementById('descricao-jogador-2')
let editarJogador1 = document.getElementById('editar-jogador-1')
let editarJogador2 = document.getElementById('editar-jogador-2')
let editarNome1 = document.getElementById('editar-jogador-1')
let editarNome2 = document.getElementById('editar-jogador-2')
let indicadorParida = document.getElementById('id-partida')
let reiniciaPartida = document.getElementById('reiniciar')
let finalizarJogo = document.getElementById('finalizar')
let somaVermelha1 = document.getElementById('soma-vermelha-1') 
let somaAmarela1 = document.getElementById('soma-amarela-1')
let somaVerde1 = document.getElementById('soma-verde-1')
let somaMarrom1 = document.getElementById('soma-marrom-1')
let somaAzul1 = document.getElementById('soma-azul-1')
let somaRosa1 = document.getElementById('soma-rosa-1')
let somaPreto1 = document.getElementById('soma-preto-1')

let subVermelha1 = document.getElementById('sub-vermelha-1') 
let subAmarela1 = document.getElementById('sub-amarela-1') 
let subVerde1 = document.getElementById('sub-verde-1') 
let subMarrom1 = document.getElementById('sub-marrom-1') 
let subAzul1 = document.getElementById('sub-azul-1') 
let subRosa1 = document.getElementById('sub-rosa-1') 
let subPreto1 = document.getElementById('sub-preto-1') 

let somaVermelha2 = document.getElementById('soma-vermelha-2')
let somaAmarela2 = document.getElementById('soma-amarela-2')
let somaVerde2 = document.getElementById('soma-verde-2')
let somaMarrom2 = document.getElementById('soma-marrom-2')
let somaAzul2 = document.getElementById('soma-azul-2')
let somaRosa2 = document.getElementById('soma-rosa-2')
let somaPreto2 = document.getElementById('soma-preto-2')

let subVermelha2 = document.getElementById('sub-vermelha-2') 
let subAmarela2 = document.getElementById('sub-amarela-2') 
let subVerde2 = document.getElementById('sub-verde-2') 
let subMarrom2 = document.getElementById('sub-marrom-2') 
let subAzul2 = document.getElementById('sub-azul-2') 
let subRosa2 = document.getElementById('sub-rosa-2') 
let subPreto2 = document.getElementById('sub-preto-2') 

let qtdeVitorias1 = document.getElementById ('qtde-vitorias-1')
let qtdeVitorias2 = document.getElementById ('qtde-vitorias-2')
let qtdeEmpates = 0


editarJogador1.addEventListener('click', function() {
    let novoNome = ''
    while (novoNome == '') {
        novoNome = prompt(`Digite o novo nome para o Jogador: ${nomeJogador1.textContent}`)
    }
    novoNome = novoNome ?? nomeJogador1.textContent
    alterarNomeJogador(1, novoNome)
})

editarJogador2.addEventListener('click', function() {
    let novoNome = ''
    while (novoNome == '') {
        novoNome = prompt(`Digite o novo nome para o Jogador: ${nomeJogador2.textContent}`)
    }
    novoNome = novoNome ?? nomeJogador2.textContent
    alterarNomeJogador(2, novoNome)
})

somaVermelha1.addEventListener('click', function() {
    valorBolinha = Number(somaVermelha1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})

somaAmarela1.addEventListener('click', function() {
    valorBolinha = Number(somaAmarela1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
somaVerde1.addEventListener('click', function() {
    valorBolinha = Number(somaVerde1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
somaMarrom1.addEventListener('click', function() {
    valorBolinha = Number(somaMarrom1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
somaAzul1.addEventListener('click', function() {
    valorBolinha = Number(somaAzul1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
somaRosa1.addEventListener('click', function() {
    valorBolinha = Number(somaRosa1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
somaPreto1.addEventListener('click', function() {
    valorBolinha = Number(somaPreto1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
													 
subVermelha1.addEventListener('click', function() {
    valorBolinha = Number(subVermelha1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
subAmarela1.addEventListener('click', function() {
    valorBolinha = Number(subAmarela1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
subVerde1.addEventListener('click', function() {
    valorBolinha = Number(subVerde1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
subMarrom1.addEventListener('click', function() {
    valorBolinha = Number(subMarrom1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
subAzul1.addEventListener('click', function() {
    valorBolinha = Number(subAzul1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
subRosa1.addEventListener('click', function() {
    valorBolinha = Number(subRosa1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
subPreto1.addEventListener('click', function() {
    valorBolinha = Number(subPreto1.textContent)
    atualizaPlacar1(conteudoPlacar1, valorBolinha)
})
													 
somaVermelha2.addEventListener('click', function() {
    valorBolinha = Number(somaVermelha2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
somaAmarela2.addEventListener('click', function() {
    valorBolinha = Number(somaAmarela2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
somaVerde2.addEventListener('click', function() {
    valorBolinha = Number(somaVerde2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
somaMarrom2.addEventListener('click', function() {
    valorBolinha = Number(somaMarrom2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
somaAzul2.addEventListener('click', function() {
    valorBolinha = Number(somaAzul2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
somaRosa2.addEventListener('click', function() {
    valorBolinha = Number(somaRosa2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
somaPreto2.addEventListener('click', function() {
    valorBolinha = Number(somaPreto2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
													 
subVermelha2.addEventListener('click', function() {
    valorBolinha = Number(subVermelha2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
subAmarela2.addEventListener('click', function() {
    valorBolinha = Number(subAmarela2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
subVerde2.addEventListener('click', function() {
    valorBolinha = Number(subVerde2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
subMarrom2.addEventListener('click', function() {
    valorBolinha = Number(subMarrom2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
subAzul2.addEventListener('click', function() {
    valorBolinha = Number(subAzul2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
subRosa2.addEventListener('click', function() {
    valorBolinha = Number(subRosa2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})
subPreto2.addEventListener('click', function() {
    valorBolinha = Number(subPreto2.textContent)
    atualizaPlacar1(conteudoPlacar2, valorBolinha)
})

function alterarNomeJogador(numeroJogador, novoNome) {
    novoNome = novoNome.trim()
    if (numeroJogador == 1) {
        nomeJogador1.textContent = novoNome 
    } else {
        nomeJogador2.textContent = novoNome
    }
}

function atualizaPlacar1(conteudoPlacar1, valorBolinha) {
    if(valorBolinha < 0 && Number(conteudoPlacar1.textContent) < (valorBolinha*-1)){
        return
    }
    else{
        conteudoPlacar1.textContent = Number(conteudoPlacar1.textContent) + valorBolinha
    }
}
function atualizaPlacar2(conteudoPlacar1, valorBolinha) {
    if(valorBolinha < 0 && Number(conteudoPlacar1.textContent) < (valorBolinha*-1)) {
        return
    }
    else{
        conteudoPlacar1.textContent = Number(conteudoPlacar1.textContent) + valorBolinha
    }    
}

function zeraPlacar(){
    conteudoPlacar1.textContent = 0
    conteudoPlacar2.textContent = 0
}

function incrementaPartida(){
    indicadorParida.textContent = Number(indicadorParida.textContent) + 1
    if(Number(indicadorParida.textContent) > 1){
        editarJogador1.style.display = 'none'
        editarJogador2.style.display = 'none'
    }
    console.log(Number(indicadorParida.textContent))
}

function confereVencedor(placarJogador1, placarJogador2){
    if (placarJogador1 > placarJogador2) {
        qtdeVitorias1 = qtdeVitorias1 + 1
    } else if (placarJogador1 < placarJogador2){
        qtdeVitorias2 = qtdeVitorias2 + 1
    } else {
        qtdeEmpates = qtdeEmpates + 1
    }
}   

reiniciaPartida.addEventListener('click', function(){
    if (Number(conteudoPlacar1.textContent) == 0 && Number(conteudoPlacar2.textContent) == 0)
        window.alert('O jogo ainda não iniciou!')
    else if (Number(conteudoPlacar1.textContent) != 0 && Number(conteudoPlacar2.textContent) != 0 && Number(conteudoPlacar1.textContent) == Number(conteudoPlacar2.textContent)) {
        window.alert(`A partida terminou ${conteudoPlacar1.textContent} a ${conteudoPlacar2.textContent}, não será contabilizada nenhuma vitoria`)
        qtdeEmpates = qtdeEmpates + 1
        zeraPlacar()
        incrementaPartida()
        
    }
    else if (Number(conteudoPlacar1.textContent) > Number(conteudoPlacar2.textContent)){
        alert('O jogador 1 venceu')
        qtdeVitorias1.textContent = Number(qtdeVitorias1.textContent) + 1
        console.log('v.jogador 1:', qtdeVitorias1.textContent)
        zeraPlacar()
        incrementaPartida()
    }else if (Number(conteudoPlacar1.textContent) < Number(conteudoPlacar2.textContent)){
        alert('O jogador 2 venceu')
        qtdeVitorias2.textContent = Number(qtdeVitorias2.textContent) + 1
        console.log('v.jogador 2:', qtdeVitorias1.textContent)
        zeraPlacar()
        incrementaPartida()
    }
    
})

finalizarJogo.addEventListener('click', function(){
    if(Number(conteudoPlacar1.textContent) == 0 && Number(conteudoPlacar2.textContent) == 0 && Number(indicadorParida.textContent) == 1){
        location.reload()
    } else if (Number(conteudoPlacar1.textContent) == 0 && Number(conteudoPlacar2.textContent) == 0) {
        indicadorParida.textContent = indicadorParida.textContent - 1
        console.log('v.jogador 1:', qtdeVitorias1.textContent)
        alert(`------Resumo da partida------
Partidas jogadas: ${indicadorParida.textContent} 
Vitorias Jogador 1: ${qtdeVitorias1.textContent}
Vitorias Jogador 2: ${qtdeVitorias2.textContent}
Empates: ${qtdeEmpates}`)
        location.reload()
    } else if (Number(conteudoPlacar1.textContent) != 0 || Number(conteudoPlacar2.textContent) != 0) {
        let placarJogador1 = Number(conteudoPlacar1.textContent)
        let placarJogador2 = Number(conteudoPlacar2.textContent)
        confereVencedor(placarJogador1, placarJogador2)
        alert(`------Resumo da partida------
Partidas jogadas: ${indicadorParida.textContent} 
Vitorias Jogador 1: ${qtdeVitorias1.textContent}
Vitorias Jogador 2: ${qtdeVitorias2.textContent}
Empates: ${qtdeEmpates}`)
        location.reload()
    }    
})