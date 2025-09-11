import { ref } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";

export const useFavoritosStore = defineStore('favoritos', ()=>{
    const favoritos = ref([]);
    const bebidasStore = useBebidasStore();

    const handleFavorito = () => {
        if(favoritos.value.some(fav => fav.idDrink === bebidasStore.receta.idDrink)) return;
        favoritos.value.push(bebidasStore.receta);
        console.log(favoritos.value);
    };

    return {
        handleFavorito
    }
});