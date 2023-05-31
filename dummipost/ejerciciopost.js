function Init (){
    let numUsuarios = 10;
    console.log("En funcionamiento");

    let http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let pet = JSON.parse(this.responseText);
            console.log(pet);
            new Grafico(pet.data).render();
        }
        
    };

    let url = `https://dummyapi.io/data/v1/post?limit=10`;
    http.open("GET", url, true);
    http.setRequestHeader("app-id", "64771f12099b14b7cc236c43");
    http.send();
};

// function Grafico (datos){
//     this.datos = datos;

//     this.render= function(){
//         const idPet = document.getElementById("pet");
//         let html = "";

//         for(const item of this.pet){
//             html += `<li>
//             ${item.owner.picture}
//             </li>`
//         };
//         idPet.innerHTML = html;
//     };
// }

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
            <p>${item.tags}</p>
            </li>`
        };
        
        idPet.innerHTML = html;
    };
};