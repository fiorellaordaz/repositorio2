function inicializar(){
    console.log("onload activado");
    new Menu([
        { url:"index.html", etiqueta: "HOME"},
        { url:"login.html", etiqueta: "LOGIN"},
        { url:"registro.html", etiqueta: "REGISTRO"}
    ]).render();

    const entrada = new Login();
    entrada.render();
    
    
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

    function Login(){
        this.render = () => {
        const divEntrada = document.getElementById("entrada");
        divEntrada.innerHTML =  ` <div>
        <input type="name" id="nombre" placeholder="Nombre"/><br>
        <input type="email" id="email" placeholder="Email"/><br>
        <input type="name" id="contra" placeholder="password"/><br><div id="error"></div>
        <button tupe="submit" id="btn" >Entrar</button><br>
    </div>`
    const divBtn = document.getElementById("btn");
    divBtn.addEventListener("click",this.Ingreso);
    }

    this.Ingreso= () => {
        const divNombre = document.getElementById("nombre");
        const divEmail = document.getElementById("email").value;
        const divContra = document.getElementById("contra").value;
        const divError = document.getElementById("error");
        divError.style.color = "red";
        const local = window.localStorage;
        let base = JSON.parse(local.getItem("usuarios")) || [];
        

        for(let i = 0; i < base.length; i++){
            const email = base[i].email;
            const password = base[i].password;

            if(email === divEmail && password === divContra){
            window.location.href="index.html";
        }else {
            divError.innerHTML = "Usuario incorrecto"
            }
        }
        };
    };



    
    