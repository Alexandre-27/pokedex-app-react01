import PropTypes from "prop-types";

function PokemonCard(props) {

    return (
      <section className="flex-card">
        <figure className="card">{props.pokemon.imgSrc ?(<img className="card-img" src={props.pokemon.imgSrc} 
          alt={props.pokemon.name}/> 
          ) : (
          <p>???</p>
          )}

          <figcaption>{props.pokemon.name}</figcaption>

          {props.pokemon.pv ?(<p>{props.pokemon.pv}</p> 
            ) : (
            <p>Pv: ???</p>
          )}

          {props.pokemon.attaque ?(<p>{props.pokemon.attaque}</p> 
            ) : (
            <p>Attaque: ???</p>
          )}

          {props.pokemon.defense ?(<p>{props.pokemon.defense}</p> 
            ) : (
            <p>Défense: ???</p>
          )}

          <p>{props.pokemon.nofind}</p>

        </figure>
      </section>
    )}

PokemonCard.propTypes = {
  pokemon : PropTypes.shape({
    name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
    pv : PropTypes.string,
    attaque : PropTypes.string,
    defense : PropTypes.string,
    nofind : PropTypes.string.isRequired,

  }).isRequired,
}

export default PokemonCard;