import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}
export const AddItemForm = (props: AddItemFormPropsType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== '') {
            props.addItem(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'Enter') {
            addItemHandler()
        }
    }

    return (
        <div>
            <input
                className = {error ? 'error' : ''}
                value = {title}
                onChange = {changeTaskTitleHandler}
                onKeyUp = {addTaskOnKeyUpHandler}
            />
            <Button title = {'+'} onClick = {addItemHandler}/>
            {error && <div className = {'error-message'}>{error}</div>}
        </div>
    )
}