<script setup>
import {reactive} from 'vue' //reatividade para objetos
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

let bolas = [
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

</script>

<template>
  <h1>Placar Snooker</h1>

  <Jogador v-for="jogador in jogadores" :key="jogador.id" :jogador="jogador" :bolas="bolas">

  </Jogador>
  

</template>
