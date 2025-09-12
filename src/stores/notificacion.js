import { ref } from "vue";
import { defineStore } from "pinia";

export const useNotificacionStore = defineStore('notificacion', ()=>{
    const texto = ref('');
    const show = ref(false);
    const error = ref(false);

    const setShowFalse = () => {
        show.value = false;
    }

    return {
        texto,
        show,
        error,
        setShowFalse
    };
});