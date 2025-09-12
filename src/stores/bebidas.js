import { ref, reactive, onMounted, computed } from "vue";
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
    const receta = ref({});

    const modalStore = useModalStore();

    onMounted( async () => {
        const {data: { drinks }} = await APIService.obtenerCategorias();
        categorias.value = drinks;
    })

    const isRecetasVacio = computed(() => recetas.value.length === 0);

    async function obtenerRecetas () {
        const {data: { drinks }} = await APIService.obtenerRecetas(busqueda);
        recetas.value = drinks;
    }

    async function seleccionarBebida(id){
        const {data: { drinks }} = await APIService.obtenerRecetaId(id);
        modalStore.toggleModal();
        receta.value = drinks[0];
    }

    return {
        categorias,
        busqueda,
        recetas,
        receta,
        obtenerRecetas,
        seleccionarBebida,
        isRecetasVacio
    }
})