const numUser = 10;

function inicializar (numeroPagina){
    console.log("esta en funcionamiento");

    let numUsuarios = 10;
    let p;
    const http = new XMLHttpRequest; // objeto para realizar la solicitud htpp 
    
    http.onreadystatechange = function(){
       let state = this. readyState;
       let status = this.status;
       let response = this.responseText;

        p = new Promise (function(resolve,reject){
            if(state == 4 && status == 200){ // verificar que la solicirud es exitosa
                resolve(response);
            }else if(state == 4){  // esto nos funciona como doble verificacion.
                reject("Error: ");
            }
        });

        p.then(response => ListaEntradas(response)).catch(error);
        }
    
        http.open("GET", `https://dummyapi.io/data/v1/user?limit=${numUsuarios}&page=${numeroPagina-1}`,true); // pedir a la appi la info.
        http.setRequestHeader("app-id","6473b103c2086a18c9d4914a"); // establecer la conexion 
        http.send(); //envia la solicitud 

};

function ListaEntradas(responseText){
    console.log(responseText);
    let usuarios = JSON.parse(responseText);
    const divListado = document.getElementById("listado");
    const divConteo = document.getElementById("conteo-paginas");
    

    divListado.innerHTML = '<li><h4>Foto, Título, Nombre, Apellidos</h4></li>';
    for(const item of usuarios.data){
        divListado.innerHTML += "<li><a href='ejercicioa2.html?id=" + item.id + "'>" + "<img width='130' height='90'" + "src='" + item.picture +"'/></a>'" + item.title +","+ item.firstName + ", "+ item.lastName + "</li>";
    }
};

function error(textoError){
    const divListado = document.getElementById("listado");
        divListado.innerHTML = textoError;
};

function init(){
    const idUsuario = new URLSearchParams(window.location.search).get("id");
    const divDespliegue = document.getElementById("despliegue");
    let http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let usuario = JSON.parse(this.responseText);
            console.log(usuario);
        }
    }
};





































// function init(numeroPagina){
//     let numUsuarios = 10;
//     let p;
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = () =>{
//         let state = this.readyState;
//         let status = this.status;
//         let response = this.responseText;

//         p = new Promise (function (resolve,reject){
//             if(state === 4 && status === 200){
//                 resolve(response);
//             }else if(state === 4){
//                 reject("error : ");
//             }
//         });
//         p.then(formarLista).catch(error);
//     }

//     let url = `https://dummyapi.io/data/v1/user?limit=${numUsuarios}&page=${numeroPagina-1}`;
//     xhttp.open("GET",url,true);
//     xhttp.setRequestHeader("app-id","6473766f7bc1f21bf6f12bde");
//     xhttp.send();

// }

// function Lista(){
//     this.render = ()=>{
//         const idListado = document.getElementById("listado");
//     }
// }

