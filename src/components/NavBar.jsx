import PropTypes from "prop-types";

function NavBar (props) {

    return (
        <nav className="nav-style">
            <p>Clique sur les boutons pour faire défiler les pokémons de ton pokedex</p>
            {props.pokemonI > 0 &&
                <button onClick={props.precedent}>Précédent</button>
            }
            {props.pokemonI < props.pokemon.length - 1 &&
                <button onClick={props.suivant}>Suivant</button>
            }
        </nav>
    )
}

NavBar.propTypes = {
    pokemonI : PropTypes.string.isRequired,
    precedent : PropTypes.string.isRequired,
    suivant : PropTypes.string.isRequired,
    pokemon : PropTypes.shape({

    }).isRequired,
}

export default NavBar;