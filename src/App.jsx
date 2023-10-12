import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import "./App.css"

const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      pv: "Pv: 60",
      attaque: "Attaque: 90",
      defense: "Défense: 70",
      nofind: "(Pokémon capturé)",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      pv: "Pv: 63",
      attaque: "Attaque: 96",
      defense: "Défense: 50",
      nofind: "(Pokémon capturé)",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        nofind: "(Pokémon aperçu)",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      pv: "Pv: 80",
      attaque: "Attaque: 110",
      defense: "Défense: 95",
      nofind: "(Pokémon capturé)",
    },
    {
      name: "Mew",
      nofind: "(Pokémon inconnu)",
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
        <h1>POKEDEX</h1>
      </div>
      <div>
        <p className="bv-pokedex">Bienvenue sur ton Pokedex ! Ici tu retrouveras toutes les informations sur les pokémons que tu as pu croiser ou capturer lors de ton aventure.</p>
      </div>
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
