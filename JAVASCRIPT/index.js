function inicializar(){
console.log("onload activado");
new Menu([
    { url:"index.html", etiqueta: "HOME"},
    { url:"login.html", etiqueta: "LOGIN"},
    { url:"registro.html", etiqueta: "REGISTRO"}
]).render();

new User([
    {Nombre:"Carlos",
    Edad: 19,
    Profesion: "educador"
    },
    {Nombre:"Maria",
    Edad: 19,
    Profesion: "médico"
    },
    {Nombre:"Juan",
    Edad: 19,
    Profesion: "arquitecto"
    }
]).render();


};

function Menu(links){
    //propiedad
    this.links = links;
    //metodos
    this.render = () =>{
        const divMenu = document.getElementById("menu");
        for(const item of this.links){
            divMenu.innerHTML += 
            `<a href='${item.url}'>${item.etiqueta}</a>`;
        }
    }
};

function User(profesionales){
    this.profesionales = profesionales;

    this.render = () =>{
        const divUsuarios = document.getElementById("usuarios");
        divUsuarios.innerHTML = "<ul>";
        for(const item of this.profesionales){
            divUsuarios.innerHTML += `<li>${item.Nombre} ${item.Profesion}</li>`
        }
        divUsuarios.innerHTML += "</ul>";
    };
}




