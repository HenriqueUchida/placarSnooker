<script setup>
import {reactive} from 'vue' //reatividade para objetos
import { computed, watch } from 'vue'
import Jogador from './components/Jogador.vue'

// const jogadores = reactive([
//   {
//     id: 1,
//     nome: 'Jogador 1',
//     placar: 0
//   },
//   {
//     id: 2,
//     nome: 'Jogador 2',
//     placar: 0
//   }
// ]);

const CHAVE_JOGADORES = 'placar-snooker-jogadores';

function carregarJogadores(){
  const dadosSalvos = localStorage.getItem(CHAVE_JOGADORES)

  if (dadosSalvos) {
    try {
      const jogadoresSalvos = JSON.parse(dadosSalvos)

      if (Array.isArray(jogadoresSalvos)){
        return jogadoresSalvos
      }
    } catch (erro){
      console.error('Erro ao carregar jogadores:', erro)
    }
  } else {
    return [
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
    ]
  }
}

const jogadores = reactive(carregarJogadores());

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
});

watch(
  jogadores, 
  (jogadoresAtulizados) => {
    localStorage.setItem(
      CHAVE_JOGADORES,
      JSON.stringify(jogadoresAtulizados)
    )
  },
  { deep: true}
)

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
];

function somarPontos(jogador, pontos){
  if (jogador.placar + pontos < 0){
    jogador.placar = 0
  } else {
  jogador.placar += pontos
  }
};

function alterarNome(jogador, novoNome){
  jogador.nome = novoNome
};

</script>

<template>
  <h1>Placar Snooker</h1>
  <p>{{ statusPlacar }}</p>


  
  <Jogador  
  v-for="jogador in jogadores" 
  :key="jogador.id" 
  :jogador="jogador" 
  :bolas="bolas" 
  @somar-pontos="somarPontos(jogador, $event)"
  @alterar-nome="alterarNome(jogador, $event)">
  </Jogador>

  

</template>
