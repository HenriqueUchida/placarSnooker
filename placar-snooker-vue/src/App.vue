<script setup>
import {reactive} from 'vue' //reatividade para objetos
import { computed } from 'vue'
import Jogador from './components/Jogador.vue'

const jogadores = reactive([
  {
    id: 1,
    nome: 'Jogador 1',
    placar: 0
  },
  {
    id: 2,
    nome: 'Jogador 2',
    placar: 0
  }
])
const statusPlacar = computed(() => {
  const placarJogadorUm = jogadores[0].placar
  const placarJogadorDois = jogadores[1].placar
  const nomeJogadorUm = jogadores[0].nome
  const nomeJogadorDois = jogadores[1].nome
  if (placarJogadorUm === placarJogadorDois){
    return 'O jogo está empatado'
  } else if (placarJogadorUm > placarJogadorDois){
    return `O ${nomeJogadorUm} está ganhando!`
  } else {
    return `O ${nomeJogadorDois} está ganhando!`
  }
})

const bolas = [
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

function somarPontos(jogador, pontos){
  if (pontos < 0 && jogador.placar < (pontos*-1)){
    jogador.placar = 0
  } else {
  jogador.placar += pontos
  }
}

</script>

<template>
  <h1>Placar Snooker</h1>
  <p>{{ statusPlacar }}</p>
  <Jogador v-for="jogador in jogadores" :key="jogador.id" :jogador="jogador" :bolas="bolas" @somar-pontos="somarPontos(jogador, $event)">

  </Jogador>
  

</template>
