import { createContext, useState } from "react";

export const PerfilContext = createContext('')

function PerfilProvider({children}){
    const [foto, setFoto] = useState('')

    return(
        <PerfilContext.Provider value={{foto, setFoto}}>{children}</PerfilContext.Provider>
    )
}

export default PerfilProvider