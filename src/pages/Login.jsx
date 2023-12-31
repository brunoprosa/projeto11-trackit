import logo from "../assets/img/logo.svg"
import { useNavigate, Link } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { TokenContext } from "../context/token"
import { PerfilContext } from "../context/perfil"

export default function Login(){

    const navigate = useNavigate()
    const {setToken} = useContext(TokenContext)
    const {setFoto} = useContext(PerfilContext)
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function logar(e){
        e.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', 
        {
            email: email,
            password: senha
        })

        promise.then(response => {
            setToken({
                headers: {
                    "Authorization": response.data.token
                }
            })
            setFoto(response.data.image)
            navigate('/hoje')
        })
        promise.catch(response => alert(response))
    }

    return(
        <>
            <img src={logo}/>
            <form onSubmit={logar}>

                <input 
                data-test="email-input"
                type="email" 
                placeholder="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                />

                <input 
                data-test="password-input"
                type="password" 
                placeholder="senha" 
                value={senha} 
                onChange={e => setSenha(e.target.value)} 
                required 
                />

                <button data-test="login-btn" type="submit">Entrar</button>

            </form>
            <Link data-test="signup-link" to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Link>
        </>
    )
}