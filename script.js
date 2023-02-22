


let inputArea  =  document.querySelector('.textAreaContainer');
let texto = document.getElementsByClassName('.valorIngresado');


// creando un evento listener para catualizar el valor cada que se modifica
inputArea.addEventListener('input', updateValue);
function updateValue(event) {
    //texto alamcenara el valor del input 
    texto =  event.target.value;
}


//la funcion cifrar reemplazara los elementos iterando con un for loop 
function cifrar(texto){

    //creo mis variables para los objetos a encriptar y desencriptar
    let codedValues =  {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }
    let valoreDesencriptados = {
        
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
        
    }
    
    //creo una variable nueva para manipular el array de strings creado por el metodo split
    let newString  = texto.split("");
    //itero el array y condiciono para las vocales que requiero cambiar 

    let error = ""

    // - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
    
    for(let i= 0; i < newString.length; i++){
        
    // /[^\u0000-\u007F]/.test(newString[i])  define the regex in this case fot upper case and use the method test 
    // this return a boolean if includes accents in the text
        if(newString[i] === newString[i].toUpperCase() && newString[i] !== " " || /[^\u0000-\u007F]/.test(newString[i])  ){
            error = "El texto ingresado no debe contener mayusculas o caracteres especiales" ;
        }else {
            if(newString[i].includes("a")){
                newString[i] = codedValues.a
            }else if(newString[i].includes("e")){
                newString[i] = codedValues.e
            }else if(newString[i].includes("e")){
                newString[i] = codedValues.i
            }else if(newString[i].includes("o")){
                newString[i] = codedValues.i
            }
            else if(newString[i].includes("u")){
                newString[i] = codedValues.u
            }
        }
    }
    return error !== "" ?  error : newString.join("");
    
}

document.querySelector('.btnEncriptar').addEventListener
('click', async function (){
    
    if(texto.length === 0 ){
        document.querySelector('.valorIngresado').innerHTML = "No has ingresado un texto para encriptar"
    }else{
        const cifrado = await cifrar(texto);
        console.log(cifrado)
        
        document.querySelector('.valorIngresado').innerHTML = cifrado   
    }
})

document.querySelector('.btnDesencriptar').addEventListener
('click', async function (){
    
    if(texto.length === 0 ){
        document.querySelector('.valorIngresado').innerHTML = "No has ingresado un texto para encriptar"
    }else{
        const cifrado = await cifrar(texto);        
        document.querySelector('.valorIngresado').innerHTML = cifrado   
    }
})






// Extras:
// - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
