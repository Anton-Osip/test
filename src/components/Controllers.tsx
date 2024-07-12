import styled from "styled-components";
import {Button} from "../Button";

type ControllersPropsTYpe = {
    addOne: () => void
    resetValue: () => void
    value: number
    maxValue: number
}

export const Controllers: React.FC<ControllersPropsTYpe> = ({
                                                                addOne,
                                                                resetValue,
                                                                value,
                                                                maxValue
                                                            }: ControllersPropsTYpe) => {
    return (
        <StyledControllers>
            <StyledButton
                title = "Inc"
                onClick = {addOne}
                disabled = {value === maxValue}/>
            <StyledButton
                title = "Reset"
                onClick = {resetValue}
                disabled = {value === 0}/>
        </StyledControllers>
    )
}


export const StyledControllers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    border-radius: 5px;
    width: 500px;
    border: 2px solid #06a6b7;
`

export const StyledButton = styled(Button)`
    padding: 15px 45px;
    font-size: 34px;
    background-color: #06a6b7;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }`
