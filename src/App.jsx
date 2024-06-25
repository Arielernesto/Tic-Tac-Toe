import './index.css'
import pokemons from './pokemons/results.json'
import { Pokemons } from './components/Movies'
function App(){

    return (
        <main>
            <header>
            <h1>Api Pokemon</h1>
            <form action="">
            <input type="text" placeholder='Pikachu, Charmander, Charizard...' />
            <button type='submit'>Buscar</button>
            </form>
            </header>
            <section className='content'>
                {
                    <Pokemons pokemons={pokemons}></Pokemons>
                }
                
            </section>
        </main> 
    )
}
export default App