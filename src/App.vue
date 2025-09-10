<template>
    <Header/>
    <main class="container mx-auto mt-10">
        <RouterView />
    </main>
    <Modal/>
</template>

<script setup>
    import Header from './components/Header.vue';
    import Modal from './components/Modal.vue';
</script>