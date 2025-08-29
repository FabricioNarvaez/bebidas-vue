<template>
    <Header/>
    <main class="container mx-auto mt-10">
        <RouterView />
    </main>
</template>

<script setup>
    import Header from './components/Header.vue';
</script>