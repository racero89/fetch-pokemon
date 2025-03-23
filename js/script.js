//document.addEventListener("DOMContentLoaded", () => {
const pokemonSelect = document.getElementById("pokemon-select");
const getPokemon = document.getElementById("get-pokemon");
//const container = document.querySelector(".container");

const obtenerPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      data.results.forEach((pokemon) => {
        obtenerPokemon.innerHTML += `
      <div>
      <h2>${pokemon.tipo}</h2>
      <p>${pokemon.peso}</p>
      </div>
      `;
      });
    })
    .catch((err) => console.error("Error:", err.message));
};
obtenerPokemon();
//});
