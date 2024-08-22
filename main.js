// main.js
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

async function obtenerPersonajes() {
    const respuesta = await fetch('https://swapi.py4e.com/api/people/');
    const datos = await respuesta.json();
    const personajes = datos.results;

    const contenedorPersonajes = document.getElementById('personajes-container');

    personajes.slice().forEach(personaje => {
        const personajeDiv = document.createElement('div');
        personajeDiv.classList.add('personaje');

        personajeDiv.innerHTML = `
            <h2>${personaje.name}</h2>
            <p>Altura: ${personaje.height} cm</p>
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

    planetas.slice().forEach(planeta => {
        const planetaDiv = document.createElement('div');
        planetaDiv.classList.add('planeta');

        planetaDiv.innerHTML = `
            <h2>${planeta.name}</h2>
            <p>Periodo de rotación: ${planeta.rotation_period}</p>
            <p>Periodo orbital: ${planeta.orbital_period}</p>
            <p>Clima: ${planeta.climate}</p>
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

    especies.slice().forEach(especie => {
        const especieDiv = document.createElement('div');
        especieDiv.classList.add('especie');

        especieDiv.innerHTML = `
            <h2>${especie.name}</h2>
            <p>Clasificación: ${especie.classification}</p>
            <p>Designación: ${especie.designation}</p>
            <p>Altura media: ${especie.average_height}</p>
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

    naves.slice().forEach(nave => {
        const naveDiv = document.createElement('div');
        naveDiv.classList.add('nave');

        naveDiv.innerHTML = `
            <h2>${nave.name}</h2>
            <p>Modelo: ${nave.model}</p>
            <p>Fabricante: ${nave.manufacturer}</p>
            <p>Valor: ${nave.cost_in_credits}</p>
            <p>Capacidad de carga: ${nave.cargo_capacity}</p>
        `;

        contenedorNaves.appendChild(naveDiv);
    });
}

async function obtenerVehiculos() {
    const respuesta = await fetch('https://swapi.py4e.com/api/vehicles/');
    const datos = await respuesta.json();
    const vehiculos = datos.results;

    const contenedorVehiculos = document.getElementById('vehiculos-container');

    vehiculos.slice().forEach(vehiculo => {
        const vehiculoDiv = document.createElement('div');
        vehiculoDiv.classList.add('vehiculo');

        vehiculoDiv.innerHTML = `
            <h2>${vehiculo.name}</h2>
            <p>Modelo: ${vehiculo.model}</p>
            <p>Fabricante: ${vehiculo.manufacturer}</p>
            <p>Valor: ${vehiculo.cost_in_credits}</p>
            <p>Capacidad de carga: ${vehiculo.cargo_capacity}</p>
            <p>Longitud: ${vehiculo.length}</p>
        `;

        contenedorVehiculos.appendChild(vehiculoDiv);
    });
}
