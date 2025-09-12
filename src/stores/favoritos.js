import { ref, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";

export const useFavoritosStore = defineStore('favoritos', ()=>{
    const favoritos = ref([]);
    const bebidasStore = useBebidasStore();

    watch(favoritos, ()=>{
        sincronizarLocalStorage();
    }, {deep: true});

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    });

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    };

    const handleFavorito = () => {
        const existeFavorito = favoritos.value.some(fav => fav.idDrink === bebidasStore.receta.idDrink);
        if(existeFavorito){
            favoritos.value = favoritos.value.filter(fav => fav.idDrink !== bebidasStore.receta.idDrink);
            return;
        };
        favoritos.value.push(bebidasStore.receta);
    };

    const existeFavorito = (id) => {
        return favoritos.value.some(fav => fav.idDrink === id);
    }

    return {
        handleFavorito,
        existeFavorito,
        favoritos,
    }
});