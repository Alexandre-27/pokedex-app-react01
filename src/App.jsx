import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar";
import LegendColor from "./components/LegendColor";
import LegendeText from "./components/LegendeText";
import { useEffect, useState } from "react";
import "./css/App.css";

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
      alert: "",
    },
    {
      name: "Mew",
      nofind: "(Pokémon inconnu)",
      legendary: "Pokémon légendaire",
    },
    {
      name: "Mewtwo",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      nofind: "(Pokémon aperçu)",
      legendary: "Pokémon légendaire",
    },
    {
      name: "Dracolosse",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
      nofind: "(Pokémon aperçu)",
      ultraRare: "Pokémon ultra rare",
    },
    {
      name: "Léviator",
      nofind: "(Pokémon inconnu)",
      veryRare: "Pokémon très rare",
    },
    {
      name: "Minidraco",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
        pv: "Pv: 158",
        attaque: "Attaque: 195",
        defense: "Défense: 135",
        nofind: "(Pokémon capturé)",
        ultraRare: "Pokémon ultra rare",
    },
    {
      name: "Évoli",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
        pv: "Pv: 100",
        attaque: "Attaque: 95",
        defense: "Défense: 96",
        nofind: "(Pokémon capturé)",
        rarity: "Pokémon rare",
    },
    {
      name: "Aquali",
        nofind: "(Pokémon inconnu)",
        rarity: "Pokémon rare",
    },
    {
      name: "Voltali",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
        pv: "Pv: 120",
        attaque: "Attaque: 115",
        defense: "Défense: 133",
        nofind: "(Pokémon capturé)",
        rarity: "Pokémon rare",
    },
    {
      name: "Pyroli",
      nofind: "(Pokémon inconnu)",
      rarity: "Pokémon rare",
    },
    {
      name: "Tauros",
      nofind: "(Pokémon inconnu)",
      uncommon: "Pokémon peu commun",
    },
    {
      name: "Magicarpe",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
      nofind: "(Pokémon aperçu)",
      common: "Pokémon commun",
    },
    {
      name: "Herbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      nofind: "(Pokémon aperçu)",
      uncommon: "Pokémon peu commun",
    },
    {
      name: "Reptincel",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        pv: "Pv: 145",
        attaque: "Attaque: 145",
        defense: "Défense: 102",
        nofind: "(Pokémon capturé)",
        veryRare: "Pokémon très rare",
    },
    {
      name: "Dracaufeu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        pv: "Pv: 210",
        attaque: "Attaque: 184",
        defense: "Défense: 160",
        nofind: "(Pokémon capturé)",
        ultraRare: "Pokémon ultra rare",
    },
    {
      name: "Artikodin",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
        pv: "Pv: 260",
        attaque: "Attaque: 300",
        defense: "Défense: 170",
        nofind: "(Pokémon capturé)",
        legendary: "Pokémon légendaire",
    },
    {
      name: "M. Mime",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
        pv: "Pv: 40",
        attaque: "Attaque: 39",
        defense: "Défense: 38",
        nofind: "(Pokémon capturé)",
        common: "Pokémon commun",
    },
    {
      name: "Insécateur",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
      pv: "Pv: 39",
      attaque: "Attaque: 46",
      defense: "Défense: 30",
      nofind: "(Pokémon capturé)",
      common: "Pokémon commun",
    },
    {
      name: "Lippoutou",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
        nofind: "(Pokémon aperçu)",
        common: "Pokémon commun",
    },
  
];

function App() {

  useEffect (
    () => {
      setTimeout (
        () => {
          alert("Salut ! Comment vas-tu dresseur pokémon ?")
        }, 6000
      );
    },[]
  );

  const [pokemonIndex, setPokemonIndex] = useState(0)

  const pokemon = pokemonList[pokemonIndex];
  

  return (
    <>
      <div>
        <h1>POKEDEX</h1>
      </div>
      <div>
        <p className="bv-pokedex">Bienvenue sur ton Pokedex ! Ici tu retrouveras toutes les informations sur les pokémons que tu as pu croiser ou capturer lors de ton aventure.</p>
      </div>
      <NavBar
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
      />
      <div className="info-pokedex">
        <LegendColor />
        <PokemonCard pokemon={pokemon}/>
        <LegendeText />
      </div>
    </>
  ); 
}

export default App;
