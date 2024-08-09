import { TaskType} from "./App";
import {v1} from "uuid";

type RemoveTaskType = {
    type: 'REMOVE-TASK'
    payload: { id: string }
}
type AddTaskType = {
    type: 'ADD-TASK'
    payload: { title: string }
}


type ActionType = RemoveTaskType | AddTaskType

export const tasksReducer = (state: TaskType[], action: ActionType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return state.filter((task: TaskType) => action.payload.id !== task.id);
        case 'ADD-TASK':
            const newTask = {
                id: v1(),
                title: action.payload.title,
                isDone: false
            }
            return  [newTask, ...state]
        default:
            return state;
    }
}

export const removeTaskAC = (id: string): RemoveTaskType => ({type: 'REMOVE-TASK', payload: {id: id}});
export const addTaskAC = (title: string): AddTaskType => ({type: 'ADD-TASK', payload: {title: title}});
