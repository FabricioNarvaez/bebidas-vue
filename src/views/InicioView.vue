<template>
    <h1 class="text-6xl font-extrabold">Recetas</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <Receta v-if="!bebidasStore.isRecetasVacio" v-for="receta in bebidasStore.recetas" :receta="receta" :key="receta.idDrink" />
        <div v-else class="text-center col-span-full">
            <p class="text-2xl">No hay resultados, utiliza el formulario para buscar una receta.</p>
        </div>
    </div>
</template>

<script setup>
    import Receta from '../components/Receta.vue';
    import { useBebidasStore } from '../stores/bebidas';

    const bebidasStore = useBebidasStore();


</script>