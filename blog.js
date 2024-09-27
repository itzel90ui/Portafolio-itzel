/* Declara variables*/
//Elementos HTML
const formulario = document.getElementById("formularioComentarios");//Esta constante a 
const nombreInput = document.getElementById("nombre");
const comentarioInput  = document.getElementById("comentario");
const contenedorComentarios  = document.getElementById("contenedorComentarios");
let nombre = ' ';
let comentario = ' ';
let nuevocomentario = ' ';

/*Metodos (Acciones de la pagina con el usuario) */
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    nombre = nombreInput.value;
    comentario = comentarioInput.value;
        if(nombre == '' || comentario==''){
            alert("formulario incompleto");

        }
        else{
            /*Crear un elemento div*/
            
            nuevocomentario = document.createElement("div");
            /*Dar estilo a la etiqueta */
            nuevocomentario.classList.add('comentario');
            /*Crear etiqueta HTML de forma dinamica*/
            nuevocomentario.innerHTML = `<strong>${nombre}</strong>;${comentario}`;    
            /*Agregar etiqueta o comentario en div */
            contenedorComentarios,this.appendChild(nuevocomentario);

            /*Limpiar los inputs (formulario)  */
            nombreInput.value = ' ';
            comentarioInput.value = ' ';
        }
    })

