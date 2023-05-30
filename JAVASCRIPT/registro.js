function inicializar(){
    console.log("onload activado");
    new Menu([
        { url:"index.html", etiqueta: "HOME"},
        { url:"login.html", etiqueta: "LOGIN"},
        { url:"registro.html", etiqueta: "REGISTRO"}
    ]).render();

    const x = new Registro();
    x.render();
    
    
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

    function Registro(){
        this.render = function () { 
            const divMenu = document.getElementById("registro");
            divMenu.innerHTML =  ` <div>
            <input type="username" id="usuario" placeholder="Nombre de Usuario"/><br><div id="error"></div>
            <input type="email" id="email" placeholder="Email"/><br>
            <input type="name" id="contra" placeholder="password"/><br><div id="error"></div>
            <input type="name" id="contra2" placeholder="password"/><br>
            <button tupe="submit" id="btn" >Entrar</button><br>
        </div>`
        const divBtn = document.getElementById("btn");
        divBtn.addEventListener("click",this.Register);

        }

        this.Register= () =>{
            const divUser = document.getElementById("usuario");
            const divEmail = document.getElementById("email").value;
            const divContra = document.getElementById("contra").value;
            const divContra2 = document.getElementById("contra2").value;
            const divError = document.getElementById("error");
            divError.style.color= "red";
            const local = window.localStorage;
            let base = JSON.parse(local.getItem("usuarios")) || [];
            let existe = false;
            for(let i = 0;i < base.length; i++){
                if(base[i].email === divEmail){
                    existe = true;
                }
            };
            if(divContra !== "" && divContra === divContra2 && existe === false){
                base.push({email:divEmail,password:divContra});
                local.setItem("usuarios",JSON.stringify(base));
                window.location.href="index.html"
            }else{
                divError.innerHTML= "Datos Incorrectos"
            }
        };
    }
    