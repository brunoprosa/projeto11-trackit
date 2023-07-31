import axios from "axios"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import plus from "../assets/img/plus.png"
import Habit from "../components/Habit"
import CreateHabit from "../components/CreateHabit"
import { useEffect, useState, useContext } from "react"
import { TokenContext } from "../context/token"

export default function Habits(){

    const {token} = useContext(TokenContext)
    const [hidden, setHidden] = useState(true)
    const [habits, setHabits] = useState([])

    useEffect(() => {
       const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', token)
       console.log(token);

       promise.then(response => {
        let aux = response.data
        setHabits(aux)
       })
       promise.catch(response => console.log(response))

    }, [])

    return(
        <>
            <Navbar />
            <>
                <h1>Meus hábitos</h1>
                <img data-test="habit-create-btn" src={plus} onClick={() => setHidden(false)} />
            </>
            <CreateHabit hidden={hidden} setHidden={setHidden} habits={habits} setHabits={setHabits} />
            {habits.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : habits.map(h => <Habit key={h.id} id={h.id} name={h.name} days={h.days} />)}
            <Footer />
        </>
    )
}