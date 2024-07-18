import React, {ButtonHTMLAttributes} from "react";


export const Button = ({title, onClick, className, disabled}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button disabled = {disabled} className = {className} onClick = {onClick}>{title}</button>
}