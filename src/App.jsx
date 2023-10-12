import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar";
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
      uncommon: "Pokémon peu-commun",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      pv: "Pv: 63",
      attaque: "Attaque: 96",
      defense: "Défense: 50",
      nofind: "(Pokémon capturé)",
      uncommon: "Pokémon peu-commun",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        nofind: "(Pokémon aperçu)",
        uncommon: "Pokémon peu-commun",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      pv: "Pv: 80",
      attaque: "Attaque: 110",
      defense: "Défense: 95",
      nofind: "(Pokémon capturé)",
      rarity: "Pokémon rare",
    },
    {
      name: "Mew",
      nofind: "(Pokémon inconnu)",
      legendary: "Pokémon légendaire",
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
        <NavBar 
        pokemonI={pokemonIndex}
        precedent={precedent}
        suivant={suivant}
        pokemon={pokemonList}/>
      </div>
      <div>
        <PokemonCard pokemon={pokemon}/>
      </div>
      <div className="legend-color-p">
        <p className="p-uncommon">Pokémon peu commun</p>
        <p className="p-rarity">Pokémon rare</p>
        <p className="p-legendary">Pokémon légendaire</p>
      </div>
    </>
  ); 
}

export default App;
