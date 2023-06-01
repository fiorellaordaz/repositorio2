    let numUsuarios = 30;
function Init(numeroPaginas = 0){
    console.log("En funcionamiento");

    let http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let pet = JSON.parse(this.responseText);
            console.log(pet);
            new Grafico(pet.data).render();
            new Paginas(pet).render();
        }
    };

    let url = `https://dummyapi.io/data/v1/post?limit=${numUsuarios}&page=${numeroPaginas}`;
    http.open("GET", url, true);
    http.setRequestHeader("app-id", "64776f75ffbfef6cb221175a");
    http.send();
};

function Grafico (pet){
    this.pet = pet;

    this.render= function(){
    const idPet = document.getElementById("pet");
        
        let html = "";
        for(const item of this.pet){
            html += `<li>
            <img src="${item.owner.picture}" width="100">
            <p>Fecha de publicación:${item.publishDate}</p>
            <img src="${item.image}" width="100">
            <p>Fecha de publicación:${item.likes}</p>
            <p>:${item.text}</p>
            <p>Likes:${item.likes}</p>
            </li>`
            for(const tag of item.tags){
            html += `<a href="ejerciciopost2.html?tags=${tag}">${tag}</a>`
        }
        html += "</ul>"
        idPet.innerHTML = html;
        };
    };
};
        function Paginas (pet){
            this.pet = pet;
            const piePaginas = document.getElementById("pie");
            this.render = () => {
                piePaginas.innerHTML = "";
                    for(let i = 1; i < this.pet.total/numUsuarios; i++){
                        piePaginas.innerHTML += `<a href="#" onclick="Init(${i})"> ${i} </a>`;
                }
            }
        };
        
        function tags(){
    let usertag = new URLSearchParams(window.location.search).get("tags");
    const divLabel = document.getElementById("label")
    let http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let pet = JSON.parse(this.responseText);
            console.log(pet);
        } 
    }
};












