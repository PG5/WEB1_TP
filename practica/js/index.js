

let nodo = document.querySelector("#saludo");

function saludoPersonalizado(){
    let nombre = prompt("Hola, cual es tu nombre");
    console.log("Hola " + nombre);
    nodo.innerHTML = "Hola " + nombre;
};

