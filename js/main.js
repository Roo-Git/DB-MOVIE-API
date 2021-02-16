// https://api.themoviedb.org/3/search/movie?api_key=bb78e4cf3442e302d928f2c5edcdbee1&query=Mad //


// Seleccionar Elementos del DOM

const inputElement = document.querySelector("#inputValue");
const searchMovie = document.querySelector("#searchMovie");

// Recursos API

let key = ("bb78e4cf3442e302d928f2c5edcdbee1");

let url = "https://api.themoviedb.org/3/search/movie?api_key=bb78e4cf3442e302d928f2c5edcdbee1"    // SEARCH A MOVIE

let recurso = "search";

let criterio = "movie";


// Funciones


// Funciones para clickar en el boton y obtener su valor:

searchMovie.onclick = function(event) {
    // .preventDefault: Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    event.preventDefault();
    console.log("The Search a Movie Button has been clicked!!!")

    // Obtengo el valor de inputElement
    const value = inputElement.value;
    console.log("Value: ", value);

    const newUrl = url + "&query=" + value;
    
    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log("Data: ", data)
        })
        .catch((error) => {
            console.log("Error", error)
        });
};