// Array de objetos recetas saludables
const recetas = [
    {
        id: 1,
        titulo: "Desayuno tipo Américano saludable",
        categoria: "Desayuno",
        url: "./images/desayuno1.jpg"
    },
    {
        id: 2,
        titulo: "ponqué banana y avena, café ionizado con stevia",
        categoria: "Desayuno",
        url: "./images/desayuno2.jpg"
    },
    {
        id: 3,
        titulo: "huevos con tozineta, aguacate y tostada",
        categoria: "Desayuno",
        url: "./images/desayuno3.jpg"
    },
    {
        id: 4,
        titulo: "huevo perfecto con tomate, pan a finas hierbas",
        categoria: "Desayuno",
        url: "./images/desayuno4.jpg"
    },
    {
        id: 5,
        titulo: "panques de avena, frutos rojos y yogurt griego",
        categoria: "Desayuno",
        url: "./images/desayuno5.jpg"
    },
    {
        id: 6,
        titulo: "paques de harina de almendras y arándanos con miel",
        categoria: "Desayuno",
        url: "./images/desayuno6.jpg"
    },
    {
        id: 7,
        titulo: "ensalada light gluten",
        categoria: "libre gluten",
        url: "./images/libregluten1.jpg"
    },
    {
        id: 8,
        titulo: "cupcake",
        categoria: "libre gluten",
        url: "./images/libregluten2.jpg"
    },
    {
        id: 9,
        titulo: "pan",
        categoria: "libre gluten",
        url: "./images/libregluten3.jpg"
    },
    {
        id: 10,
        titulo: "postre con avena, cacao, stevia y moras",
        categoria: "postres free sugar",
        url: "./images/postres1.jpg"
    },
    {
        id: 11,
        titulo: "postre de frutos rojos con stevia",
        categoria: "postres free sugar",
        url: "./images/postres2.jpg"
    },
    {
        id: 12,
        titulo: "postre avena con fresas y quinua",
        categoria: "postres free sugar",
        url: "./images/postres3.jpg"
    },
    {
        id: 13,
        titulo: "ensalada de frutas con yogurt griego",
        categoria: "postres free sugar",
        url: "./images/postres4.jpg"
    },
    {
        id: 14,
        titulo: "fríjoles con maduro",
        categoria: "receta nutritiva",
        url: "./images/receta-nutritiva.jpg"
    },
    {
        id: 15,
        titulo: "fríjoles con maduro",
        categoria: "receta nutritiva",
        url: "./images/receta-nutritiva.jpg"
    },
    {
        id: 16,
        titulo: "asado con crema de ahuyama",
        categoria: "receta nutritiva",
        url: "./images/receta-nutritiva1.jpg"
    },
    {
        id: 17,
        titulo: "estilo mexicano saludable",
        categoria: "receta nutritiva",
        url: "./images/receta-nutritiva2.jpg"
    },
    {
        id: 18,
        titulo: "fríjoles",
        categoria: "receta nutritiva",
        url: "./images/receta-nutritiva3.jpg"
    },
    {
        id: 19,
        titulo: "plato con fríjoles, ensalada de quinua y huevo",
        categoria: "receta nutritiva",
        url: "./images/receta-nutritiva4.jpg"
    },
    {
        id: 20,
        titulo: "crema de calabaza",
        categoria: "receta nutritiva",
        url: "./images/receta-nutritiva5.jpg"
    },
    {
        id: 21,
        titulo: "ensalada de vegetales frescos",
        categoria: "receta nutritiva",
        url: "./images/receta-nutritiva6.jpg"
    }

];

// capturando la etiqueta con id  'recetas-container'
const container = document.getElementById('recetas-container');

//se recorre el array recetas para crear la etiqueta div con classname receta
recetas.forEach(receta => {
    const divReceta = document.createElement('div');
    divReceta.className = 'receta';

    // Generar una altura aleatoria entre 200px y 400px
    const alturaAleatoria = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
    divReceta.style.height = `${alturaAleatoria}px`;
    divReceta.style.backgroundImage = `url(${receta.url})`;

    container.appendChild(divReceta);
});


// se selecciona todas las etiquetas con clase .tarjeta//
const recetass = document.querySelectorAll('.receta');
//console.log(tarjetas);

//se recorre el array y se 
recetass.forEach(receta => {
    // Agrega evento mouseover para ampliar la imagen
    receta.addEventListener('mouseover', () => {
        receta.classList.add('zoom');
    });

    // Agrega evento mouseout para restaurar la imagen
    receta.addEventListener('mouseout', () => {
        receta.classList.remove('zoom');
    });
});


