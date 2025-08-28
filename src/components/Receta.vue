<template>
    <div>
        <h2>{{ receta.strDrink }}</h2>
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