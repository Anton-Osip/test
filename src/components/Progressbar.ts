import styled from "styled-components";

export const Progressbar = styled.div<{ fill: number }>`
    width: 100%;
    height: 15px;
    border: 2px solid #06a6b7;
    border-radius: 5px;
    margin-bottom: 25px;
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        width: ${props => props.fill}%;
        background: #06a6b7;
        transition: all 0.3s ease-in-out;
    }
`