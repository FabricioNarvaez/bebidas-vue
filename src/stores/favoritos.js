import { ref, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";

export const useFavoritosStore = defineStore('favoritos', ()=>{
    const favoritos = ref([]);
    const bebidasStore = useBebidasStore();

    watch(favoritos, ()=>{
        sincronizarLocalStorage();
    }, {deep: true});

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    };

    const handleFavorito = () => {
        if(favoritos.value.some(fav => fav.idDrink === bebidasStore.receta.idDrink)) return;
        favoritos.value.push(bebidasStore.receta);
    };

    return {
        handleFavorito
    }
});