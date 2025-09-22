import { ref } from "vue";
import { defineStore } from "pinia";
import iaService from "../services/iaService";

export const useIaStore = defineStore("ia", () =>{
    const prompt = ref("");
    const respuesta = ref("");

    async function generarReceta() {
        const resultado = await iaService.generarReceta(prompt.value);

        for await (const fragmento of resultado) {
            respuesta.value += fragmento;
        }
    }

    return {
        prompt,
        respuesta,
        generarReceta
    }
});