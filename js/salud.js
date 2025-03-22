async function showPogramas() {//importante colocar async.
    const response = await fetch("./json/salud.json");//response para almacenar el resultado de la solicitud fetch.
    //fetch función que se utiliza para realizar solicitudes de red.
    //"./json/salud.json") es la ruta relativa al archivo JSON que se va a obtener.
    //fetch() devuelve una promesa que se resuelve con un objeto Response.

    const programas = await response.json()//const programas para almacenar los datos JSON analizados.
    //await se utiliza para pausar la ejecución de la función hasta que la promesa devuelta por response.json() se resuelva.
    //response.json() es un método del objeto Response que se utiliza para analizar el cuerpo de la respuesta como JSON.

    console.log(programas);

    $("#programas").append('<div class="d-flex flex-wrap">');/*contenedor flex para que las noticias se coloquen en fila horizontal.
     clase de Bootstrap d-flex (para activar Flexbox) y flex-wrap (para permitir que los elementos se envuelvan a la siguiente
    línea si no caben). Este div sera hijo del div con id progrmas porque usamos append y se convierte en el contenedor Flex.*/

    for (const programa of programas) {//programas Es el objeto iterable (en este caso, un array) sobre el cual se va a iterar. 
        //Se espera que la variable programas sea un array que contiene objetos, donde cada objeto representa un "programa".
        addPrograma(programa)
    }

    $("#programas").append('</div>');//cierre del contenedor flex

    $('#programas-message').html(programas.length + " " + "Loaded  Programs !")//cuenta cuantos elementos encontra en el array programas(6 o 4 o 2) los escribe + un espacio + "Loaded  Programs !"
}

function addPrograma(programa) {
    const programasList = $("#programas .d-flex"); // Selecciona el contenedor Flex que se creo dentro de la funcion showProgramas.

    //const programasList = $('#programas')-->sin contenedor flex.

    const html =//creamos la estructura del div que sera el hijo del div programas y se agregara debajo del mismo
    //para cargar las noticias.
        '<div class="col-sm-* col-lg-4">' +
        '<div class="p-2">' +
        '<img class="w-100 img-fluid" src="' + programa.photo + '"></img>' +
        '<h3 class="font-weight-bold">' + programa.categoria + '</h3>' +
        '<div class="noticiasJson word-wrap: break-word;">Description: ' + programa.descripcion + '</div>';
      '</div>' +
    '</div>';

    programasList.append(html)//agrega al div programas la estructura contruida dentro del html.
}

$(document).ready(function () {//esperar a que el documento este listo para lanzar la funcion.
    setTimeout(showPogramas, 2500)//programa por medio de setTimeout la ejecución de la función showPogramas para 
    //que se ejecute después de un retraso de 2.5 segundos
});
