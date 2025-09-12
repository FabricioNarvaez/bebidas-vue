import { ref, watch, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { useModalStore } from "./modal";
import { useNotificacionStore } from "./notificacion";

export const useFavoritosStore = defineStore('favoritos', ()=>{
    const favoritos = ref([]);
    const bebidasStore = useBebidasStore();
    const modalStore = useModalStore();
    const notificacionStore = useNotificacionStore();

    watch(favoritos, ()=>{
        sincronizarLocalStorage();
    }, {deep: true});

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    });

    const isFavoritosVacio = computed(() => favoritos.value.length === 0);

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    };

    const handleFavorito = () => {
        const existeFavorito = favoritos.value.some(fav => fav.idDrink === bebidasStore.receta.idDrink);
        notificacionStore.show = true;
        if(existeFavorito){
            favoritos.value = favoritos.value.filter(fav => fav.idDrink !== bebidasStore.receta.idDrink);
            notificacionStore.texto = 'Eliminado de favoritos';
            notificacionStore.error = true;
        }else{
            favoritos.value.push(bebidasStore.receta);
            notificacionStore.texto = 'Agregado a favoritos';
            notificacionStore.error = false;
        }
        modalStore.toggleModal();
    };

    const existeFavorito = (id) => {
        return favoritos.value.some(fav => fav.idDrink === id);
    }

    return {
        handleFavorito,
        existeFavorito,
        isFavoritosVacio,
        favoritos,
    }
});