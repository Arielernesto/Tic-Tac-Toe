// import pokemons from '../pokemons/results.json'

import { useRef } from "react"
import { useState, useMemo } from "react"

export function usePokemons({search, sort}){
    const [pokemons, setPokemons] = useState()
    const previusSearch = useRef(search)
    const mappedPokemons = pokemons?.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.pok_name,
        type: pokemon.type,
        image: pokemon.image.url
    }))
    const getPokemons = ({search})  =>{
        if (search == previusSearch.current) {
            return
         }
            try{
            previusSearch.current = search
            fetch(`http://localhost/PokeApi/Api_pokemon/public/api/pokemons/${search}/search`)
            .then(res => res.json())
            .then(json =>{
                setPokemons(json)
            })
        } catch(e) {
            console.log(e)
        }
    }
    // const sortedPokemons = sort
    // ? [...mappedPokemons].sort((a,b) => a.name.localeCompare(b.name))
    // : mappedPokemons
    const sortedPokemons = useMemo(() =>{
        console.log('render')
        return sort
         ? [...mappedPokemons].sort((a,b) => a.name.localeCompare(b.name))
         : mappedPokemons
    }, [sort, pokemons])
    return {mappedPokemons: sortedPokemons , getPokemons, sortedPokemons}
}