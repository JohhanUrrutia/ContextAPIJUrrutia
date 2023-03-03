import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export default function UserContextProvider({children}) {

    const [texto, setTexto] = useState ("Texto desde userContext") 

    const [fotos, setFotos] = useState ([])

    const apiJSON = async () => {
        try{
        const archivoJSON = await fetch("/fotos.json")
        const originalJSON = await archivoJSON.json()
        setFotos(originalJSON.photos)
        }catch(error){
        console.error(error)
        }
    }

    useEffect(() => {apiJSON()}, [])



    return (
        <UserContext.Provider 
        value={{fotos: fotos, setFotos: setFotos, texto: texto, setTexto: setTexto}}>
            {children}
        </UserContext.Provider>
    )
}