import { useRef } from "react";
import { useState, useEffect } from "react";

export function useSearch(){
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
    useEffect(()  =>{
        if (isFirstInput.current) {
            isFirstInput.current = search == ''
            setError(null)
            return
        }
        if (search == '') {
            setError("Escriba el nombre del Pokemón")
            return
        }
        if ((!isNaN(parseFloat(search)))) {
            setError("No se pueden buscar números")
            return
        }
        if (search.length < 3) {
            setError("La búsqueda debe tener al menos 3 caracteres")
            return
        }
    setError(null)
    }, [search])
    return {search, updateSearch , error}
}