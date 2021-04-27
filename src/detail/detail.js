function getPokeNamefromUrl() {
  const nameLocation = window.location.search.split('&').find((valueId) => valueId.includes('name='));
  const name = nameLocation.split('=')[1];
  return name;
}
const pokeNamed = getPokeNamefromUrl();

function fetchPokeDetails(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const fetchResponse = fetch(url);
  const jsonResponse = fetchResponse
    .then((response) => response.json());

  return jsonResponse;
}

function drawPokeDetails(pokemon) {
  const pokeId = pokemon.id;
  const pokeName = pokemon.name;
  const pokeImage = pokemon?.sprites?.other.dream_world.front_default;

  const id = document.createElement('span');
  id.innerText = `# ${pokeId}`;
  document.body.appendChild(id);

  const name = document.createElement('h1');
  name.innerText = pokeName.toUpperCase();
  document.body.appendChild(name);

  const bigImage = document.createElement('img');
  bigImage.src = pokeImage;
  bigImage.setAttribute('class', 'image--move');
  document.body.appendChild(bigImage);

  for (const property in pokemon.sprites) {
    const image = document.createElement('img');
    image.setAttribute('class', 'image--small--move');
    if ((pokemon.sprites[property] !== null) && (typeof (pokemon.sprites[property]) !== 'object')) {
      image.src = pokemon.sprites[property];
      document.body.appendChild(image);
    }
  }
  
  const moves = document.createElement('h2');
  moves.innerText = 'Moviments destacats';
  document.body.appendChild(moves);

  const movesTable = document.createElement('table');
  document.body.appendChild(movesTable);

  for (let i = 0; i < 4; i++) {
    const trMoves = document.createElement('tr');
    const tdMoves = document.createElement('td');
    tdMoves.innerText = (pokemon.moves[i].move.name);
    movesTable.appendChild(tdMoves);
    movesTable.appendChild(trMoves);
  }
}

fetchPokeDetails(pokeNamed)
  .then((pokeDetails) => drawPokeDetails(pokeDetails));
