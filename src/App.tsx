import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

type ObjectType = {
    todolistId: string
    title: string
    filter: FilterValuesType
    tasks: Array<TasksType>
}
export type TasksType = {
    taskId: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";


function App() {


    const [todoFromServer, setTodoFromServer] = useState<ObjectType[]>([
        {
            todolistId: v1(),
            title: "What to learn",
            filter: "all",
            tasks: [
                {taskId: v1(), title: "HTML&CSS", isDone: true},
                {taskId: v1(), title: "JS", isDone: true}
            ],
        },
        {
            todolistId: v1(),
            title: "What to do",
            filter: "all",
            tasks: [
                {taskId: v1(), title: "HTML&CSS2", isDone: true},
                {taskId: v1(), title: "JS2", isDone: true}
            ],
        }
    ])


    function removeTask(id: string, todolistId: string) {
        setTodoFromServer(prevState => prevState.map(tl => tl.todolistId === todolistId ? {
            ...tl,
            tasks: tl.tasks.filter(t => t.taskId !== id)
        } : tl))
    }

    function addTask(title: string, todolistId: string) {
        const newTask: TasksType = {taskId: v1(), title: title, isDone: false}
        setTodoFromServer(prevState => prevState.map(tl => tl.todolistId === todolistId ? {
            ...tl,
            tasks: [newTask, ...tl.tasks]
        } : tl))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        setTodoFromServer(prevState => prevState.map(tl => tl.todolistId === todolistId ? {
            ...tl,
            tasks: tl.tasks.map(t => t.taskId === id ? {...t, isDone: isDone} : t)
        } : tl))
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        setTodoFromServer(prevState => prevState.map(tl => tl.todolistId === todolistId ? {...tl, filter: value} : tl))
    }

    function removeTodolist(id: string) {
        setTodoFromServer(prevState => prevState.filter(tl => tl.todolistId !== id))
    }

    return (
        <div className = "App">
            {
                todoFromServer.map(tl => {
                    let allTodolistTasks = tl.tasks;
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
                    }

                    return <Todolist
                        key = {tl.todolistId}
                        id = {tl.todolistId}
                        title = {tl.title}
                        tasks = {tasksForTodolist}
                        removeTask = {removeTask}
                        changeFilter = {changeFilter}
                        addTask = {addTask}
                        changeTaskStatus = {changeStatus}
                        filter = {tl.filter}
                        removeTodolist = {removeTodolist}
                    />
                })
            }

        </div>
    );
}

export default App;
