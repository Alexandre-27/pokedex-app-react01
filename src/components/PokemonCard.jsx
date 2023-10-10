function PokemonCard() {
    const pokemon = pokemonList[0]

    return <section>{pokemon === pokemonList[0] ? <div><p>bulbasaur</p><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/></div> : <div><p>Mew</p><p>???</p></div>}</section>
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;