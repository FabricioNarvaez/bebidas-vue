<template>
    <TransitionRoot as="template" :show="modalStore.isModalOpen">
        <Dialog as="div" class="relative z-10" @close="modalStore.toggleModal()">
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
            </TransitionChild>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                    class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                >
                    <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
                        >
                            <div>
                                <div class="mt-3">
                                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-bold my-5">
                                        {{ bebidasStore.receta.strDrink }}
                                    </DialogTitle>

                                    <img class="w-96 lg:w-1/2 mx-auto rounded-lg"
                                    :src="bebidasStore.receta.strDrinkThumb" :alt="`Imagen de ${bebidasStore.receta.strDrink}`" />
                                
                                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-bold my-5">
                                        Ingredientes y cantidades
                                    </DialogTitle>

                                    <div class="text-gray-500" v-html="formatearIngredientes()"></div>

                                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-bold my-5">
                                        Instrucciones
                                    </DialogTitle>

                                    <p class="text-lg text-gray-500">{{ bebidasStore.receta.strInstructionsES || bebidasStore.receta.strInstructions }}</p>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                                <button class="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                                    @click="modalStore.toggleModal()" type="button">
                                    Cerrar
                                </button>
                                <button class="w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500"
                                    @click="favoritosStore.handleFavorito" type="button">
                                    Agregar a Favoritos
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue";
    import { useModalStore } from "../stores/modal";
    import { useBebidasStore } from "../stores/bebidas";
    import { useFavoritosStore } from "../stores/favoritos";

    const bebidasStore = useBebidasStore();
    const modalStore = useModalStore();
    const favoritosStore = useFavoritosStore();

    const formatearIngredientes = () =>{
        const ingredientesDiv = document.createElement('div');
        for(let i = 1; i <= 15; i++){
            if(bebidasStore.receta[`strIngredient${i}`]){
                const ingrediente = bebidasStore.receta[`strIngredient${i}`];
                const cantidad = bebidasStore.receta[`strMeasure${i}`];

                const ingredienteCantidad = document.createElement('p');
                ingredienteCantidad.classList.add('text-lg');
                ingredienteCantidad.textContent = `${ingrediente} - ${cantidad ?? ''}`;

                ingredientesDiv.appendChild(ingredienteCantidad);
            }else{
                break;
            }
        }

        return ingredientesDiv.innerHTML;
    }
</script>
