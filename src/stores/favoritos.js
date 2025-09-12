import { ref, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { useModalStore } from "./modal";

export const useFavoritosStore = defineStore('favoritos', ()=>{
    const favoritos = ref([]);
    const bebidasStore = useBebidasStore();
    const modalStore = useModalStore();

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
        }else{
            favoritos.value.push(bebidasStore.receta);
        }
        modalStore.toggleModal();
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