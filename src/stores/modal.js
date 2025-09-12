import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFavoritosStore } from "./favoritos";
import { useBebidasStore } from "./bebidas";

export const useModalStore = defineStore('modal', ()=>{
    const isModalOpen = ref(false);
    const favoritosStore = useFavoritosStore();
    const bebidasStore = useBebidasStore();

    const textoBoton= computed(() => {
        return favoritosStore.existeFavorito(bebidasStore.receta.idDrink) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos';
    });

    function toggleModal(){
        isModalOpen.value = !isModalOpen.value;
    }

    return {
        isModalOpen,
        toggleModal,
        textoBoton,
    }
});