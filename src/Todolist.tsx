import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent} from "react";
import {Button} from "./Button";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

type PropsType = {
    title: string
    todolistId: string
    tasks: TaskType[]
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (filter: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, taskStatus: boolean, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodoListTitle: (title: string, todolistId: string) => void
    changeTaskTitle: (taskId: string, title: string, todolistId: string) => void
}

export const Todolist = (props: PropsType) => {
    const {
        title,
        tasks,
        filter,
        removeTask,
        changeFilter,
        addTask,
        changeTaskStatus,
        todolistId,
        removeTodolist,
        changeTodoListTitle, changeTaskTitle
    } = props


    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        changeFilter(filter, props.todolistId)
    }

    const removeTodolistHandler = () => {
        removeTodolist(todolistId)
    }

    const addTaskCallback = (title: string) => {
        addTask(title, props.todolistId)
    }

    const changeTodoListTitleHandler = (title: string) => {
        changeTodoListTitle(title, props.todolistId)
    }

    return (
        <div>
            <div className = {"todolist-title-container"}>
                <h3><EditableSpan value = {title} changeTitle = {changeTodoListTitleHandler}/></h3>
                <Button title = {'x'} onClick = {removeTodolistHandler}/>
            </div>
            <AddItemForm addItem = {addTaskCallback}/>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {tasks.map((task) => {

                            const removeTaskHandler = () => {
                                removeTask(task.id, todolistId)
                            }

                            const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                const newStatusValue = e.currentTarget.checked
                                changeTaskStatus(task.id, newStatusValue, todolistId)
                            }
                            const changeTaskTitleHandler = (text: string) => {
                                changeTaskTitle(task.id, text, todolistId)
                            }

                            return <li key = {task.id} className = {task.isDone ? 'is-done' : ''}>
                                <input type = "checkbox" checked = {task.isDone} onChange = {changeTaskStatusHandler}/>
                                <EditableSpan value = {task.title} changeTitle = {changeTaskTitleHandler}/>
                                <Button onClick = {removeTaskHandler} title = {'x'}/>
                            </li>
                        })}
                    </ul>
            }
            <div>
                <Button className = {filter === 'all' ? 'active-filter' : ''} title = {'All'}
                        onClick = {() => changeFilterTasksHandler('all')}/>
                <Button className = {filter === 'active' ? 'active-filter' : ''} title = {'Active'}
                        onClick = {() => changeFilterTasksHandler('active')}/>
                <Button className = {filter === 'completed' ? 'active-filter' : ''} title = {'Completed'}
                        onClick = {() => changeFilterTasksHandler('completed')}/>
            </div>
        </div>
    )
}


