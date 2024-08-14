// script.js
async function obtenerPersonajes() {
    const respuesta = await fetch('https://swapi.py4e.com/api/people/');
    const datos = await respuesta.json();
    const personajes = datos.results;

    const contenedorPersonajes = document.getElementById('personajes-container');

    personajes.slice(0, 10).forEach(personaje => {
        const personajeDiv = document.createElement('div');
        personajeDiv.classList.add('personaje'); // Aplicamos una clase para estilo

        personajeDiv.innerHTML = `
            <h2>${personaje.name}</h2>
            <p>Altura: ${personaje.height} cm</p>
            `;

        contenedorPersonajes.appendChild(personajeDiv);
    });
}

obtenerPersonajes();
