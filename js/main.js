// https://api.themoviedb.org/3/search/movie?api_key=bb78e4cf3442e302d928f2c5edcdbee1&query=Mad //


// Seleccionar Elementos del DOM

const inputElement = document.querySelector("#inputValue");
const searchMovie = document.querySelector("#searchMovie");
const searchID = document.querySelector("#searchID");

// Recursos API

let key = ("bb78e4cf3442e302d928f2c5edcdbee1");

let recurso = "search";

let criterio = "movie";

let base_url = `https://api.themoviedb.org/3/`    // URL BASE

let urlID = "https://api.themoviedb.org/3/movie/59305?api_key=bb78e4cf3442e302d928f2c5edcdbee1"  // SEARCH BY ID


// Funciones:


// Funcion Botón Search a Movie

searchMovie.onclick = function(event) {
    // .preventDefault: Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    event.preventDefault();
    console.log("The Search a Movie Button has been clicked!!!");

    // Obtengo el valor de inputElement
    const value = inputElement.value;
    let query = value;
    console.log("Value: ", value);


    const ulrSearchMovies = `${base_url}${recurso}/${criterio}?api_key=${key}&query=${query}`

    // ${base_url}${recurso}/${criterio}?api_key=${key}&query=${query} //
    
    fetch(ulrSearchMovies)
        .then((res) => res.json())
        .then((data) => {
            // data.results []
            console.log("Data: ", data.results);
        })
        .catch((error) => {
            console.log("Error", error);
        });
};

// Función Botón Search a Movie by ID

searchID.onclick = function(event) {
    event.preventDefault();
    console.log("The Search by ID Button has been clicked!!!");

    const valueID = inputElement.value
    let query = valueID;
    console.log("Value: ", valueID)

    const urlSearchID = `${base_url}${criterio}/${query}?api_key=${key}`  



    fetch(urlSearchID)
        .then((res) => res.json())
        .then((data) => {
            // data.results []
            console.log("Data: ", data)
        })
        .catch((error) => {
        console.log("Error", error)
    });
}