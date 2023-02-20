

// const displayMessage = function(message) {
//     document.querySelector('.encriptar').textContent = message;
// }


let inputArea  =  document.querySelector('.textAreaContainer');
let texto = document.getElementsByClassName('.valorIngresado');

inputArea.addEventListener('input', updateValue);
function updateValue(event) {
    console.log(texto)
    texto =  event.target.value;
}

document.querySelector('.btnEncriptar').addEventListener
('click', function (){
    // console.log(texto)
    console.log(texto)
    document.querySelector('.valorIngresado').innerHTML = texto
    // const texto = document.querySelector('.btnEncriptar').textContent
    // console.log("hola" + texto)    
})