// import pokemons from '../pokemons/results.json'

import { useState } from "react"

export function usePokemons(){
    const [pokemons, setPokemons] = useState()
    const mappedPokemons = pokemons?.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.pok_name,
        type: pokemon.type,
        image: pokemon.image.url
    }))
    const getPokemons = ({search})  =>{
        if (search) {
            try{
            fetch(`http://localhost/PokeApi/Api_pokemon/public/api/pokemons/${search}/search`)
            .then(res => res.json())
            .then(json =>{
                setPokemons(json)
            })
        } catch(e) {
            console.log(e)
        }
        }
        else{
            return []
        }
    }
    return {mappedPokemons , getPokemons}
}