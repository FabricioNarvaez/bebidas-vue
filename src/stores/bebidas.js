import { ref, reactive, onMounted } from "vue";
import { defineStore } from "pinia";
import APIService from "../services/APIService";
import { useModalStore } from "./modal";

export const useBebidasStore = defineStore('bebidas', () =>{
    const categorias = ref([]);
    const busqueda = reactive({
        nombre: '', 
        categoria: ''
    });
    const recetas = ref([]);
    const modalStore = useModalStore();

    onMounted( async () => {
        const {data: { drinks }} = await APIService.obtenerCategorias();
        categorias.value = drinks;
    })

    async function obtenerRecetas () {
        const {data: { drinks }} = await APIService.obtenerRecetas(busqueda);
        recetas.value = drinks;
    }

    async function seleccionarBebida(id){
        const {data: { drinks }} = await APIService.obtenerRecetaId(id);
        modalStore.toggleModal();
        console.log(drinks[0]);
    }

    return {
        categorias,
        busqueda,
        recetas,
        obtenerRecetas,
        seleccionarBebida
    }
})