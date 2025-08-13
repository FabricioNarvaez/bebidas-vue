<template>
    <header>
        <div class="mx-auto container px-5 py-4">
            <div>
            </div>

            <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg"
                        for="ingrediente">
                        Nombre o Ingredientes
                    </label>
                    <input class="p-3 w-full rounded-lg focus:outline-none"
                        id="ingrediente" type="text" placeholder="Nombre o Ingrediente: ej. Tequila, Vodka, etc.">
                </div>

                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg"
                        for="caletegoria">
                        Categoría
                    </label>
                    <select class="p-3 w-full rounded-lg focus:outline-none"
                        id="caletegoria">
                        <option value="">-- Seleccione --</option>
                    </select>
                </div>

                <input class="bg-white w-full p-3 font-extrabold text-orange-400 uppercase rounded-lg hover:bg-orange-300 hover:text-white transition-colors cursor-pointer"
                    type="submit"
                    value="Buscar Recetas">
            </form>
        </div>
    </header>
</template>