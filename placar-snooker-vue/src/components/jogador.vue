<script setup>
const props = defineProps({
    jogador: Object,
    bolas: Array
});

const emit = defineEmits(['somar-pontos']);

</script>

<template>
    <section>
        <h2>{{ props.jogador.nome }}</h2>
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