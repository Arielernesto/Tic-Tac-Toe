import './index.css'
import { Pokemons } from './components/Movies'
import { usePokemons } from './hooks/usePokemons'
import { useSearch } from './hooks/useSearch'

function App(){
    const {search, updateSearch , error} = useSearch()   
    const {mappedPokemons, getPokemons} = usePokemons({search})
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
    }
    return (
        <main>
            <header>
            <h1>Api Pokemon</h1>
            <form action="" onSubmit={handleSubmit}>
            <input onChange={handleChange}  name="query"  type="text" placeholder='Pikachu, Charmander, Charizard...' />
            <button type='submit'>Buscar</button>
            </form>
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