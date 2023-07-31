import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div data-test="menu">
            <Link data-test="habit-link" to='/habitos'>Hábitos</Link>
            <Link data-test="today-link" to='/hoje'>Hoje</Link>
            <Link data-test="history-link" to='/historico'>Histórico</Link>
        </div>
    )
}