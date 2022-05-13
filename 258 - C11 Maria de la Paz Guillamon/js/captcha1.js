let n1 = Math.floor((Math.random()*100000)+1);
let randomCaptcha = n1;
console.log(randomCaptcha);

document.querySelector("#leeCaptcha").innerHTML = randomCaptcha;
let btn = document.querySelector("#btnEnviar");
btn.addEventListener("click", validarCaptcha);

function validarCaptcha(e) {
    e.preventDefault();
    let ingresoCaptcha = document.querySelector("#escribeCaptcha");
    let valorCaptcha = ingresoCaptcha.value; 
    console.log(ingresoCaptcha.value);
    let mensaje = document.querySelector("#validacion");
    if (valorCaptcha == randomCaptcha){
        mensaje.innerHTML = "Su solicitud ha sido enviada";
    return;
    }
    else {
        mensaje.innerHTML = "Error";
    return;
    }
}
