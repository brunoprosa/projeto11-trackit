import { useState, useContext } from "react";
import { styled } from "styled-components";
import WeekdaysCH from "./WeekdaysCH";
import { TokenContext } from "../context/token"

export default function CreateHabit({hidden, setHidden, habits, setHabits}){

    const {token} = useContext(TokenContext)
    const [name, setName] = useState('')
    const [days, setDays] = useState([])
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    function createH(e){
        e.preventDefault()

        let habit = {
            name: name,
            days: days
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habit, token)
        promise.then(response => {
            let aux = [...habits]
            aux.push(response.data)
            setHabits(aux)
        })
        promise.catch(response => console.log(response))
    }

    return(
        <Container hidden={hidden}>
            <NewHabit onSubmit={createH}>
                <input 
                placeholder="nome do hábito"
                value={name}
                onChange={e => setName(e.target.value)} 
                required
                />
                {weekdays.map((w, i) =>
                    <WeekdaysCH i={i} days={days} weekday={w} setDays={setDays} />
                )}
                <>
                    <Cancel onClick={() => setHidden(hidden ? false : true)}>Cancelar</Cancel>
                    <Save type="submit">Salvar</Save>
                </>
            </NewHabit>
        </Container>
    )
}

const Container = styled.div`
display: ${props => props.hidden ? "none" : "block"};
`

const NewHabit = styled.form`

`

const Cancel = styled.p`

`

const Save = styled.button`

`