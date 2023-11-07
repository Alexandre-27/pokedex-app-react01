import "../css/LegendeText.css";

function LegendeText () {

    return (
        <div className="div-legende">
            <h3 className="h3-legende">Légende:</h3>
            <p className="p-legende-i">À noter que les caractéristiques sont réprésentative des capacités maximum que peut atteindre un pokémon.</p>
            <p className="p-legende">”Pv”: représente la vie du pokémon</p>
            <p className="p-legende">”Attaque”: représente les dégâts qu'infligent un pokémon</p>
            <p className="p-legende">”Défense”: représente une soustraction appliquer au nombre de dégâts d'attaques du pokémon avec lequel il combat</p>
            <p className="p-legende">”Capturé”: représente les pokémons que tu as en ta possession</p>
            <p className="p-legende">”Aperçu”: représente les pokémons que tu as vue</p>
            <p className="p-legende">”Inconnu”: représente les pokémons dont tu connais l'existence mais que tu n'as jamais vu</p>
            <p className="p-legende">”???”: représente le fait que tu n'as pas les informations correspondantes</p>
      </div>
    )
}

export default LegendeText
