/*  Guardar en el localStorage. Recibe la lista y el elem a guardar. */
export const GuardarStorage = (lista, elem) => {

    /* Conseguir los datos de localStorage */
    let elementos = JSON.parse(localStorage.getItem(lista)); /* JSON.parse Convierte JSON a objeto */

    /* Si elementos no es un array, lo creo. */
    if(!Array.isArray(elementos)){
        elementos = [];
    }

    /* Añado al array el elemento nuevo */
    elementos.push(elem);

    /* Guardo en localStorage el array modificado */
    localStorage.setItem(lista, JSON.stringify(elementos));

    /* OPCIONAL: Devolver objeto */
    return elem;
}