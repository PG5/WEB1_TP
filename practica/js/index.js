

let nodo = document.querySelector("#saludo");
let contador = 0;

function saludoPersonalizado(){
    let nombre = prompt("Hola, cual es tu nombre");
    console.log("Hola " + nombre);
    nodo.innerHTML = "Hola " + nombre;
};

function contarClicks(){
    contador = contador + 1;
    document.querySelector("#numero").innerHTML = contador;
}