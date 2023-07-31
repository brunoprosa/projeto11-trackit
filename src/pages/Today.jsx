import axios from "axios"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useContext, useState } from "react"
import { TokenContext } from "../context/token"

export default function Today(){

    const {token} = useContext(TokenContext)
    const [habits, setHabits] = useState([])

    useEffect(() =>{
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',token)
    },[])

    return(
        <>
        <Navbar />
        today
        <Footer />
        </>
    )
}