<script setup>
import { ref } from 'vue' //reatividade para elemento unitário
import {reactive} from 'vue' //reatividade para objetos

const jogador1 = reactive({
  nome: 'Jogador 1',
  placar: 0
})

const nomeJogador1 = ref('Jogador 1')
const nomeJogador2 = ref('Jogador 2')

const placarJogador1 = ref(0)
const placarJogador2 = ref(0)

function somarPontos(jogador, pontos){
  jogador.placar += pontos
  console.log(jogador)
  // placar.value++

 
}

</script>

<template>
  <h1>Placar Snooker</h1>

  <section>
    <h2>{{ jogador1.nome }}</h2>
    <p>{{ jogador1.placar }}</p>
    
    <button @click="somarPontos(jogador1, 1)">+1</button>
  </section>
 
  <section>
    <h2>{{ nomeJogador2 }}</h2>
    <p>{{ placarJogador2 }}</p>
    
    <button @click="somarPontos(placarJogador2)">+1</button>
  </section>

  

</template>
