import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Scoreboard} from "./components/Scoreboard";
import {Controllers} from "./components/Controllers";
import {Progressbar} from "./components/Progressbar";


function App() {
    const min: number = 0
    const max: number = 10
    const [value, setValue] = useState<number>(min);
    const [maxValue, setMaxValue] = useState<number>(max);

    const randomValue = (min: number, max: number) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    const addOne = () => {
        if (value < maxValue) {
            setValue(prevState => prevState += 1)
        }

    }

    const resetValue = () => {
        setValue(min)
        setMaxValue(randomValue(1, max))
    }


    return (
        <div className = "App">
            <StyledCounter>
                <Scoreboard value = {value}
                            maxValue = {maxValue}/>
                <Progressbar fill = {(100 * value) / maxValue}/>
                <Controllers
                    addOne = {addOne}
                    resetValue = {resetValue}
                    value = {value}
                    maxValue = {maxValue}/>
            </StyledCounter>
        </div>
    );
}

export default App;

const StyledCounter = styled.div`
    padding: 15px;
    border-radius: 5px;
    min-width: 500px;
    border: 2px solid #06a6b7;
`

