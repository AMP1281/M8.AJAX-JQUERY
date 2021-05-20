
var contenido = document.querySelector("#texto")

contenedor.addEventListener("click", function (e){
    if (e.target.id == "button1" || e.target.id == "button2"){
        fetch("http://api.icndb.com/jokes/random")
        .then (res=>res.json())
        .then(data=>{
            contenido.innerHTML =`
            ${data.value["joke"]}
            `
            })
        }
    });



