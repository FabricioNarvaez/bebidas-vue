import api from "../lib/axios";

export default {
    obtenerCategorias(){
        return api.get('/list.php?c=list');
    }, 
    obtenerRecetas(busqueda){
        return api.get(`/filter.php?c=${busqueda.categoria}&i=${busqueda.nombre}`);
    }
}