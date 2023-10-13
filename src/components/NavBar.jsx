import PropTypes from "prop-types";

function NavBar (props) {
const {pokemonList, setPokemonIndex} = props;

    return (
        <nav className="nav-style">
            <p>Clique sur l'un des pokémons disponible dans ton Pokedex pour le voir apparaître avec ses caractéristiques</p>
            <ul>
            {pokemonList.map((pokemonL, index) => (
            <button key={index} onClick={() => setPokemonIndex(index)}>{pokemonL.name}</button>
            ))}
            </ul>
        </nav>
    )
}

export default NavBar;