// Seleccionar Elementos del DOM

const inputElement = document.querySelector("#inputValue");
const searchMovie = document.querySelector("#searchMovie");



// Funciones


// Funciones para clickar en el boton y obtener su valor:

searchMovie.onclick = function(event) {
    // .preventDefault: Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    event.preventDefault();
    console.log("The Search a Movie Button has been clicked!!!")

    // Obtengo el valor de inputElement
    const value = inputElement.value;
    console.log("Value: ", value);         
};