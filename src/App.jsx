import './index.css'
import { Pokemons } from './components/Movies'
import { usePokemons } from './hooks/usePokemons'
import { useSearch } from './hooks/useSearch'
import { useState } from 'react'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

function App(){
    const [sort, setSort] = useState(false)
    const {search, updateSearch , error} = useSearch()   
    const {mappedPokemons, getPokemons, sortedPokemons} = usePokemons({search, sort})

    const debounceGetMovies = useCallback(
        debounce(() =>{
          getPokemons({search})  
        }, 300)
        , [getPokemons]
    )
    const handleSubmit = (event) =>{
        event.preventDefault()
        const fields = new window.FormData(event.target)
        const query = fields.get('query')
        updateSearch(query)
        if (!error) {
        getPokemons({search})
        }
    }
    const handleChange = (event) => {
        updateSearch(event.target.value)
        debounceGetMovies({search})
            
    }
    const handleOrder = () =>{
        setSort(!sort)
       
    }
    return (
        <main>
            <header>
            <h1>Api Pokemon</h1>
            <form action="" onSubmit={handleSubmit}>
            <input onChange={handleChange}  name="query"  type="text" placeholder='Pikachu, Charmander, Charizard...' />
            <button type='submit'>Buscar</button>
            </form>
            <label htmlFor="order" className='order'>
                <span >Ordenar Alfabéticamente</span>
            <input onClick={handleOrder} type="checkbox" name="order" id="" />
            </label>
            </header>
            <section className='content'>
            {
                
                    error && (
                        <span className='error'>{error}</span>
                    )
                }
                {
                    <Pokemons pokemons={mappedPokemons}></Pokemons>
                }
               
                
            </section>
        </main> 
    )
}
export default App