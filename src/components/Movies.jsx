/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function ListOfPokemons( {pokemons} ){

   return( 
   <ul className="movies">
{
      pokemons.map(pokemon => (
            <li className="movie" key={pokemon.id}>
                <h3>{pokemon.name}</h3>
                <p>
                    {
                        pokemon.type.map(type =>(
                             <strong key={type.id}>{type.type_name}</strong>
                        ))
                    }
                </p>
                <img src={"http://" + pokemon.image} alt="" />
            </li>
        ))
    }
    </ul>
   )
}


export function NoPokemonsFound(){
    return (
        <span style={{
            display: 'block',
            textAlign: 'center'
        }}> No hay resultados</span>
    )
}

// eslint-disable-next-line react/prop-types
export function Pokemons({pokemons}){
    const hasPokemons  = pokemons?.length > 0
    return(
        hasPokemons
        ? <ListOfPokemons pokemons={pokemons} />
        : <NoPokemonsFound></NoPokemonsFound>
    )
}