// script.js
async function obtenerPersonajes() {
    const respuesta = await fetch('https://swapi.py4e.com/api/people/');
    const datos = await respuesta.json();
    const personajes = datos.results;

    const contenedorPersonajes = document.getElementById('personajes-container');

    personajes.slice(0 , 10).forEach(personaje => {
        const personajeDiv = document.createElement('div');
        personajeDiv.classList.add('personaje'); // Aplicamos una clase para estilo

        personajeDiv.innerHTML = `
            <h2>${personaje.name}</h2>
            <p>Altura: ${personaje.height} cm</p>
            <p>Genero: ${personaje.gender} </p>
            <p>Año de Nacimiento: ${personaje.birth_year} </p>
            <p>Masa: ${personaje.mass} </p>
            `;

        contenedorPersonajes.appendChild(personajeDiv);
    });
}

obtenerPersonajes();

async function obtenerPlaneta() {
    const respuesta = await fetch('https://swapi.py4e.com/api/planets/');
    const datos = await respuesta.json();
    const planetas = datos.results;

    const contenedorPlanetas = document.getElementById('planeta-container');

    planetas.slice(0 , 10).forEach(planeta => {
        const planetaDiv = document.createElement('div');
        planetaDiv.classList.add('planeta'); // Aplicamos una clase para estilo

        planetaDiv.innerHTML = `
            <h2>${planeta.name}</h2>
            <p>periodo de rotacion: ${planeta.rotation_period}</p>
            <p>Periodo orbital: ${planeta.orbital_period} </p>
            <p>Clima: ${planeta.climate} </p>
            <p>Gravedad: ${planeta.gravity} </p>
            <p>Superficie: ${planeta.terrain} </p>
            `;

        contenedorPlanetas.appendChild(planetaDiv);
    });
}

obtenerPlaneta();


async function obtenerEspecie() {
    const respuesta = await fetch('https://swapi.py4e.com/api/species/');
    const datos = await respuesta.json();
    const especies = datos.results;

    const contenedorEspecies = document.getElementById('especie-container');

    especies.slice(0 , 10).forEach(especie => {
        const especieDiv = document.createElement('div');
        especieDiv.classList.add('especie'); // Aplicamos una clase para estilo

        especieDiv.innerHTML = `
            <h2>${especie.name}</h2>
            <p>clasificacion: ${especie.classification}</p>
            <p>Designacion: ${especie.designation} </p>
            <p>Altura media: ${especie.average_height} </p>
            <p>Lenguage: ${especie.language} </p>
            `;

            contenedorEspecies.appendChild(especieDiv);
    });
}

obtenerEspecie();


async function obtenerNaves() {
    const respuesta = await fetch('https://swapi.py4e.com/api/starships/');
    const datos = await respuesta.json();
    const naves = datos.results;

    const contenedorNaves = document.getElementById('nave-container');

    naves.slice(0 , 10).forEach(nave => {
        const naveDiv = document.createElement('div');
        naveDiv.classList.add('nave'); // Aplicamos una clase para estilo

        naveDiv.innerHTML = `
            <h2>${nave.name}</h2>
            <p>clasificacion: ${especie.classification}</p>
            <p>Designacion: ${especie.designation} </p>
            <p>Altura media: ${especie.average_height} </p>
            <p>Lenguage: ${especie.language} </p>
            `;

            contenedorNaves.appendChild(naveDiv);
    });
}

obtenerNaves();

