/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function ListOfPokemons( {pokemons} ){

   return( 
   <ul>
{
      pokemons.map(pokemon => (
            <li key={pokemon.id}>
                <h3>{pokemon.pok_name}</h3>
                <p>
                    {
                        pokemon.type.map(type =>(
                             <strong key={type.id}>{type.type_name}</strong>
                        ))
                    }
                </p>
                <img src={"http://" + pokemon.image.url} alt="" />
            </li>
        ))
    }
    </ul>
   )
}

export function NoPokemonsFound(){
    return (
        <span> No hay resultados</span>
    )
}

// eslint-disable-next-line react/prop-types
export function Pokemons({pokemons}){
    console.log( 2 + 2)
    const hasPokemons  = pokemons?.length > 0
    return(
        hasPokemons
        ? <ListOfPokemons pokemons={pokemons} />
        : <NoPokemonsFound></NoPokemonsFound>
    )
}