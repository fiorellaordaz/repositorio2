// const usersNumberPage = 10; // Número de usuarios por página
// let currentPage = 1; // Página actual que se está visualizando
// function Inicializar() {
//     console.log("Inicializar");
//     const http = new XMLHttpRequest; // Objeto para realizar la solicitud HTTP
//     http.onreadystatechange = function(){
//         console.log(this.readyState);
//         if (this.readyState === 4 && this.status === 200) { // La solicitud ha sido completada y la respuesta es exitosa
//             console.log(this.responseText);
//             const entradas = JSON.parse(this.responseText); // Parsea la respuesta JSON en un objeto JavaScript
//             const totalUsers = entradas.total; // Total de usuarios disponibles
//             const totalPages = Math.ceil(totalUsers / usersNumberPage); // Cálculo del total de páginas
//             new ListaEntradas(entradas.data).render(); // Renderiza la lista de entradas en el DOM
//             pageControls(totalPages); // Genera los controles de paginación
//         }
//     }
//     const page = currentPage -1; // Página a solicitar los datos
//     http.open("GET", `https://dummyapi.io/data/v1/user?limit=${usersNumberPage}&page=${page}`); // URL de la API para obtener los usuarios
//     http.setRequestHeader("app-id", "6470cdfdb1bb3841bdd9c82f"); // Establece el encabezado "app-id"
//     http.send(); // Envía la solicitud HTTP
// }
// function ListaEntradas(entradas) {
//     this.render = function() {
//         let Datos = document.getElementById("postman"); // Elemento del DOM donde se mostrarán las entradas
//         Datos.innerHTML = "<ul>";
//         for (let item of entradas) {
//             Datos.innerHTML += `<li><img src="${item.picture}">, ${item.title}, ${item.firstName}, ${item.lastName}</li> <button onclick="showUserDetails('${item.id}', '${item.picture}', '${item.title}', '${item.firstName}', '${item.lastName}')"
//             >Ver detalles</button>
//           <br/>`;
//         }
//         Datos.innerHTML += "</ul>";
//     }
// }
// function pageControls(totalPages) {
//     const numPage = document.getElementById("paginas"); // Elemento del DOM donde se mostrarán los controles de paginación
//     numPage.innerHTML = "";
//     for (let i = 1; i <= totalPages; i++) {
//         const pageButton = document.createElement("button"); // Crea un elemento de botón para representar cada página
//         pageButton.textContent = i; // Asigna el número de página como texto del botón
//         if (i === currentPage) {
//             pageButton.style.backgroundColor = "grey"; // Resalta el botón de la página actual
//         }
//         pageButton.addEventListener("click", () => goToPage(i)); // Asigna un evento de clic para ir a la página correspondiente
//         numPage.appendChild(pageButton); // Agrega el botón al contenedor de los controles de paginación
//     }
// }
// function goToPage(page) {
//     currentPage = page; // Actualiza la página actual
//     Inicializar(); // Vuelve a inicializar la aplicación con la página actualizada
// }
// function showUserDetails(id, picture, title, firstName, lastName) {
//     window.location.href = `usersDetails.html?id=${id}&picture=${picture}&title=${title}&firstname=${firstName}&lastname=${lastName}`;
//     // Redirige a una página de detalles de usuario con los parámetros en la URL
// }
// function openUsersDetails() {
//     const urlParams = new URLSearchParams(window.location.search); // Obtiene los parámetros de la URL
//     const userId = urlParams.get('id'); // Obtiene el valor del parámetro 'id'
//     const userPicture = urlParams.get('picture'); // Obtiene el valor del parámetro 'picture'
//     const userTitle = urlParams.get('title'); // Obtiene el valor del parámetro 'title'
//     const userFirstName = urlParams.get('firstName'); // Obtiene el valor del parámetro 'firstName'
//     const userLastName = urlParams.get('lastName'); // Obtiene el valor del parámetro 'lastName'
//     const details = document.getElementById("details"); // Elemento del DOM donde se mostrarán los detalles del usuario
//     details.innerHTML = "";
//     details.innerHTML += `<img src="${userPicture}"></br>`; // Muestra la imagen del usuario en el elemento 'details'
// }

// Reaccionar

// Responder







