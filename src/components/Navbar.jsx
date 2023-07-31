import logo from '../assets/img/mini-logo.png'
import { useContext } from 'react'
import { PerfilContext } from '../context/perfil'

export default function Navbar(){

    const { foto } = useContext(PerfilContext)

    return(
        <div data-test="header">
            <img src={logo} />
            <img data-test="avatar" src={foto} />
        </div>
    )
}