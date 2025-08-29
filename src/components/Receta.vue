<template>
    <div class="border shadow-lg">
        <div class="overflow-hidden">
            <img class="hover:scale-105 transition-all hover:rotate-1"
            :src="receta.strDrinkThumb" :alt="`Imagen de ${receta.strDrink}`">
        </div>
        
        <div class="p-5">
            <h2 class="text-2xl truncate font-bold">{{ receta.strDrink }}</h2>
            <button class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                type="button">
                Ver Receta
            </button>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        receta: {
            type: Object,
            required: true
        }
    })
</script>