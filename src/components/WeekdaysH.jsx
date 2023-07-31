import styled from 'styled-components'

export default function WeekdaysH({i, days, weekday}){
    return(
        <Weekday selecionado={days.includes(i)}>{weekday}</Weekday>
    )
}

const Weekday = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.selecionado ? "#FFFFFF" : "#D4D4D4"};
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
`