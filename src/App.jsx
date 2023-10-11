import PokemonCard from "./components/PokemonCard"
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)
  const precedent = () => {
    setPokemonIndex (pokemonIndex - 1);
  }
  const suivant = () => {
    setPokemonIndex (pokemonIndex + 1);
  }

  const pokemon = pokemonList[pokemonIndex];

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemon}/>
      </div>
      <div>
        {pokemonIndex > 0 &&
          <button onClick={precedent}>Précédent</button>
        }
        {pokemonIndex < pokemonList.length - 1 &&
          <button onClick={suivant}>Suivant</button>
        }
      </div>
    </>
  ); 
}

export default App;
