import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', ()=>{
    const isModalOpen = ref(false);

    function toggleModal(){
        isModalOpen.value = !isModalOpen.value;
    }

    return {
        isModalOpen,
        toggleModal
    }
});