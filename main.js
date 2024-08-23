
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    const containers = document.querySelectorAll('.contenedor');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.id.replace('btn-', '');
            containers.forEach(container => {
                container.style.display = container.id === `${targetId}-container` ? 'block' : 'none';
            });
            if (!document.querySelector(`#${targetId}-container`).hasChildNodes()) {
                window[`obtener${targetId.charAt(0).toUpperCase() + targetId.slice(1)}`]();
            }
        });
    });
});

async function fetchData(url) {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.results;
}

function createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
}

function appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
}

async function obtenerPersonajes() {
    const personajes = await fetchData('https://swapi.py4e.com/api/people/');
    const contenedorPersonajes = document.getElementById('personajes-container');

    personajes.slice(0, 10).forEach(personaje => {
        const personajeDiv = createElementWithClass('div', 'personaje');
        personajeDiv.innerHTML = `
            <h2>${personaje.name}</h2>
            <p>Altura: ${personaje.height} cm</p>
            <p>Color de pelo: ${personaje.hair_color}</p>
            <p>Color de piel: ${personaje.skin_color}</p>
            <p>Color de ojos: ${personaje.eye_color}</p>
            <p>Género: ${personaje.gender}</p>
            <p>Año de Nacimiento: ${personaje.birth_year}</p>
            <p>Masa: ${personaje.mass}</p>
        `;
        contenedorPersonajes.appendChild(personajeDiv);
    });
}

async function obtenerPlanetas() {
    const respuesta = await fetch('https://swapi.py4e.com/api/planets/');
    const datos = await respuesta.json();
    const planetas = datos.results;

    const contenedorPlanetas = document.getElementById('planetas-container');

    planetas.slice(0, 10).forEach(planeta => {
        const planetaDiv = document.createElement('div');
        planetaDiv.classList.add('planeta');

        planetaDiv.innerHTML = `
            <h2>${planeta.name}</h2>
            <p>Periodo de rotación: ${planeta.rotation_period}</p>
            <p>Periodo orbital: ${planeta.orbital_period}</p>
            <p>Diametro: ${planeta.diameter}</p>
            <p>Clima: ${planeta.climate}</p>
            <p>Poblacion: ${planeta.population}</p>
            <p>Gravedad: ${planeta.gravity}</p>
            <p>Terreno: ${planeta.terrain}</p>
        `;

        contenedorPlanetas.appendChild(planetaDiv);
    });
}

async function obtenerEspecies() {
    const respuesta = await fetch('https://swapi.py4e.com/api/species/');
    const datos = await respuesta.json();
    const especies = datos.results;

    const contenedorEspecies = document.getElementById('especies-container');

    especies.slice(0, 10).forEach(especie => {
        const especieDiv = document.createElement('div');
        especieDiv.classList.add('especie');

        especieDiv.innerHTML = `
            <h2>${especie.name}</h2>
            <p>Clasificación: ${especie.classification}</p>
            <p>Designación: ${especie.designation}</p>
            <p>Altura media: ${especie.average_height}</p>
            <p>Color de Pelo: ${especie.skin_colors}</p>
            <p>Color de Ojos: ${especie.eye_colors}</p>
            <p>Esperanza de vida: ${especie.average_lifespan}</p>
            <p>Lenguaje: ${especie.language}</p>
        `;

        contenedorEspecies.appendChild(especieDiv);
    });
}

async function obtenerNaves() {
    const respuesta = await fetch('https://swapi.py4e.com/api/starships/');
    const datos = await respuesta.json();
    const naves = datos.results;

    const contenedorNaves = document.getElementById('naves-container');

    naves.slice(0, 10).forEach(nave => {
        const naveDiv = document.createElement('div');
        naveDiv.classList.add('nave');

        naveDiv.innerHTML = `
            <h2>${nave.name}</h2>
            <p>Modelo: ${nave.model}</p>
            <p>Fabricante: ${nave.manufacturer}</p>
            <p>costo en creditos: ${nave.cost_in_credits}</p>
            <p>Longitud: ${nave.length}</p>
            <p>Velocidad maxima: ${nave.max_atmosphering_speed}</p>
            <p>Multitud: ${nave.crew}</p>
            <p>Pasajeros: ${nave.passengers}</p>
            <p>Capacidad de carga: ${nave.cargo_capacity}</p>
            <p>Consumibles: ${nave.consumables}</p>
            <p>Hiper propulsion: ${nave.hyperdrive_rating}</p>
            <p>MGLT: ${nave.MGLT}</p>
            <p>Clase de nave: ${nave.starship_class}</p>
        `;

        contenedorNaves.appendChild(naveDiv);
    });
}

async function obtenerVehiculos() {
    const respuesta = await fetch('https://swapi.py4e.com/api/vehicles/');
    const datos = await respuesta.json();
    const vehiculos = datos.results;

    const contenedorVehiculos = document.getElementById('vehiculos-container');

    vehiculos.slice(0, 10).forEach(vehiculo => {
        const vehiculoDiv = document.createElement('div');
        vehiculoDiv.classList.add('vehiculo');

        vehiculoDiv.innerHTML = `
            <h2>${vehiculo.name}</h2>
            <p>Modelo: ${vehiculo.model}</p>
            <p>Fabricante: ${vehiculo.manufacturer}</p>
            <p>costo en creditos: ${vehiculo.cost_in_credits}</p>
            <p>Longitud: ${vehiculo.length}</p>
            <p>Velocidad maxima: ${vehiculo.max_atmosphering_speed}</p>
            <p>Multitud: ${vehiculo.crew}</p>
            <p>Pasajeros: ${vehiculo.passengers}</p>
            <p>Capacidad de carga: ${vehiculo.cargo_capacity}</p>
            <p>Consumibles: ${vehiculo.consumables}</p>
        `;

        contenedorVehiculos.appendChild(vehiculoDiv);
    });
}


async function obtenerPeliculas() {
    const respuesta = await fetch('https://swapi.py4e.com/api/films/');
    const datos = await respuesta.json();
    const peliculas = datos.results;

    const contenedorPeliculas= document.getElementById('peliculas-container');

    peliculas.slice(0, 10).forEach(pelicula => {
        const peliculaDiv = document.createElement('div');
        peliculaDiv.classList.add('pelicula');

        peliculaDiv.innerHTML = `
            <h2>${pelicula.title}</h2>
            <p>Episodio: ${pelicula.episode_id}</p>
            <p>Historia: ${pelicula.opening_crawl}</p>
            <p>Director: ${pelicula.director}</p>
            <p>Productor: ${pelicula.producer}</p>
            <p>Fecha de lanzamiento: ${pelicula.release_date}</p>
        `;

        contenedorPeliculas.appendChild(peliculaDiv);
    });
}
