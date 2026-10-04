<script setup>
const props = defineProps({
    jogador: Object,
    bolas: Array
})
console.log(props.bolas)
</script>

<template>
    <section>
        <h2>{{ props.jogador.nome }}</h2>
        <p>{{ props.jogador.placar }}</p>

        <div>
            <button v-for="bola in props.bolas" :key="bola.pontos">{{ bola.pontos }}</button>
        </div>
        <div>
            <button v-for="bola in props.bolas" :key="bola.pontosNegativos">{{ -bola.pontos }}</button>
        </div>
    </section>
</template>