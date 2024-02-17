/*para ocultar el boton copiar que se codifico en index.html, entre parentesis se agrega el ID de HTML */
var boton = document.getElementById('boton-copiar');
boton.hidden = true;  
/************************************************************ */ 

/*para ocultar input de salida que se codifico en index.html, entre parentesis se agrega el ID de HTML */
var mensajesal = document.getElementById('mensaje-salida');
mensajesal.hidden = true;  
/************************************************************ */ 

function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else 
        if(texto==vacio) {
           alert("Ingrese un mensaje para Encriptar");
           return true;
   }    else {

        /*para desocultar input de salida que se codifico en index.html, entre parentesis se agrega el ID de HTML */
        var titulosfijos = document.getElementById('titulos-fijos');
        titulosfijos.hidden = true;              
        /************************************************************ */ 

        /*para desocultar el boton copiar que se codifico en index.html, entre parentesis se agrega el ID de HTML */
        var boton = document.getElementById('boton-copiar');
        boton.hidden = false; 
        /***************************************************************/

        /*para desocultar input de salida que se codifico en index.html, entre parentesis se agrega el ID de HTML */
        var mensajesal = document.getElementById('mensaje-salida');
        mensajesal.hidden = false;              
        /************************************************************ */ 
        return false;
    }
}


function encriptartext() {
    
    let textoEncriptar = (document.querySelector('#input-texto-ent').value);
    let textoIngresado = textoEncriptar;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#mensaje-salida");
        resultado.value = Encriptado;       
    }
               
}


const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}


function copiar() {      
    let Copiado = document.querySelector("#mensaje-salida").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto-ent").value="";

}

 function desencriptartext() {
    let textoIngresado = document.querySelector("#input-texto-ent").value;

    if (validarTexto (textoIngresado) == false) {  
        let Desencriptado = desencriptar(textoIngresado);
        let resultado = document.querySelector("#mensaje-salida");
        resultado.value = Desencriptado;
    }
}


function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}
