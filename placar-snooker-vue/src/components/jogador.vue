<script setup>
import { ref, nextTick } from 'vue';
const props = defineProps({
    jogador: Object,
    bolas: Array
});

const emit = defineEmits(['somar-pontos', 'alterar-nome']);

const editandoNome = ref(false);
const nomeEditado = ref(props.jogador.nome);
const inputNome = ref(null);

async function abrirEdicao(){
    nomeEditado.value = props.jogador.nome
    editandoNome.value = true

    await nextTick()

    inputNome.value.focus()
    inputNome.value.select()
};

function salvarNome(){
    const novoNome = nomeEditado.value.trim()

    if (!novoNome) return

    emit('alterar-nome', novoNome)
    editandoNome.value = false
};

function cancelarEdicao() {
    editandoNome.value = false
};

</script>

<template>
    <section>
        <div v-if="editandoNome">
            <input 
            ref="inputNome"
            v-model="nomeEditado" 
            type="text"
            placeholder="Nome do Jogador"
            @keyup.enter="salvarNome"
            @keyup.esc="cancelarEdicao">

            <button @click="salvarNome">
                Salvar
            </button>
            <button @click="cancelarEdicao">
                Cancelar
            </button>
        </div>

        <div v-else>
            <h2>{{ props.jogador.nome }} <span><button @click="abrirEdicao">✏️</button></span></h2>
        </div>

        <p>{{ props.jogador.placar }}</p>

        <div>
            <button v-for="bola in props.bolas" :key="bola.pontos" @click="emit('somar-pontos', bola.pontos)">
                {{ bola.pontos }}
            </button>
        </div>
        <div>
            <button v-for="bola in props.bolas" :key="bola.pontosNegativos" @click="emit('somar-pontos', -bola.pontos)">
                {{ -bola.pontos }}
            </button>
        </div>
    </section>
</template>