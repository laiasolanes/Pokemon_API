const url_loc = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

function ulList() {
  const ulList = document.createElement('ul');
  const lista = document.getElementById('pokelista');
  lista.appendChild(ulList);
}
ulList();

function drawAsync(url) {
  fetch(url)
    .then((response) => response.json())
    .then((pokes) => {
      console.log(pokes);

      next = pokes.next;
      previous = pokes.previous;
      results = pokes.results;

      document.getElementsByTagName('ul')[0].textContent = '';

      results.forEach((poke) => {
        // ID POKEMON
        const urlId = poke.url;
        const pokeId = +urlId.split('/').slice(6, 7);

        // LIIST pokemons
        const aList = document.createElement('a');
        aList.setAttribute('href', `../detail/detail.html?id=${pokeId}&name=${poke.name}`);
        aList.setAttribute('class', 'button--red');
        const liList = document.createElement('li');
        liList.innerText = `${poke.name}`;

        aList.appendChild(liList);
        document.getElementsByTagName('ul')[0].appendChild(aList);
      });

    });
}
drawAsync(url_loc);
