const imgData = [//ccreamos un objeto array, cada par de llaves {} define un objeto literal. con sus propiedades como src, alt etc
    {
        src: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25",
        alt: "img-1",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    }, 
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4Iw1tXcl0zlzQzxzbcJyadgSQJtGQ6Yqrg&s",
        alt: "img-2",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4LrszY2ZRc-JVoBeI6Tb7bqvA4Y_Ano4QcJ5Jha_83jordfsaexDoMjNDyGvWUzzeC0&usqp=CAU",
        alt: "img-3",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    }, 
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4Iw1tXcl0zlzQzxzbcJyadgSQJtGQ6Yqrg&s",
        alt: "img-4",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    }, 
    {
        src: "https://lugoneseditorial.com.ar/wp-content/uploads/2024/07/Inteligencia-artificial-diabetes5.jpeg",
        alt: "img-5",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    }, 
    {
        src: "https://previews.123rf.com/images/jirsak/jirsak1710/jirsak171000008/87259564-proteger-el-concepto-de-salud-cuidado-de-la-salud-y-prevenci%C3%B3n-de-problemas-card%C3%ADacos-cardiolog%C3%ADa.jpg",
        alt: "img-6",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    }, 
    {
        src: "https://lugoneseditorial.com.ar/wp-content/uploads/2024/07/Inteligencia-artificial-diabetes5.jpeg",
        alt: "img-7",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    }, 
    {
        src: "https://inrobics.com/wp-content/uploads/2023/09/Inteligencia-Artificial-en-el-sector-de-la-salud.jpg",
        alt: "img-8",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    },
    {
        src: "https://previews.123rf.com/images/jirsak/jirsak1710/jirsak171000008/87259564-proteger-el-concepto-de-salud-cuidado-de-la-salud-y-prevenci%C3%B3n-de-problemas-card%C3%ADacos-cardiolog%C3%ADa.jpg",
        alt: "img-9",
        title: "Salud",
        description: "Estas intervenciones incluyen pruebas diagnósticas, procedimientos médicos, productos farmacéuticos, dispositivos y sistemas en los cuidados de la salud. Dichos productos y servicios han sido ampliamente desarrollados y mejorados durante las últimas décadas gracias a descubrimientos e investigaciones científicas.",
        link: "https://cdn.euroinnova.edu.es/img/subidasEditor/whatsapp%20image%202021-02-03%20at%2008-1612464353.25"
    }  
];
//creamos la funcion para crear la imagen.
function createImagenCard(image) {
    const colDiv = document.createElement('div');//mediante el objeto global document creamos un elemenento('div') con el metodo createEelement
    colDiv.classList.add('col-sm-12','col-md-6', 'col-lg-4');//se agrega por medio de la propiedad de HTML llamada classList  add el metodo de classList que agrega clases Css

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'img-1')

    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.width = 350;//colocamos width para que las imagenes tengan un espacio reservado
    imgElement.height = 350;
    imgElement.classList.add('card-img-top');
    imgElement.alt = image.alt;//Se establece el contenido de texto del elemento <img> con el valor de la propiedad alt del objeto image.

    const cardBodyDiv = document.createElement('div');//creamos este div para que contenga el titulo la descripcion y el enlace
    cardBodyDiv.classList.add('card-body');

    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title');
    titleElement.textContent = image.title;//Se establece el contenido de texto del elemento <h5> con el valor de la propiedad title del objeto image.

    const textElement = document.createElement('p');//Este elemento se utilizará para mostrar la descripción de la imagen.
    textElement.classList.add('card-text');
    textElement.textContent = image.description;

    const linkElement = document.createElement('a');
    linkElement.href = image.link;
    linkElement.classList.add('btn', 'btn-primary');
    linkElement.textContent = 'See more';

    cardBodyDiv.appendChild(titleElement);//Se añade el elemento titleElement (<h5>) como hijo del elemento cardBodyDiv (<div>). Esto coloca el título dentro del cuerpo de la tarjeta.
    cardBodyDiv.appendChild(textElement);//Se añade el elemento textElement (<p>) como hijo de cardBodyDiv, colocándolo debajo del título.
    cardBodyDiv.appendChild(linkElement);//Se añade el elemento linkElement (<a>) como hijo de cardBodyDiv, colocándolo debajo de la descripción.

    cardDiv.appendChild(imgElement);//Se añade el elemento imgElement (<img>) como hijo del elemento cardDiv (el contenedor principal de la tarjeta). Esto coloca la imagen dentro de la tarjeta.
    cardDiv.appendChild(cardBodyDiv);//Se añade el elemento cardBodyDiv (que contiene el título, la descripción y el enlace) como hijo de cardDiv, colocándolo debajo de la imagen.

    colDiv.appendChild(cardDiv);//Se añade el elemento cardDiv (que ahora contiene la imagen y el cuerpo) como hijo del elemento colDiv (la columna que definimos al principio).

    return colDiv;//La función createImagenCard devuelve el elemento colDiv. Este div contiene toda la estructura HTML para mostrar una tarjeta de imagen completa (la columna, 
    //la tarjeta, la imagen, el título, la descripción y el enlace).

}

const imageGalleryRow = document.getElementById('imageGalleryRow');

imgData.forEach(image => {//Itera sobre cada elemento del array imgData. Por cada elemento (que en este caso es un objeto que representa la información de una imagen), se ejecuta la 
//función que se pasa como argumento. En cada iteración, el elemento actual del array se asigna al parámetro image.
    const cardColumn = createImagenCard(image);//en la constante llamamos a la funcion(createImagenCard) con el parametro (image) la funcion crea el elemto div que representa
    //la tarjeta de la img completa y la devuelve, este elemento dic devuelto lo asigna a la const cardColumn

    imageGalleryRow.appendChild(cardColumn);//Se toma el elemento imageGalleryRow (que obtuvimos del HTML) y se le añade como hijo el elemento cardColumn (la tarjeta de imagen 
    //que acabamos de crear). Esto hace que la tarjeta de imagen se muestre en la página web dentro del contenedor imageGalleryRow.
});