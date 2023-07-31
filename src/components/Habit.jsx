import { useEffect } from "react"
import WeekdaysH from "./WeekdaysH"
import trash from "../assets/img/dump.svg"

export default function Habit({id, name, days}){

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return(
        <>
            <p>{name}</p>
            <>
                {weekdays.map((w, i) =>
                    <WeekdaysH i={i} days={days} weekday={w} />
                )}
            </>
            <img src={trash} />
        </>
    )
}