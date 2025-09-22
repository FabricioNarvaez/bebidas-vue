import { ref } from "vue";
import { defineStore } from "pinia";
import iaService from "../services/iaService";

export const useIaStore = defineStore("ia", () =>{
    const prompt = ref("");
    const respuesta = ref("");
    const escribiendo = ref(false);

    async function generarReceta() {
        escribiendo.value = true;
        respuesta.value = "";
        const resultado = await iaService.generarReceta(prompt.value);

        for await (const fragmento of resultado) {
            respuesta.value += fragmento;
        }
        escribiendo.value = false;
    }

    return {
        prompt,
        respuesta,
        escribiendo,
        generarReceta
    }
});