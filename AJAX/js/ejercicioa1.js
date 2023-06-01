const numUser = 10;

function inicializar (numeroPagina){
    console.log("esta en funcionamiento");

    let numUser = 10;
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
    
        http.open("GET", `https://dummyapi.io/data/v1/user?limit=${numUser}&page=${numeroPagina}`,true); // pedir a la appi la info.
        http.setRequestHeader("app-id","64776f75ffbfef6cb221175a"); // establecer la conexion 
        http.send(); //envia la solicitud 

};

function ListaEntradas(responseText){
    console.log(responseText);
    let usuarios = JSON.parse(responseText);
    const divListado = document.getElementById("listado");  
    let divConteo = document.getElementById("user");

    divListado.innerHTML = "";
    for(const item of usuarios.data){
        divListado.innerHTML += `<li><a href="ejercicicoa2.html?id=${item.id}"><img src="${item.picture}" width="100"></a> ${item.title} ${item.firstName} ${item.lastName}</li>`;
    }
    divListado.innerHTML += "</ul>";

    divConteo.innerHTML="";
    for(let i = 1; i <= usuarios.total/numUser; i++){
        divConteo.innerHTML += `<a href="#" onclick="inicializar(${i})">${i}</a>`
    }
};

function error(textoError){
    const divListado = document.getElementById("listado");
        divListado.innerHTML = textoError;
};

function usuario(){
    
    let userId = new URLSearchParams(window.location.search).get("id");
    let userDiv = document.getElementById("user");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let usuarios = JSON.parse(this.responseText);

        userDiv.innerHTML = 
        `<img src="${usuarios.picture}" width="200"/> <br/>
        <b>ID</b> ${usuarios.id} <br/>
        <b>Title:</b> ${usuarios.title}<br/>
        <b>First Name:</b> ${usuarios.firstName} <br/>
        <b>Last Name:</b> ${usuarios.lastName} <br/>
        <b>Gender: </b> ${usuarios.gender} <br/>
        <b>Email:</b> ${usuarios.email} <br/>
        <b>Date of Birth:</b> ${usuarios.dateOfBirth} <br/>
        <b>Phone:</b> ${usuarios.phone} <br/>
        <b>Location:</b><br/>
        <b>City:</b> ${usuarios.location.city} <br/>
        <b>Street:</b> ${usuarios.location.street} <br/>
        <b>Counrty:</b> ${usuarios.location.country} <br/>
        <b>State:</b> ${usuarios.location.state} <br/>
        <b>Register Date:</b> ${usuarios.registerDate} <br/>
        <b>Time Zone:</b> ${usuarios.location.timezone} <br/>
        <b>Update Date:</b> ${usuarios.updatedDate}`
    }
    };
    let url = `https://dummyapi.io/data/v1/user/${userId}`;
    xhr.open("GET", url, true);
    xhr.setRequestHeader("app-id", "64762ccc042da10aab777784");
    xhr.send();
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

