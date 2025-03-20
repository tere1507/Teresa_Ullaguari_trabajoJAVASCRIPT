//codigo javascrit para validad el formulario

function validar() {
    let ok = true;//Esta variable se utilizará para indicar si la validación del formulario es exitosa o no.

    limpiarErrores();//llamada a la funcion para borrar cualquier mensaje de error o clase 
    //de error que se haya agregado previamente a los campos del formulario.

    const nombre = document.getElementById('nombre').value;//obtiene el valor del campo con id nombre y lo almacena.
    if (!/^[a-zA-Z]+$/.test(nombre) || nombre.length > 15) {//Verifica si el valor del campo nombre es válido 
      //Utiliza una expresión regular para verificar si el valor contiene solo letras. 
      //El operador (!) niega el resultado de la prueba y Verifica si la longitud del valor es mayor a 15 caracteres.
      ok = false;//Si la validación falla, establece la variable ok en false.
      mostrarError('nombre', 'Nombre inválido. Debe contener solo letras y máximo 15 caracteres.');
      //Llama a la función mostrarError para mostrar un mensaje de error para el campo nombre
      //con la construccion dinamica que realizamos en la fucion.
    }

    const apellidos = document.getElementById('apellidos').value;
    if (!/^[a-zA-Z]+$/.test(apellidos) || apellidos.length > 40) {
      ok = false;
      mostrarError('apellidos', 'Apellidos inválidos. Debe contener solo letras y máximo 40 caracteres.');
    }

    const telefono = document.getElementById('telefono').value;
    if (!/^\d{1,9}$/.test(telefono)) {//valida el campo telefono verificando que sean numero y no mas de 9 digitos.
      ok = false;
      mostrarError('telefono', 'Teléfono inválido. Debe contener solo números y máximo 9 dígitos.');
    }

    const email = document.getElementById('email').value;
    //verifica el campo E-mail con una estructura basica de construccion.
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      ok = false;
      mostrarError('email', 'Correo electrónico inválido. Debe cumplir con el formato nnnnn_nnn@zzzzz.xxx.');
    }

    const checkbox = document.getElementById('checkbox');
    if(!checkbox.checked) {//valida el campo checkbox si esta o no marcado.
        ok = false;
        mostrarError('checkbox', 'Debes aceptar los terminos y condiciones')
    }
    return ok;//Devuelve el valor de la variable ok, que indica si la validación fue exitosa o no.
  }


  //Esta funcion borra el mensaje de error  y las clases de error del elemento HTML correspondiente
  // al campo especificado por la variable campo.
  function limpiarErrores() {
    //Definimos un array con los ids de los campos del formulario.
    const campos = ['nombre', 'apellidos', 'telefono', 'email', 'checkbox'];

    //campos.forEach(campo =>{}-->Método del array campos que ejecuta una función para cada elemento del array.
    campos.forEach(campo => {//Itera sobre cada elemento del array campos.
      document.getElementById(campo).classList.remove('error');//Elimina la clase error del campo actual.
      document.getElementById(`error${campo.charAt(0).toUpperCase() + campo.slice(1)}`).textContent = '';
    //forma dinamica los ids con una cadena(``)con la palabra error literal, luego obtenemos la priemra letra
    //de elemento campo y la convertimos en mayuscula, luego buscamos la segunda parte para completar el nombre
    //del elemento quedando asi la contruccion completa ejem: (errorNombre) y Borra el mensaje de error 
    //asociado al campo actual.
    });
  }

  function mostrarError(campo, mensaje) {
    //buscamos en nuestro html el valor actual de campo y mediante el metodo
    //classList le damos los estilos de la clase (error) de css.
    document.getElementById(campo).classList.add('error');//Agrega la clase error al campo especificado.

    // campo.charAt(0).toUpperCase(): Obtiene el primer carácter de la
    // cadena campo, lo convierte a mayúscula y lo devuelve.
    // Por ejemplo, si campo es "nombre", esto devolverá "N"
    // campo.slice(1): Obtiene una subcadena de campo que comienza desde el segundo carácter hasta el final.
    // Por ejemplo, si campo es "nombre", esto devolverá "ombre".
    // error${...}: Combina la cadena "error" con el resultado de las operaciones anteriores.
    // Por ejemplo, si campo es "nombre", esto construirá la cadena "errorNombre".
    //en resumen crearemos de  forma dinamica que se forme (erroNombre) para buscar en el html
    //y agregar el mesaje de error.
    document.getElementById(`error${campo.charAt(0).toUpperCase() + campo.slice(1)}`).textContent = mensaje;
  }


// calcularPresupuesto();
document.getElementById('producto').addEventListener('change', calcularPresupuesto);
document.getElementById('plazo').addEventListener('input', calcularPresupuesto);
document.getElementById('unidad').addEventListener('change', calcularPresupuesto);
const extras = document.querySelectorAll('input[name="extras"]');
extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));

function calcularDescuento() {
    const productoSeleccionado = document.getElementById('producto');
    const precioProducto = parseInt(productoSeleccionado.options[productoSeleccionado.selectedIndex].getAttribute('data-precio'));
    const plazoValor = document.getElementById('plazo').value;
    const plazo = parseInt(plazoValor);
    const unidad = document.getElementById('unidad').value.toLowerCase();
    let descuentoPorcentaje = 0;

    if (unidad === 'meses') {
        if (plazo >= 12) {
            descuentoPorcentaje = 15;
        } else if (plazo >= 6) {
            descuentoPorcentaje = 10;
        }
    } else if (unidad === 'dias') {
        if (plazo >= 30) {
            descuentoPorcentaje = 5;
        }
    }

    return (precioProducto * descuentoPorcentaje) / 100;
}

function calcularExtras() {
    let precioExtras = 0;
    const extras = document.querySelectorAll('input[name="extras"]');
    extras.forEach(extra => {
        if (extra.checked) {
            precioExtras += parseInt(extra.getAttribute('data-precio'));
        }
    });
    return precioExtras;
}

function calcularPresupuesto() {
    const productoSeleccionado = document.getElementById('producto');
    const precioProducto = parseInt(productoSeleccionado.options[productoSeleccionado.selectedIndex].getAttribute('data-precio'));
    const plazo = parseInt(document.getElementById('plazo').value);
    const unidad = document.getElementById('unidad').value.toLowerCase();

    const descuento = calcularDescuento();
    const precioExtras = calcularExtras();
    const presupuestoTotal = precioProducto - descuento + precioExtras;

    document.getElementById('descuento').textContent = `Descuento: €${descuento}`;
    document.getElementById('presupuesto').textContent = `Presupuesto Inicial: €${precioProducto}`;
    document.getElementById('presupuestoFinal').textContent = `Presupuesto Final: €${presupuestoTotal}`;
}

calcularPresupuesto();


