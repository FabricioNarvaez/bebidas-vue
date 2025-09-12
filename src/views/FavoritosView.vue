<template>
    <h1 class="text-6xl font-extrabold">Favoritos</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <Receta v-if="!favoritosStore.isFavoritosVacio" v-for="receta in favoritosStore.favoritos" :receta="receta" :key="receta.idDrink" />
        <div v-else class="text-center col-span-full">
            <p class="text-2xl">No hay favoritos aún</p>
        </div>
    </div>
</template>

<script setup>
    import Receta from '../components/Receta.vue';
    import { useFavoritosStore } from '../stores/favoritos';

    const favoritosStore = useFavoritosStore();

</script>