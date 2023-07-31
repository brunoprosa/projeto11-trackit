import { useEffect, useContext } from "react"
import WeekdaysH from "./WeekdaysH"
import trash from "../assets/img/dump.svg"
import axios from "axios"

export default function Habit({id, name, days}){

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const {token} = useContext(TokenContext)

    return(
        <div data-test="habit-container">
            <p data-test="habit-name">{name}</p>
            <>
                {weekdays.map((w, i) =>
                    <WeekdaysH i={i} days={days} weekday={w} />
                )}
            </>
            <img src={trash} 
            data-test="habit-delete-btn"
            onClick={() => axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, token)}
            />
        </div>
    )
}