const pokemonList = [
    {
        name: "Mew",
        image: "/src/assets/Images/151.png",
    },
    {
        name: "Sylveon",
    }
];

function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        <div className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
        </div>
    );
}
export default PokemonCard;