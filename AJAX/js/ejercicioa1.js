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
        divListado.innerHTML += "<li><a href='ejercicicoa2.html?id=" + item.id + "'>" + "<img width='130' height='90'" + "src='" + item.picture +"'/></a>'" + item.title +","+ item.firstName + ", "+ item.lastName + "</li>";
    }

    divConteo.innerHTML="";
    for(let i = 1; i <= usuarios.total/numUser; i++){
        divConteo.innerHTML += `<a href="#" onclick="inicializar(${i})">${i}</a>`
    }
};

function error(textoError){
    const divListado = document.getElementById("listado");
        divListado.innerHTML = textoError;
};

function init(){
    
    let http = new XMLHttpRequest();
    const idUsuario = new URLSearchParams(window.location.search).get("id");
    const divDespliegue = document.getElementById("despliegue");
    

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let usuario = JSON.parse(this.responseText);
            console.log(usuario);
    
    divDespliegue.innerHTML = `<p>
        <img src="${usuario.picture}">
    </p>
    <p>
    <b>ID:</b> ${usuario.id}<br/>
    <b>${usuario.title}. ${usuario.firstName} ${usuario.lastName}</b><br/>
    <b>Gender:</b> ${usuario.gender}<br/>
    <b>Date of Birth:</b> ${usuario.dateOfBirth}<br/>
    <b>Register Date:</b> ${usuario.registerDate}<br/>
</p>
<p>
    <b>Email:</b> ${usuario.email}<br/>
    <b>Phone:</b> ${usuario.phone}</br>
</p>
<p>
    <b>Address</b></br>
    <b>State:</b> ${usuario.location.state}<br/>
    <b>Street:</b> ${usuario.location.street}<br/>
    <b>City:</b> ${usuario.location.city}</br>
    <b>Country:</b> ${usuario.location.country}<br/>
    <b>Timezone:</b> ${usuario.location.timezone}<br/>
</p>`
}
};
        http.open("GET", `https://dummyapi.io/data/v1/user/${idUsuario}`,true);
        http.setRequestHeader("app-id","6473b103c2086a18c9d4914a");  
        http.send();       
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

