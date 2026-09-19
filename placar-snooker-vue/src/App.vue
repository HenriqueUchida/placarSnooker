<script setup>
import { ref } from 'vue' //reatividade para elemento unitário
import {reactive} from 'vue' //reatividade para objetos

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
  jogador.placar += pontos
  // jogador.placar += pontos
  // console.log(jogador)


 
}

</script>

<template>
  <h1>Placar Snooker</h1>

  <section v-for="jogador in jogadores" :key="jogador.id">
    <h2>{{ jogador.nome }}</h2>
    <p>{{ jogador.placar }}</p>


    <div>
      <button v-for="botao in bolas" @click="somarPontos(jogador, botao.pontos)" :key="botao.pontos">
        {{ botao.pontos }}
      </button>
    </div>
    <div>
      <button v-for="botaoNegativo in bolas" @click="somarPontos(jogador, -botaoNegativo.pontos)" :key="botaoNegativo.pontos">
        {{ -botaoNegativo.pontos}}
      </button>
    </div>
    
    <!-- <button @click="somarPontos(jogador, 1)">+1</button> -->
  </section>
  <!-- <section>
    <h2>{{ jogadores[0].nome }}</h2>
    <p>{{ jogadores[0].placar }}</p>
    
    <button @click="somarPontos(jogadores[0], 1)">+1</button>
  </section>
 
  <section>
    <h2>{{ jogadores[1].nome }}</h2>
    <p>{{ jogadores[1].placar }}</p>
    
    <button @click="somarPontos(jogadores[1], 1)">+1</button>
  </section> -->

  

</template>
