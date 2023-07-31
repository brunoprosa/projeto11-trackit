import logo from "../assets/img/logo.svg"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Singin(){

    const navigate = useNavigate()
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')

    function cadastrar(e){
        e.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', 
        {
            email: email,
            name: nome,
            image: foto,
            password: senha
        })

        promise.then(() => navigate('/'))
        promise.catch(response => alert(response))
    }

    return(
        <>
        
            <img src={logo}/>

            <form onSubmit={cadastrar}>

                <input 
                type='email' 
                placeholder="email" 
                value={email} onChange={e => setEmail(e.target.value)} 
                required 
                />

                <input 
                type='password' 
                placeholder="senha" 
                value={senha} 
                onChange={e => setSenha(e.target.value)} 
                required 
                />

                <input 
                placeholder="nome"
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                required 
                />

                <input 
                placeholder="foto" 
                value={foto} 
                onChange={e => setFoto(e.target.value)} 
                required 
                />

                <button type="submit">Cadastrar</button>

            </form>

            <Link to="/">Já tem uma conta? Faça login!</Link>

        </>
    )
}