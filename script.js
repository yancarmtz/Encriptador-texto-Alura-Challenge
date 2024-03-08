/*para ocultar el boton copiar que se codifico en index.html, entre parentesis se agrega el ID de HTML */
var boton = document.getElementById('botoncopiar');
boton.hidden = true;  
/************************************************************ */ 

/*para ocultar input de salida que se codifico en index.html, entre parentesis se agrega el ID de HTML */
var mensajesal = document.getElementById('mensaje-salida');
mensajesal.hidden = true;  
/************************************************************ */ 

/*para ocultar imagenes de linkedin, github y un parrafo de salida que se codifico en index.html, entre parentesis se agrega el ID de HTML */
//var footer = document.getElementById('imagenSoc');
//footer.hidden = true;  
/************************************************************ */ 

function validarTexto (texto) {
    
    /*El patrón /[~!@#$%^&*()_+|}{[\]\\\/?><:";.,áéíóúàèìòù']/ges una expresión regular en JavaScript que coincide con cualquier carácter que esté dentro de los corchetes[]`. 
    Este patrón se puede utilizar para encontrar cualquier carácter especial en una cadena de texto.*/
    /*
    Vamos a desglosar el patrón:
    
    /: Delimitador de inicio de la expresión regular.
    [: Delimitador de inicio de la clase de caracteres.
    ~!@#$%^&*()_+|}{[\]\\\/?><:";.,áéíóúàèìòù'`: Una serie de caracteres especiales que se van a buscar en la cadena de texto.
    ]: Delimitador de fin de la clase de caracteres.
    /: Delimitador de fin de la expresión regular.
    g: Modificador de la expresión regular que indica que la búsqueda debe ser global, es decir, que se busque en toda la cadena en lugar 
    de detenerse después de encontrar la primera coincidencia.
    Entonces, esta expresión regular buscará cualquier carácter en una cadena que coincida con alguno de los caracteres especiales dentro de los corchetes. 
    Por ejemplo, si aplicas esta expresión regular a la cadena "Hola#Mundo!", coincidirá con el carácter #. */

    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    /*Este patrón /[A-Z]/g es una expresión regular en JavaScript que coincide con cualquier letra mayúscula en una cadena de texto.

    Desglosemos el patrón:

    /: Delimitador de inicio de la expresión regular.
    [: Delimitador de inicio de la clase de caracteres.
    A-Z: Rango de caracteres desde la letra "A" hasta la letra "Z", lo que incluye todas las letras mayúsculas del alfabeto.
    ]: Delimitador de fin de la clase de caracteres.
    /: Delimitador de fin de la expresión regular.
    g: Modificador de la expresión regular que indica que la búsqueda debe ser global, es decir, que se busque en toda la cadena en lugar de detenerse 
    después de encontrar la primera coincidencia.
    Entonces, esta expresión regular buscará cualquier letra mayúscula en una cadena de texto. Por ejemplo, si aplicas esta expresión regular a 
    la cadena "HolaMundo", coincidirá con las letras "H" y "M". */

    let mayusculas = /[A-Z]/g;  

    let vacio="";  
                          
    /* El método match() en JavaScript se utiliza para buscar una expresión regular dentro de una cadena y devolver un array con las coincidencias encontradas. 
    Si la expresión regular tiene el modificador global (g), match() devolverá un array con todas las coincidencias encontradas. Si no se encuentra ninguna coincidencia, 
    devuelve null. */      /* || significa = O */ 
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else 
        if(texto==vacio) {
           alert("Ingrese un mensaje para Encriptar o Desencriptar");
           return true;
   }    else {

        /*para desocultar input de salida imagen y texto que se codifico en index.html, entre parentesis se agrega el ID de HTML */
        /*El código que proporcionaste está utilizando JavaScript para ocultar un elemento HTML con el atributo id igual a "titulos-fijos". Veamos cómo funciona línea por línea:
        var titulosfijos = document.getElementById('titulos-fijos');: Esta línea busca en el documento HTML un elemento con 
        el atributo id igual a "titulos-fijos" utilizando document.getElementById('titulos-fijos'). 
        El resultado se guarda en la variable titulosfijos.
        titulosfijos.hidden = true;: Después de obtener el elemento con getElementById(), se accede 
        a la propiedad hidden de ese elemento (titulosfijos). Al asignar true a titulosfijos.hidden, 
        estás indicando que deseas ocultar el elemento en el navegador.
        En resumen, este código JavaScript busca un elemento con el id "titulos-fijos" en el HTML y luego 
        lo oculta al establecer su propiedad hidden en true. Esto significa que el elemento no será visible en la página web cuando se cargue en el navegador. */
        
        //var titulosfijos = document.getElementById('titulos-fijos');
        //titulosfijos.hidden = true;              
        /************************************************************ */ 

        /*para desocultar el boton copiar que se codifico en index.html, entre parentesis se agrega el ID de HTML */
        var boton = document.getElementById('botoncopiar');
        boton.hidden = false; 
        /***************************************************************/

        /*para desocultar input de salida que se codifico en index.html, entre parentesis se agrega el ID de HTML */
        var mensajesal = document.getElementById('mensaje-salida');
        mensajesal.hidden = false;              
        /************************************************************ */ 

        /*para ocultar imagenes de linkedin, github y un parrafo de salida que se codifico en index.html, entre parentesis se agrega el ID de HTML */
        //var footer = document.getElementById('imagenSoc');
        //footer.hidden = false;  
        /************************************************************ */ 

        return false;
    }
}

const textoEncriptar = document.querySelector('#input-texto-ent'); /* toma el texto escrito en el texarea de la web. Con el document.querySelector se puede usar del html
                                                                      texarea la class . o el id # */  
                                                                   /* tambien en const textoEncriptar = document.querySelector('#input-texto-ent').value 
                                                                    pero debe ir dentro de la funcion, si se pone afuera de una funcion no funciona y si se quiere
                                                                    fuera de la funcion se le quita el value y el campo a informar dentro de la funcion en los ( )
                                                                    se le pone value ejemplo suma(numero.value) */
const resultado = document.querySelector("#mensaje-salida");

function btnEncriptartext() {
    if (validarTexto (textoEncriptar.value) == false) {
        const Encriptado = encriptar(textoEncriptar.value);  
        resultado.value = Encriptado;   
    }               
}


const reglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

/*En el código proporcionado, el método includes() se utiliza para verificar si el textoIngresado 
contiene el primer elemento de cada sub-array en el array reglas. Aquí está el significado de cada parte del código:

for (let i = 0; i < reglas.length; i++) {: Esto inicializa un bucle for que iterará sobre cada sub-array en el array reglas.

if (textoIngresado.includes(reglas[i][0])) {: Dentro del bucle, se verifica si el textoIngresado contiene 
    el primer elemento (index 0) de la sub-array actual reglas[i]. Si es así, significa que se ha encontrado 
    una coincidencia entre el textoIngresado y el patrón definido en reglas[i][0].

textoIngresado = textoIngresado.replaceAll(reglas[i][0], reglas[i][1]);: Si el textoIngresado contiene 
el patrón definido en reglas[i][0], entonces se reemplaza ese patrón con el segundo elemento (index 1) de la sub-array 
actual reglas[i] utilizando el método replaceAll(). Esto se hace para encriptar el texto según las reglas definidas en el array reglas.

}: Fin del bloque if.

}: Fin del bloque for.

En resumen, la función encriptar() itera sobre el array reglas y verifica si cada patrón en reglas[i][0] 
está presente en el textoIngresado utilizando includes(). Si se encuentra una coincidencia, se reemplaza el 
patrón con el correspondiente valor en reglas[i][1] utilizando replaceAll(). Luego, el texto modificado se 
devuelve como resultado de la función. Este proceso permite aplicar múltiples reglas de encriptación al textoIngresado. */

function encriptar (textoIngresado) { 
        for (let i = 0; i < reglas.length; i++) {
            if (textoIngresado.includes(reglas[i][0])) {
                textoIngresado = textoIngresado.replaceAll(reglas[i][0], reglas[i][1]); 
                console.log(`ìndice encriptar: ${i}`);
                console.log(`encriptar: ${textoIngresado}`);
            }            
        }
        return textoIngresado;
}


function copiar() {      
    let Copiado = document.querySelector("#mensaje-salida").value;
    console.log(`copiado: ${Copiado}`);
    navigator.clipboard.writeText(Copiado); // Copiar el texto al portapapeles */
    console.log(`Copiado clipboard: ${Copiado}`);

    document.querySelector("#input-texto-ent").value="";   /* limpia el texto que este el id input-texto-ent */
    document.querySelector("#mensaje-salida").value="";
}


 function btnDesencriptartext() {
    const textoIngresado = document.querySelector("#input-texto-ent").value;
    console.log(`btn desencriptar textoIngresado: ${textoIngresado}`);

    if (validarTexto (textoIngresado) == false) {  
        const Desencriptado = desencriptar(textoIngresado);
        resultado.value = Desencriptado;
        console.log(`btn desencriptar resultado.value: ${resultado.value}`);
    }
}


//["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]
//prueba de fuego james = jaimenters

function desencriptar (textoIngresado) {
    const reglas = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]; // se ponen las reglas como el abecedario para que james al desencriptar quede con el mismo nombre,
                                                                                      //   hice pruebas y las desencripta correctamente

    for (let i = 0; i < reglas.length; i++) {
        if (textoIngresado.includes(reglas[i][1])) {
            textoIngresado = textoIngresado.replaceAll(reglas[i][1], reglas[i][0]);  
            console.log(`ìndice[i][1] desencriptar: ${(i + reglas[i][1])}`);
            console.log(`indice[i][0] desencriptar: ${(i + reglas[i][0])}`);
            console.log(`desencriptar: ${textoIngresado} `);          
        }     
    }
    return (textoIngresado);
}
