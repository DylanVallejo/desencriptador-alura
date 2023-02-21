


// Título de su sitio web
// Campo para el texto que va a ser encriptado/desencriptado
// Un botón para encriptar
// Un botón para desencriptar
// Área para mostrar el texto encriptado/desencriptado.
// Un rodapie con los datos de la persona que desarrolló el sitio web!


let inputArea  =  document.querySelector('.textAreaContainer');
let texto = document.getElementsByClassName('.valorIngresado');

inputArea.addEventListener('input', updateValue);
function updateValue(event) {
    console.log(texto)
    texto =  event.target.value;
}

document.querySelector('.btnEncriptar').addEventListener
('click', function (){
    
    
    if(texto.length === 0 ){
        document.querySelector('.valorIngresado').innerHTML = "No has ingresado un texto para encriptar"
    }else{
        
        document.querySelector('.valorIngresado').innerHTML = texto
    }
})




// Description
// ¡Bienvenidos y Bienvenidas a nuestro primer desafío!

// Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
// Extras:
// - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

// Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

// La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
// En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
// En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
// Por fin, en la columna Concluido estarán los elementos ya concluidos.
// El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

// Buen proyecto!