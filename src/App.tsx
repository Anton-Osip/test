import React, {useCallback, useRef, useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Scoreboard} from "./components/Scoreboard";
import {Controllers} from "./components/Controllers";
import {Progressbar} from "./components/Progressbar";


function App() {
    const min: number = 0
    const maxValue = useRef<number>(5)
    const [value, setValue] = useState<number>(min);


    const randomValue = (min: number, max: number) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    const addOne = useCallback<() => void>(() => {
        if (value < maxValue.current) {
            setValue(prevState => prevState += 1)
        }

    }, [])

    const resetValue = useCallback<() => void>(() => {
        setValue(min)
        maxValue.current = randomValue(1, 10)
    }, [])


    return (
        <div className = "App">
            <StyledCounter>
                <Scoreboard value = {value}
                            maxValue = {maxValue.current}/>
                <Progressbar fill = {(100 * value) / maxValue.current}/>
                <Controllers
                    addOne = {addOne}
                    resetValue = {resetValue}
                    value = {value}
                    maxValue = {maxValue.current}/>
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

