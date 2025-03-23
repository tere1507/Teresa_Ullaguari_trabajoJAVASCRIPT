//Codigo aviso legal
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('buttonAviso');
    const textoAviso = document.getElementById('textoAviso');
    let avisoMostrado = false;//Inicializamos como booleano

    boton.addEventListener('click', function(){
        if(!avisoMostrado){
            fetch("./json/avisoLegal.json")
            .then(response => response.json())
            .then(data => {
                textoAviso.innerHTML = `<h2>${data.titulo}</h2>${data.contenido}`;
                textoAviso.style.display = 'block';
                avisoMostrado = true;
            })
            .catch(error => {
                console.error('Error al cargar avisoLegal.json :', error);
                textoAviso.innerHTML = '<p>No se pudo cargar el aviso legal</p>';
                textoAviso.style.display = 'block';
                avisoMostrado = true;
            });
        }else {
            textoAviso.style.display = 'none';
            avisoMostrado = !avisoMostrado;
        }
    });
});

