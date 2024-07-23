import {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    value: string
    changeTitle: (title: string) => void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState('')

    const activateEditModeHandler = () => {
        setText(props.value)
        setEditMode(true)
    }
    const deactivateEditModeHandler = () => {
        setEditMode(false)
        props.changeTitle(text)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    return (<>
        {editMode ? (
            <input value = {text} autoFocus onChange = {onChangeHandler} onBlur = {deactivateEditModeHandler}/>
        ) : (
            <span onDoubleClick = {activateEditModeHandler} >{props.value}</span>
        )}
    </>)
}