<template>
    <header class="bg-slate-800" :class="{'headerBGImage': paginaInicio}">
        <div class="mx-auto container px-5 py-4">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink :to="{ name: 'inicio'}">
                        <img class="w-32" src="/img/logo.svg" alt="Logo Bebidas Vue">
                    </RouterLink>
                </div>

                <nav class="flex gap-4">
                    <RouterLink class="text-white font-bold hover:text-orange-400 transition-colors" active-class="text-orange-500"
                        :to="{ name: 'inicio'}">Inicio</RouterLink>
                    <RouterLink class="text-white font-bold hover:text-orange-400 transition-colors" active-class="text-orange-500"
                        :to="{ name: 'favoritos'}">Favoritos</RouterLink>
                </nav>
            </div>

            <form v-if="paginaInicio" class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg"
                        for="ingrediente">
                        Nombre o Ingredientes
                    </label>
                    <input class="p-3 w-full rounded-lg focus:outline-none"
                        id="ingrediente" type="text" placeholder="Nombre o Ingrediente: ej. Tequila, Vodka, etc.">
                </div>

                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg"
                        for="caletegoria">
                        Categoría
                    </label>
                    <select class="p-3 w-full rounded-lg focus:outline-none"
                        id="caletegoria">
                        <option value="">-- Seleccione --</option>
                        <option v-for="categoria in bebidas.categorias" :key="categoria.strCategory" :value="categoria.strCategory">{{ categoria.strCategory }}</option>
                    </select>
                </div>

                <input class="bg-white w-full p-3 font-extrabold text-orange-400 uppercase rounded-lg hover:bg-orange-300 hover:text-white transition-colors cursor-pointer"
                    type="submit"
                    value="Buscar Recetas">
            </form>
        </div>
    </header>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useBebidasStore } from '../stores/bebidas';
    

    const route = useRoute();
    const bebidas = useBebidasStore();
    
    const paginaInicio = computed(() => route.name === 'inicio');
</script>

<style>
    .headerBGImage {
        background-image: url('/img/bg.jpg');
        background-size: cover;
        background-position: center;
    }
</style>