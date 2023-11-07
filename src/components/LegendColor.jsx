import "../css/LegendColor.css";

function LegendColor () {

    return (
        <div className="legend-color-p">
            <p className="p-common">Pokémon commun</p>
            <p className="p-uncommon">Pokémon peu-commun</p>
            <p className="p-rarity">Pokémon rare</p>
            <p className="p-very-rare">Pokémon très-rare</p>
            <p className="p-ultra-rare">Pokémon ultra-rare</p>
            <p className="p-legendary">Pokémon légendaire</p>
        </div>
    )
}

export default LegendColor