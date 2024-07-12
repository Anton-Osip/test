import styled from "styled-components";
import React from "react";

type ScoreboardPropsTYpe = { value: number, maxValue: number }

export const Scoreboard: React.FC<ScoreboardPropsTYpe> = ({value, maxValue}: ScoreboardPropsTYpe) => {
    return <StyledScoreboard>
        <MaxValue>Max value :{maxValue}</MaxValue>
        <Value isMax = {maxValue === value}>{value}</Value>
    </StyledScoreboard>
}


export const StyledScoreboard = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #06a6b7;
    border-radius: 9px;
    margin-bottom: 25px;
`
export const Value = styled.p<{ isMax: boolean }>`
    font-size: 54px;
    font-weight: 700;
    color: ${props => props.isMax ? 'red' : '#2f2f2f'};
`

export const MaxValue = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #2f2f2f;
`