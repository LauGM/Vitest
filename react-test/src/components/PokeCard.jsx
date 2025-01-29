/* eslint-disable react/prop-types */
export default function PokeCard({pokemon}) {

    if(!pokemon){
        return <p>No Pokemon selected</p>;
    }

    if(Object.keys(pokemon).length === 0){
        return <p>Error loading Pokemon data</p>;
    }

  return (
    <>
      <article>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>
            <h3>{pokemon.name}</h3>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.types[0].type.name}</p>
        </div>
      </article>
    </>
  );
}
