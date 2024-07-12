import React, {ButtonHTMLAttributes} from "react";


export const Button = ({title, onClick,className}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button className={className} onClick = {onClick}>{title}</button>
}