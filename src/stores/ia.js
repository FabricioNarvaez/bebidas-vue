import { ref } from "vue";
import { defineStore } from "pinia";

export const useIaStore = defineStore("ia", () =>{
    const prompt = ref("");
    const respuesta = ref("");

    async function generarReceta() {
        console.log("Generando receta con prompt:", prompt.value);
    }

    return {
        prompt,
        respuesta,
        generarReceta
    }
});